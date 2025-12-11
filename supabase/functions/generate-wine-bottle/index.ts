import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { labelImageBase64, wineName, wineType, bottleStyle } = await req.json();

    if (!labelImageBase64 || !wineName || !wineType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: labelImageBase64, wineName, wineType" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Generating bottle for: ${wineName} (${wineType})`);

    // Build the prompt based on wine type
    const bottleDescription = getBottleDescription(wineType, bottleStyle);
    
    const prompt = `Create a photorealistic product photograph of this premium wine bottle. 
The bottle should be a ${bottleDescription}.
The wine label shown in the image should be clearly visible and prominently displayed on the bottle.
Place the bottle on an elegant dark wood surface with warm, soft studio lighting.
Background: smooth gradient from deep charcoal (#1A1A1A) to warm cream (#F3E8D9).
Style: luxury wine advertisement, high-end product photography, slight reflection on surface.
The overall feel should be sophisticated, warm, and premium like a $250k wine brand.
Make sure the label is perfectly wrapped around the curved surface of the bottle.`;

    console.log("Sending request to Lovable AI Gateway...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              {
                type: "image_url",
                image_url: { url: labelImageBase64 }
              }
            ]
          }
        ],
        modalities: ["image", "text"]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received response from AI Gateway");

    const generatedImageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    
    if (!generatedImageUrl) {
      console.error("No image in response:", JSON.stringify(data));
      throw new Error("No image generated in response");
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        imageUrl: generatedImageUrl,
        wineName 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-wine-bottle:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function getBottleDescription(wineType: string, bottleStyle?: string): string {
  const styles: Record<string, string> = {
    "red": "dark green glass Bordeaux-style bottle with tall shoulders and a deep punt",
    "red-blend": "dark green glass Bordeaux-style bottle with tall shoulders and elegant proportions",
    "white": "clear or pale green glass Burgundy-style bottle with sloping shoulders",
    "riesling": "tall, slender green-amber Rhine-style bottle with elegant elongated shape",
    "moscato": "clear glass Italian-style bottle with elegant curves",
    "rose": "clear or pale pink glass Provence-style bottle"
  };
  
  return bottleStyle ? styles[bottleStyle] || styles[wineType] || styles["red"] : styles[wineType] || styles["red"];
}
