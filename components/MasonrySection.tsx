"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";

export default function MasonrySection({ images }: { images: string[] }) {
  const breakpointColumnsObj = {
    default: 7,
    1100: 4,
    700: 3,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-2"
      columnClassName="bg-clip-padding"
    >
      {images.map((src, index) => (
        <div key={index} className="mb-2">
          <Image
            src={src}
            alt={`Gallery ${index}`}
            className="w-full h-auto object-cover object-center"
            width={500}
            height={500}
            loading="lazy"
            quality={75}
          />
        </div>
      ))}
    </Masonry>
  );
}