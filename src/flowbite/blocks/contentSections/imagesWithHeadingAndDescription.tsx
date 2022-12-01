import React from "react";
import { ImageType, RichTextType, SuncelBlock } from "@suncel/nextjs";
import { Image, RichText, RichTextKey, Text } from "@suncel/nextjs/components";
import clsx from "clsx";

type ImagesWithHeadingAndDescriptionProps = {
  title: string;
  description: RichTextType;
  leftImage: ImageType;
  rightImage: ImageType;
  invert: boolean;
};

export const ImagesWithHeadingAndDescription: SuncelBlock<ImagesWithHeadingAndDescriptionProps> = ({
  title,
  description,
  leftImage,
  rightImage,
  invert,
}) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div
        className={clsx(
          "items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ",
          {
            " lg:grid-flow-dense ": invert,
          }
        )}
      >
        <div
          className={clsx("font-light text-gray-500 sm:text-lg dark:text-gray-400", {
            "lg:col-start-2": invert,
          })}
        >
          <Text
            value={title}
            slug='title'
            tagName='h2'
            className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
          />
          <RichText
            value={description}
            slug='description'
            className='mb-4'
            allowedFeatures={[
              RichTextKey.MARK_BOLD,
              RichTextKey.MARK_ITALIC,
              RichTextKey.MARK_CODE,
              RichTextKey.MARK_HIGHLIGHT,
              RichTextKey.ELEMENT_UL,
              RichTextKey.ELEMENT_OL,
              RichTextKey.MARK_LINK,
              RichTextKey.ALIGN_LEFT,
              RichTextKey.ALIGN_CENTER,
              RichTextKey.ALIGN_RIGHT,
              RichTextKey.ALIGN_JUSTIFY,
            ]}
          />
        </div>
        <div
          className={clsx("grid grid-cols-2 gap-4 mt-8", {
            "lg:col-start-1": invert,
          })}
        >
          <Image
            slug='leftImage'
            alt='fallback alt'
            width={274}
            height={381}
            className='w-full rounded-lg'
            {...leftImage}
          />
          <Image
            slug='rightImage'
            alt='fallback alt'
            width={274}
            height={381}
            className='w-full mt-4 rounded-lg lg:mt-10'
            {...rightImage}
          />
        </div>
      </div>
    </section>
  );
};

ImagesWithHeadingAndDescription.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-ImagesWithHeadingAndDescription",
  displayName: "Images With Heading And Description",
  defaultProps: {
    title: "We didn't reinvent the wheel",
    description: `<p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
    <br />
    <br />
    We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>`,
    leftImage: {
      src: "https://assets.suncel.io/61bf5e233c962a862faf209f/M70H2-office-long-2.png",
      width: 274,
      height: 381,
      alt: "office content 1",
    },
    rightImage: {
      src: "https://assets.suncel.io/61bf5e233c962a862faf209f/hNEZd-office-long-1.png",
      width: 274,
      height: 381,
      alt: "office content 2",
    },
    invert: false,
  },
  editor: {
    settings: [
      {
        type: "checkbox",
        name: "Invert image and text",
        slug: "invert",
      },
    ],
  },
};
