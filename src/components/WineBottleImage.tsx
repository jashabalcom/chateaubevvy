import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface WineBottleImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const WineBottleImage = ({ src, alt, className, containerClassName }: WineBottleImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative", containerClassName)}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full bg-brand-gray/10" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default WineBottleImage;
