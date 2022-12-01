import React from "react";
import { SuncelBlock } from "@suncel/nextjs";
import { RichText, RichTextKey, Text } from "@suncel/nextjs/components";

type FAQ = {
  key: string;
  question: string;
  answer: string;
};
type DefaultFAQSectionsProps = {
  title: string;
  faq: FAQ[];
};

export const DefaultFAQSections: SuncelBlock<DefaultFAQSectionsProps> = ({ title, faq }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
        <Text
          value={title}
          slug='title'
          tagName='h2'
          className='mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
        />
        <div className='grid pt-8 text-left border-t border-gray-200 md:gap-x-16 gap-y-10 dark:border-gray-700 md:grid-cols-2'>
          {faq?.map(({ key, question, answer }, idx) => (
            <div key={key} className=''>
              <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                <svg
                  className='flex-shrink-0 w-5 h-5 mr-2 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  />
                </svg>
                <Text value={question} slug={`faq.${idx}.question`} tagName='span' />
              </h3>
              <RichText
                value={answer}
                slug={`faq.${idx}.answer`}
                className='mb-4 text-base font-light text-gray-500 dark:text-gray-400 format lg:format-lg max-w-none dark:format-invert'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

DefaultFAQSections.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-DefaultFAQSections",
  displayName: "Default FAQ Sections",
  defaultProps: {
    title: "Frequently Asked Questions",
    faq: [
      {
        question: `What do you mean by "Figma assets"?`,
        answer:
          "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.",
      },
      {
        question: `What does "lifetime access" exactly mean?`,
        answer: `Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.`,
      },
    ].map((e, idx) => ({ ...e, key: `${idx}` })),
  },
  editor: {
    settings: [
      {
        type: "repeatable",
        slug: "faq",
        name: "FAQ",
        pluralName: "FAQs",
        fields: [
          {
            type: "key",
            slug: "key",
            displayInSettings: false,
          },
          {
            type: "text",
            slug: "question",
            displayInSettings: false,
            defaultValue: "Question",
          },
          {
            type: "richText",
            slug: "answer",
            displayInSettings: false,
            defaultValue: "Answer",
          },
        ],
      },
    ],
  },
};
