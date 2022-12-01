import React from "react";
import { LinkType, SuncelBlock } from "@suncel/nextjs";
import { Link, Text } from "@suncel/nextjs/components";

type HeadingWithCTAButtonProps = {
  title: string;
  description: string;
  cta: {
    label: string;
    link: LinkType;
  };
  hasCta: boolean;
};

export const HeadingWithCTAButton: SuncelBlock<HeadingWithCTAButtonProps> = ({ title, description, cta, hasCta }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
        <div className='max-w-screen-sm mx-auto text-center'>
          <Text
            slug={"title"}
            value={title}
            tagName='h2'
            className='mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'
          />

          <Text
            slug={"description"}
            value={description}
            className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'
          />
          {hasCta && (
            <Link
              {...cta?.link}
              className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            >
              <Text slug={"cta.label"} value={cta?.label} tagName='span' />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

HeadingWithCTAButton.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-HeadingWithCTAButton",
  displayName: "Heading With CTA Button",
  defaultProps: {
    title: "Start your free trial today",
    description: "Try Flowbite Platform for 30 days. No credit card required.",
    cta: {
      label: "Free trial for 30 days",
      link: {
        href: "/",
      },
    },
    hasCta: true,
  },
  editor: {
    settings: [
      {
        type: "checkbox",
        slug: "hasCta",
        name: "Has CTA button",
      },
      {
        type: "link",
        name: "CTA Link",
        slug: "cta.link",
      },
    ],
  },
};
