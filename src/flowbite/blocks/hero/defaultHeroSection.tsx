import React from "react";
import { ImageType, LinkType, SuncelBlock } from "@suncel/nextjs";
import { Image, Link, Text } from "@suncel/nextjs/components";
import clsx from "clsx";

type DefaultHeroSectionProps = {
  hasAnnouncement: boolean;
  announcement: {
    link: LinkType;
    label: string;
  };
  title: string;
  description: string;
  ctas: {
    link: LinkType;
    label: string;
    key: string;
  }[];
  featuredText: string;
  featuredImages: { key: string; image: ImageType }[];
};

export const DefaultHeroSection: SuncelBlock<DefaultHeroSectionProps> = ({
  hasAnnouncement,
  announcement,
  title,
  description,
  ctas,
  featuredText,
  featuredImages,
}) => {
 
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12'>
        {hasAnnouncement && (
          <Link
            href='/'
            className='inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            {...announcement?.link}
          >
            <span className='text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3'>New</span>{" "}
            <Text
              slug='announcement.label'
              value={announcement?.label}
              tagName='span'
              className='text-sm font-medium'
            />
            <svg className='w-5 h-5 ml-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        )}
        <Text
          value={title}
          slug='title'
          tagName='h1'
          className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'
        />
        <Text
          value={description}
          slug='description'
          className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'
        />
        <div className='flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          {ctas?.map(({ label, link, key }, idx) => (
            <Link
              key={key}
              {...link}
              className={clsx(
                "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg",
                {
                  " text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900":
                    idx == 0,
                  " text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800":
                    idx == 1,
                }
              )}
            >
              {idx == 1 && (
                <svg
                  className='w-5 h-5 mr-2 -ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
                </svg>
              )}
              <Text value={label} slug={`ctas.${idx}.label`} tagName='span' />
              {idx == 0 && (
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
              )}
            </Link>
          ))}
        </div>
        {featuredImages && Array.isArray(featuredImages) && featuredImages?.length > 0 && (
          <div className='px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36'>
            <Text value={featuredText} slug='featuredText' className='font-semibold text-gray-400 uppercase' />
            <div className='flex flex-wrap items-center justify-center mt-8 text-gray-500 sm:justify-between'>
              {featuredImages?.map(({ image, key }, idx) => (
                <Image
                  slug={`featuredImages.${idx}.image`}
                  key={key}
                  alt='fallback alt'
                  width={145}
                  height={44}
                  {...image}
                  className='mb-5 mr-5 '
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

DefaultHeroSection.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-DefaultHeroSection",
  displayName: "Default Hero Section",
  defaultProps: {
    hasAnnouncement: true,
    announcement: {
      label: "Flowbite is out! See what's new",
      link: {
        href: "/",
      },
    },
    title: "We invest in the world’s potential",
    description:
      " Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    ctas: [
      {
        link: { href: "/" },
        label: "Learn more",
        key: "0",
      },
      {
        link: { href: "/" },
        label: "Watch video",
        key: "1",
      },
    ],
    featuredText: "FEATURED IN",
    featuredImages: [
      {
        image: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/V073y-youtube-logo.svg",
          alt: "Youtube logo",
          width: 145,
          height: 32,
        },
        key: "0",
      },
      {
        image: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/SdsXZ-product-hunt-logo.svg",
          alt: "Product Hunt logo",
          width: 217,
          height: 44,
        },
        key: "1",
      },
      {
        image: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/K8AJG-reddit-logo.svg",
          alt: "Reddit logo",
          width: 128,
          height: 44,
        },
        key: "2",
      },
    ],
  },
  editor: {
    settings: [
      {
        type: "group",
        name: "Announcement",
        fields: [
          {
            type: "checkbox",
            slug: "hasAnnouncement",
            name: "Show Announcement",
          },
          {
            type: "link",
            slug: "link",
            name: "Link",
          },
        ],
      },
      {
        type: "repeatable",
        slug: "ctas",
        name: "CTA",
        pluralName: "CTAs",
        max: 2,
        fields: [
          {
            type: "key",
            slug: "key",
            displayInSettings: false,
          },
          {
            type: "link",
            slug: "link",
            name: "Link",
          },
        ],
      },
      {
        type: "repeatable",
        slug: "featuredImages",
        name: "Featured Image",
        pluralName: "featured Images",
        max: 8,
        fields: [
          {
            type: "key",
            slug: "key",
            displayInSettings: false,
          },
          {
            type: "image",
            slug: "image",
            name: "Image",
          },
        ],
      },
    ],
  },
};
