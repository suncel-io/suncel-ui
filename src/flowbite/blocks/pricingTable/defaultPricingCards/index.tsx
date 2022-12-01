import React from "react";
import { LinkType, RichTextType, SuncelBlock } from "@suncel/nextjs";
import { Link, RichText, RichTextKey, Text } from "@suncel/nextjs/components";
import classes from "./priceTableStyles.module.scss";

type Offer = {
  key: string;
  title: string;
  description: string;
  price: RichTextType;
  text: RichTextType;
  cta: {
    label: string;
    link: LinkType;
  };
};
type DefaultPricingCardsProps = {
  title: string;
  description: string;
  offers: Offer[];
};

export const DefaultPricingCards: SuncelBlock<DefaultPricingCardsProps> = ({ title, description, offers }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
        <div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
          <Text
            value={title}
            slug='title'
            tagName='h2'
            className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
          />
          <Text
            value={description}
            slug='description'
            className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'
          />
        </div>
        <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          {offers?.map(({ key, title, description, price, text, cta }, idx) => (
            <div
              key={key}
              className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'
            >
              <Text value={title} slug={`offers.${idx}.title`} tagName='h3' className='mb-4 text-2xl font-semibold' />
              <Text
                value={description}
                slug={`offers.${idx}.description`}
                className='font-light text-gray-500 sm:text-lg dark:text-gray-400'
              />
              <div className='flex items-baseline justify-center my-8'>
                <RichText
                  value={price}
                  slug={`offers.${idx}.price`}
                  allowedFeatures={[RichTextKey.MARK_BOLD]}
                  featuresHTMLAttributes={{
                    [RichTextKey.MARK_BOLD]: { class: "text-gray-900 mr-2 text-5xl font-extrabold" },
                    [RichTextKey.ELEMENT_PARAGRAPH]: { class: "text-gray-500 dark:text-gray-400" },
                  }}
                />
              </div>
              {/* List */}
              <RichText
                value={text}
                slug={`offers.${idx}.text`}
                allowedFeatures={[
                  RichTextKey.MARK_BOLD,
                  RichTextKey.ELEMENT_UL,
                  RichTextKey.MARK_ITALIC,
                  RichTextKey.MARK_CODE,
                  RichTextKey.ALIGN_LEFT,
                  RichTextKey.ALIGN_CENTER,
                  RichTextKey.ALIGN_RIGHT,
                ]}
                featuresHTMLAttributes={{
                  [RichTextKey.ELEMENT_UL]: { class: classes.greenCheckList },
                }}
              />
              <Link
                {...cta?.link}
                className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
              >
                <Text value={cta?.label} slug={`offers.${idx}.cta.label`} tagName='span' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

DefaultPricingCards.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-DefaultPricingCards",
  displayName: "Default Pricing Cards",
  defaultProps: {
    title: "Designed for business teams like yours",
    description:
      "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    offers: [
      {
        key: "0",
        title: "Starter",
        price: `<b>$29</b>/month`,
        description: "Best option for personal use & for your next project.",
        text: `
            <ul>
                <li>Individual configuration</li>
                <li>No setup, or hidden fees</li>
                <li>Team size: <b>1 developer</b></li>
                <li>Premium support: <b>6 months</b></li>
                <li>Free updates: <b>6 months</b></li>
            </ul>`,
        cta: {
          label: "Get started",
          link: { href: "/" },
        },
      },
      {
        key: "1",
        title: "Company",
        description: "Relevant for multiple users, extended & premium support.",
        price: `<b>$99</b>/month`,
        text: `
            <ul>
                <li>Individual configuration</li>
                <li>No setup, or hidden fees</li>
                <li>Team size: <b>10 developer</b></li>
                <li>Premium support: <b>24 months</b></li>
                <li>Free updates: <b>24 months</b></li>
            </ul>`,
        cta: {
          label: "Get started",
          link: { href: "/" },
        },
      },
      {
        key: "2",
        title: "Enterprise",
        description: "Best for large scale uses and extended redistribution rights.",
        price: `<b>$499</b>/month`,
        text: `
            <ul>
                <li>Individual configuration</li>
                <li>No setup, or hidden fees</li>
                <li>Team size: <b>100+ developer</b></li>
                <li>Premium support: <b>36 months</b></li>
                <li>Free updates: <b>36 months</b></li>
            </ul>`,
        cta: {
          label: "Get started",
          link: { href: "/" },
        },
      },
    ],
  },
  editor: {
    settings: [
      {
        type: "repeatable",
        name: "Offer",
        pluralName: "Offers",
        slug: "offers",
        max: 6,
        fields: [
          {
            type: "key",
            slug: "key",
            displayInSettings: false,
          },
          {
            type: "text",
            slug: "title",
            defaultValue: "Enterprise",
            displayInSettings: false,
          },
          {
            type: "text",
            slug: "description",
            defaultValue: "Best for large scale uses and extended redistribution rights.",
            displayInSettings: false,
          },
          {
            type: "richText",
            slug: "price",
            defaultValue: `<b>$499</b>/month`,
            displayInSettings: false,
          },
          {
            type: "richText",
            slug: "text",
            defaultValue: `
            <ul>
                <li>Individual configuration</li>
                <li>No setup, or hidden fees</li>
                <li>Team size: <b>100+ developer</b></li>
                <li>Premium support: <b>36 months</b></li>
                <li>Free updates: <b>36 months</b></li>
            </ul>`,
            displayInSettings: false,
          },

          {
            type: "text",
            slug: "cta.label",
            defaultValue: "Get started",
            name: "CTA Label",
          },
          {
            type: "link",
            slug: "cta.link",
            defaultValue: {
              href: "/tes",
            },
          },
        ],
      },
    ],
  },
};
