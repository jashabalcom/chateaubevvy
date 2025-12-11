import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Download, Check, Wine, Sparkles } from "lucide-react";
import {
  wineLabels,
  generateWineBottle,
  downloadBase64Image,
  type WineLabel,
  type GeneratedBottle,
} from "@/services/wineBottleGenerator";

// Import labels for display
import labelMerlot from "@/assets/labels/merlot.png";
import labelCabernet from "@/assets/labels/cabernet.png";
import labelMalbec from "@/assets/labels/malbec.png";
import labelTrinity from "@/assets/labels/trinity.png";
import labelFallHarvest from "@/assets/labels/fall-harvest.png";
import labelChardonnay from "@/assets/labels/chardonnay.png";
import labelRiesling from "@/assets/labels/riesling.png";
import labelMoscato from "@/assets/labels/moscato.png";
import labelSimplyWhite from "@/assets/labels/simply-white.png";

const labelImages: Record<string, string> = {
  merlot: labelMerlot,
  cabernet: labelCabernet,
  malbec: labelMalbec,
  trinity: labelTrinity,
  "fall-harvest": labelFallHarvest,
  chardonnay: labelChardonnay,
  riesling: labelRiesling,
  moscato: labelMoscato,
  "simply-white": labelSimplyWhite,
};

const GenerateBottles = () => {
  const { toast } = useToast();
  const [generatedBottles, setGeneratedBottles] = useState<Record<string, GeneratedBottle>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const handleGenerate = async (label: WineLabel) => {
    setLoadingStates((prev) => ({ ...prev, [label.id]: true }));
    
    try {
      toast({
        title: "Generating...",
        description: `Creating photorealistic bottle for ${label.name}`,
      });

      const bottle = await generateWineBottle(label);
      
      setGeneratedBottles((prev) => ({ ...prev, [label.id]: bottle }));
      
      toast({
        title: "Success!",
        description: `${label.name} bottle generated successfully`,
      });
    } catch (error) {
      console.error("Generation error:", error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate bottle",
        variant: "destructive",
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [label.id]: false }));
    }
  };

  const handleDownload = (bottle: GeneratedBottle) => {
    downloadBase64Image(bottle.imageUrl, `${bottle.id}-bottle.png`);
    toast({
      title: "Downloaded",
      description: `${bottle.name} bottle image saved`,
    });
  };

  const handleGenerateAll = async () => {
    for (const label of wineLabels) {
      if (!generatedBottles[label.id]) {
        await handleGenerate(label);
        // Add delay between requests to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  };

  return (
    <div className="min-h-screen bg-wine-dark py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wine className="w-8 h-8 text-gold" />
            <h1 className="heading-section text-cream">Wine Bottle Generator</h1>
            <Sparkles className="w-8 h-8 text-gold" />
          </div>
          <p className="text-cream/70 max-w-2xl mx-auto font-body text-lg mb-6">
            Generate photorealistic wine bottle images from your labels using AI
          </p>
          <Button
            variant="gold"
            size="lg"
            onClick={handleGenerateAll}
            disabled={Object.values(loadingStates).some(Boolean)}
          >
            {Object.values(loadingStates).some(Boolean) ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate All Bottles
              </>
            )}
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wineLabels.map((label, index) => {
            const isLoading = loadingStates[label.id];
            const generated = generatedBottles[label.id];

            return (
              <motion.div
                key={label.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-charcoal/60 border-gold/20 overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-cream font-display flex items-center gap-2">
                      {label.name}
                      {generated && <Check className="w-5 h-5 text-green-500" />}
                    </CardTitle>
                    <p className="text-cream/60 text-sm font-body capitalize">
                      {label.type.replace("-", " ")}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Label Preview */}
                      <div className="aspect-[3/4] bg-charcoal/40 rounded-sm overflow-hidden border border-gold/10">
                        <img
                          src={labelImages[label.id]}
                          alt={`${label.name} label`}
                          className="w-full h-full object-contain p-2"
                        />
                        <p className="text-center text-xs text-cream/50 py-1 bg-charcoal/60">
                          Label
                        </p>
                      </div>

                      {/* Generated Bottle Preview */}
                      <div className="aspect-[3/4] bg-charcoal/40 rounded-sm overflow-hidden border border-gold/10 flex items-center justify-center">
                        {isLoading ? (
                          <div className="text-center">
                            <Loader2 className="w-8 h-8 text-gold animate-spin mx-auto mb-2" />
                            <p className="text-cream/50 text-xs">Generating...</p>
                          </div>
                        ) : generated ? (
                          <div className="w-full h-full">
                            <img
                              src={generated.imageUrl}
                              alt={`${label.name} bottle`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="text-center p-4">
                            <Wine className="w-8 h-8 text-cream/30 mx-auto mb-2" />
                            <p className="text-cream/40 text-xs">Not generated</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-gold/30 text-gold hover:bg-gold/10"
                        onClick={() => handleGenerate(label)}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : generated ? (
                          "Regenerate"
                        ) : (
                          "Generate"
                        )}
                      </Button>
                      {generated && (
                        <Button
                          variant="ghost"
                          className="text-gold hover:bg-gold/10"
                          onClick={() => handleDownload(generated)}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {Object.keys(generatedBottles).length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 p-6 bg-charcoal/40 rounded-lg border border-gold/20"
          >
            <h2 className="text-cream font-display text-xl mb-4">Generated Bottles Preview</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {Object.values(generatedBottles).map((bottle) => (
                <div
                  key={bottle.id}
                  className="aspect-[3/4] bg-charcoal/60 rounded-sm overflow-hidden"
                >
                  <img
                    src={bottle.imageUrl}
                    alt={bottle.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-cream/60 text-sm mt-4 font-body">
              Right-click on any bottle image to save, or use the download button on each card.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GenerateBottles;
