import React from "react";
import { ImageType, LinkType, SuncelBlock } from "@suncel/nextjs";
import { Text, Link, Image } from "@suncel/nextjs/components";
import clsx from "clsx";

type VisualImageWithHeadingProps = {
  title: string;
  description: string;
  ctas: {
    link: LinkType;
    label: string;
    key: string;
  }[];
  image: ImageType;
};

export const VisualImageWithHeading: SuncelBlock<VisualImageWithHeadingProps> = ({
  title,
  description,
  ctas,
  image,
}) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <Text
            slug={"title"}
            value={title}
            tagName='h1'
            className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'
          />
          <Text
            slug={"description"}
            value={description}
            tagName='p'
            className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
          />
          {ctas?.map(({ label, link, key }, idx) => (
            <Link
              key={key}
              {...link}
              className={clsx(
                "inline-flex items-center justify-center px-5 py-3 ont-medium text-center rounded-lg focus:ring-4",
                {
                  "mr-3 text-base text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900":
                    idx == 0,
                  "text-base text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800":
                    idx == 1,
                }
              )}
            >
              <Text slug={`ctas.${idx}.label`} value={label} tagName='span' />
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
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center'>
          <Image slug='image' width={497} height={372} alt='Hero image' {...image} />
        </div>
      </div>
    </section>
  );
};

VisualImageWithHeading.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-VisualImageWithHeading",
  displayName: "Visual Image With Heading",
  defaultProps: {
    title: "Payments tool for software companies",
    description:
      "From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.",
    ctas: [
      {
        link: { href: "/" },
        label: "Get Started",
        key: "0",
      },
      {
        link: { href: "/" },
        label: "Speak to Sales",
        key: "1",
      },
    ],
    image: {
      src: "https://assets.suncel.io/61bf5e233c962a862faf209f/xrBhK-phone-mockup.png",
      alt: "Hero image",
    },
  },
  editor: {
    settings: [
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
    ],
  },
};
