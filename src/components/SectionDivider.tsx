import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "gold" | "wine" | "light";
  className?: string;
}

const SectionDivider = ({ variant = "gold", className }: SectionDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("flex items-center justify-center py-8 md:py-12", className)}
    >
      <div className="flex items-center gap-4">
        {/* Left flourish */}
        <div className={cn(
          "h-px w-12 md:w-20",
          variant === "gold" && "bg-gradient-to-l from-gold to-transparent",
          variant === "wine" && "bg-gradient-to-l from-wine-merlot to-transparent",
          variant === "light" && "bg-gradient-to-l from-cream/40 to-transparent"
        )} />
        
        {/* Left ornament */}
        <span className={cn(
          "font-script text-2xl md:text-3xl opacity-60",
          variant === "gold" && "text-gold",
          variant === "wine" && "text-wine-merlot",
          variant === "light" && "text-cream"
        )}>
          ❧
        </span>
        
        {/* Center diamond */}
        <div className={cn(
          "w-2 h-2 rotate-45",
          variant === "gold" && "bg-gold",
          variant === "wine" && "bg-wine-merlot",
          variant === "light" && "bg-cream/60"
        )} />
        
        {/* Right ornament */}
        <span className={cn(
          "font-script text-2xl md:text-3xl opacity-60 scale-x-[-1]",
          variant === "gold" && "text-gold",
          variant === "wine" && "text-wine-merlot",
          variant === "light" && "text-cream"
        )}>
          ❧
        </span>
        
        {/* Right flourish */}
        <div className={cn(
          "h-px w-12 md:w-20",
          variant === "gold" && "bg-gradient-to-r from-gold to-transparent",
          variant === "wine" && "bg-gradient-to-r from-wine-merlot to-transparent",
          variant === "light" && "bg-gradient-to-r from-cream/40 to-transparent"
        )} />
      </div>
    </motion.div>
  );
};

export default SectionDivider;