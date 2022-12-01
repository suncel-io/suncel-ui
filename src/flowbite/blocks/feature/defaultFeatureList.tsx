import React from "react";
import { ImageType, RichTextType, SuncelBlock } from "@suncel/nextjs";
import { Text, Image, RichTextKey, RichText } from "@suncel/nextjs/components";

type Feature = {
  key: string;
  logo: ImageType;
  title: string;
  text: RichTextType;
};

type DefaultFeatureListProps = {
  title: string;
  description: string;
  features: Feature[];
};

export const DefaultFeatureList: SuncelBlock<DefaultFeatureListProps> = ({ title, description, features }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <Text
            slug={"title"}
            value={title}
            tagName='h2'
            className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
          />
          <Text slug={"description"} value={description} tagName='p' className='text-gray-500 dark:text-gray-400' />
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          {features?.map(({ key, logo, title, text }, idx) => (
            <div key={key}>
              <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
                <Image
                  slug={`features.${idx}.logo`}
                  alt='fallback alt'
                  width={20}
                  height={20}
                  className='w-5 h-5 lg:w-6 lg:h-6 '
                  {...logo}
                />
              </div>
              <Text
                value={title}
                slug={`features.${idx}.title`}
                tagName='h3'
                className='mb-2 text-xl font-bold dark:text-white'
              />
              <RichText
                value={text}
                slug={`features.${idx}.text`}
                allowedFeatures={[
                  RichTextKey.MARK_BOLD,
                  RichTextKey.MARK_CODE,
                  RichTextKey.MARK_ITALIC,
                  RichTextKey.MARK_HIGHLIGHT,
                ]}
                className='text-gray-500 dark:text-gray-400'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

DefaultFeatureList.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-DefaultFeatureList",
  displayName: "Default Feature List",
  defaultProps: {
    title: "Designed for business teams like yours",
    description:
      "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    features: [
      {
        key: "0",
        logo: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/RRdxA-marketing.svg",
          alt: "Marketing",
        },
        title: "Marketing",
        text: `Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.`,
      },
      {
        key: "1",
        logo: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/x1hXs-legal-icon.svg",
          alt: "Legal",
        },
        title: "Legal",
        text: `Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.`,
      },
      {
        key: "2",
        logo: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/0muPd-business-automation.svg",
          alt: "Business Automation",
        },
        title: "Business Automation",
        text: `Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.`,
      },
      {
        key: "3",
        logo: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/xqQfX-finance-icon.svg",
          alt: "Finance",
        },
        title: "Finance",
        text: `Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.`,
      },
      {
        key: "4",
        logo: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/XuAxy-enterprise-design-icon.svg",
          alt: "Enterprise Design",
        },
        title: "Enterprise Design",
        text: `Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.`,
      },
      {
        key: "5",
        logo: {
          src: "https://assets.suncel.io/61bf5e233c962a862faf209f/skf7G-operations-icon.svg",
          alt: "Operations",
        },
        title: "Operations",
        text: `Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.`,
      },
    ],
  },
  editor: {
    settings: [
      {
        type: "repeatable",
        slug: "features",
        name: "Feature",
        pluralName: "Features",
        fields: [
          {
            type: "key",
            slug: "key",
            displayInSettings: false,
          },
        ],
      },
    ],
  },
};
