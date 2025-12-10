import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface WineIconProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "gold" | "wine" | "cream" | "charcoal" | "muted";
  container?: "none" | "gold" | "wine" | "outline" | "elegant";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

const containerSizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-16 h-16",
};

const colorClasses = {
  gold: "text-gold",
  wine: "text-wine",
  cream: "text-cream",
  charcoal: "text-charcoal",
  muted: "text-charcoal/60",
};

const containerClasses = {
  none: "",
  gold: "bg-gold/10 border border-gold/20",
  wine: "bg-wine/10 border border-wine/20",
  outline: "border border-gold/40 bg-transparent",
  elegant: "bg-gradient-to-br from-gold/15 to-gold/5 shadow-sm",
};

const WineIcon = ({
  icon: Icon,
  size = "md",
  variant = "gold",
  container = "none",
  className,
}: WineIconProps) => {
  const iconElement = (
    <Icon
      className={cn(sizeClasses[size], colorClasses[variant], className)}
      strokeWidth={1.5}
    />
  );

  if (container === "none") {
    return iconElement;
  }

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center transition-all duration-300",
        containerSizeClasses[size],
        containerClasses[container]
      )}
    >
      {iconElement}
    </div>
  );
};

export default WineIcon;
