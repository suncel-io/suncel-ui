import React from "react";
import { ImageType, SuncelBlock } from "@suncel/nextjs";
import { Image } from "@suncel/nextjs/components";

type ImageBlockProps = {
  image: ImageType;
};

export const ImageBlock: SuncelBlock<ImageBlockProps> = ({ image }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
        <div className=''>
          <Image
            slug='image'
            height={360}
            width={640}
            src={image?.src}
            alt={image?.alt || "fallback alt"}
            className='rounded-lg'
          />
        </div>
      </div>
    </section>
  );
};

ImageBlock.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-ImageBlock",
  displayName: "Image Block",
  defaultProps: {},
  editor: {
    settings: [],
  },
};
