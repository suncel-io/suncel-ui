import React from "react";
import { ImageType, LinkType, SuncelBlock } from "@suncel/nextjs";
import { Image, Link, Text } from "@suncel/nextjs/components";

type ImageWithCTAButtonProps = {
  darkImage: ImageType;
  lightImage: ImageType;
  title: string;
  description: string;
  cta: {
    label: string;
    link: LinkType;
  };
};

export const ImageWithCTAButton: SuncelBlock<ImageWithCTAButtonProps> = ({
  darkImage,
  lightImage,
  title,
  description,
  cta,
}) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
        <Image
          slug={"lightImage"}
          height={341}
          width={474}
          className='w-full dark:hidden'
          src='https://assets.suncel.io/61bf5e233c962a862faf209f/cp-27-cta-dashboard-mockup.svg'
          alt='dashboard image'
          {...(lightImage || darkImage)}
        />
        <Image
          slug='darkImage'
          height={341}
          width={474}
          className='hidden w-full dark:block'
          src='https://assets.suncel.io/61bf5e233c962a862faf209f/0lEm--cta-dashboard-mockup-dark.svg'
          alt='dashboard image'
          {...(darkImage || lightImage)}
        />
        <div className='mt-4 md:mt-0'>
          <Text
            value={title}
            slug='title'
            tagName='h2'
            className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
          />
          <Text
            value={description}
            slug='description'
            className='mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400'
          />
          <Link
            {...cta?.link}
            className='inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900'
          >
            <Text value={cta?.label} slug='cta.label' tagName='span' />
            <svg
              className='w-5 h-5 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

ImageWithCTAButton.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-ImageWithCTAButton",
  displayName: "Image With CTA Button",
  defaultProps: {
    title: "Let's create more tools and ideas that brings us together",
    description:
      "Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
    cta: {
      label: "Get Started",
      link: {
        href: "/",
      },
    },
  },
  editor: {
    settings: [
      {
        type: "group",
        name: "Images",
        fields: [
          {
            type: "image",
            name: "Light Image",
            slug: "lightImage",
          },
          {
            type: "image",
            name: "Dark Image",
            slug: "darkImage",
          },
        ],
      },
      {
        type: "link",
        name: "CTA Link",
        slug: "cta.link",
      },
    ],
  },
};
