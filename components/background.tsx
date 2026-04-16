import { useState, useEffect } from "react";
import Image from "next/image";

export const HeroBackground = ({ images }: { images: string[] }) => {
  const [currentBG, setCurrentBG] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBG((prevBG) => (prevBG + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 -z-10">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Background ${index + 1}`} 
          fill={true}
          priority={true}
          quality={70}
          className={`
            inset-0 saturate-50 object-cover contrast-100 transition-opacity duration-1500 ease-in-out 
            ${index === currentBG ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
};