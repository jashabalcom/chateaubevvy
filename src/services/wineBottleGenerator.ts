import { supabase } from "@/integrations/supabase/client";

export interface WineLabel {
  id: string;
  name: string;
  type: "red" | "white" | "red-blend" | "riesling" | "moscato" | "rose";
  bottleStyle?: string;
  labelPath: string;
}

export interface GeneratedBottle {
  id: string;
  name: string;
  imageUrl: string;
  generatedAt: Date;
}

// Wine labels configuration
export const wineLabels: WineLabel[] = [
  { id: "merlot", name: "Merlot", type: "red", labelPath: "/src/assets/labels/merlot.png" },
  { id: "cabernet", name: "Cabernet Sauvignon", type: "red", labelPath: "/src/assets/labels/cabernet.png" },
  { id: "malbec", name: "Malbec", type: "red", labelPath: "/src/assets/labels/malbec.png" },
  { id: "trinity", name: "Trinity", type: "red-blend", labelPath: "/src/assets/labels/trinity.png" },
  { id: "fall-harvest", name: "Fall Harvest", type: "red-blend", labelPath: "/src/assets/labels/fall-harvest.png" },
  { id: "chardonnay", name: "Chardonnay", type: "white", labelPath: "/src/assets/labels/chardonnay.png" },
  { id: "riesling", name: "Riesling", type: "riesling", bottleStyle: "riesling", labelPath: "/src/assets/labels/riesling.png" },
  { id: "moscato", name: "Moscato", type: "moscato", bottleStyle: "moscato", labelPath: "/src/assets/labels/moscato.png" },
  { id: "simply-white", name: "Simply White", type: "white", labelPath: "/src/assets/labels/simply-white.png" },
];

// Convert image to base64
export async function imageToBase64(imagePath: string): Promise<string> {
  // Dynamic import for the label images
  const labelModules: Record<string, () => Promise<{ default: string }>> = {
    "/src/assets/labels/merlot.png": () => import("@/assets/labels/merlot.png"),
    "/src/assets/labels/cabernet.png": () => import("@/assets/labels/cabernet.png"),
    "/src/assets/labels/malbec.png": () => import("@/assets/labels/malbec.png"),
    "/src/assets/labels/trinity.png": () => import("@/assets/labels/trinity.png"),
    "/src/assets/labels/fall-harvest.png": () => import("@/assets/labels/fall-harvest.png"),
    "/src/assets/labels/chardonnay.png": () => import("@/assets/labels/chardonnay.png"),
    "/src/assets/labels/riesling.png": () => import("@/assets/labels/riesling.png"),
    "/src/assets/labels/moscato.png": () => import("@/assets/labels/moscato.png"),
    "/src/assets/labels/simply-white.png": () => import("@/assets/labels/simply-white.png"),
  };

  const moduleLoader = labelModules[imagePath];
  if (!moduleLoader) {
    throw new Error(`Unknown label path: ${imagePath}`);
  }

  const module = await moduleLoader();
  const imageUrl = module.default;

  // Fetch the image and convert to base64
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Generate wine bottle image
export async function generateWineBottle(label: WineLabel): Promise<GeneratedBottle> {
  const labelImageBase64 = await imageToBase64(label.labelPath);

  const { data, error } = await supabase.functions.invoke("generate-wine-bottle", {
    body: {
      labelImageBase64,
      wineName: label.name,
      wineType: label.type,
      bottleStyle: label.bottleStyle || label.type,
    },
  });

  if (error) {
    console.error("Error generating bottle:", error);
    throw new Error(error.message || "Failed to generate bottle image");
  }

  if (!data.success || !data.imageUrl) {
    throw new Error(data.error || "Failed to generate bottle image");
  }

  return {
    id: label.id,
    name: label.name,
    imageUrl: data.imageUrl,
    generatedAt: new Date(),
  };
}

// Download base64 image
export function downloadBase64Image(base64Data: string, filename: string) {
  const link = document.createElement("a");
  link.href = base64Data;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
