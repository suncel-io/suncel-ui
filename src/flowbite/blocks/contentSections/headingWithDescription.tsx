import React from "react";
import { LinkType, RichTextType, SuncelBlock } from "@suncel/nextjs";
import { Link, RichText, RichTextKey, Text } from "@suncel/nextjs/components";

type HeadingWithDescriptionProps = {
  title: string;
  descriptionLight: RichTextType;
  descriptionMedium: RichTextType;
  cta: {
    link: LinkType;
    label: string;
  };
};

export const HeadingWithDescription: SuncelBlock<HeadingWithDescriptionProps> = ({
  title,
  descriptionLight,
  descriptionMedium,
  cta,
}) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
        <div className='max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400'>
          <Text
            value={title}
            slug='title'
            tagName='h2'
            className='mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'
          />
          <RichText
            value={descriptionLight}
            slug='descriptionLight'
            className='mb-4 font-light format lg:format-lg max-w-none dark:format-invert'
            allowedFeatures={[
              RichTextKey.MARK_BOLD,
              RichTextKey.MARK_ITALIC,
              RichTextKey.MARK_CODE,
              RichTextKey.MARK_HIGHLIGHT,
              RichTextKey.MARK_LINK,
              RichTextKey.ALIGN_LEFT,
              RichTextKey.ALIGN_CENTER,
              RichTextKey.ALIGN_RIGHT,
              RichTextKey.ALIGN_JUSTIFY,
            ]}
          />
          <RichText
            value={descriptionMedium}
            slug='descriptionMedium'
            className='mb-4 font-medium format lg:format-lg max-w-none dark:format-invert'
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

          <Link
            {...cta?.link}
            className='inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700'
          >
            <Text value={cta?.label} slug='cta.label' tagName='span' />
            <svg className='w-6 h-6 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

HeadingWithDescription.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-HeadingWithDescription",
  displayName: "Heading With Description",
  defaultProps: {
    title: "Powering innovation at 200,000+ companies worldwide",
    descriptionLight: `Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`,
    descriptionMedium: `Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.    `,
    cta: {
      label: " Learn more",
      link: {
        href: "/",
      },
    },
  },
  editor: {
    settings: [
      {
        type: "link",
        slug: "cta.link",
        name: "CTA Link",
      },
    ],
  },
};
