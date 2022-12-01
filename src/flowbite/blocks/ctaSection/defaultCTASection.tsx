import React from "react";
import { LinkType, SuncelBlock } from "@suncel/nextjs";
import { Text, Link } from "@suncel/nextjs/components";
import clsx from "clsx";

type DefaultCTASectionProps = {
  title: string;
  description: string;
  ctas: {
    link: LinkType;
    label: string;
    key: string;
  }[];
};

export const DefaultCTASection: SuncelBlock<DefaultCTASectionProps> = ({ title, description, ctas }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
        <div className='max-w-screen-md'>
          <Text
            slug={"title"}
            value={title}
            tagName='h2'
            className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
          />
          <Text
            slug={"description"}
            value={description}
            className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'
          />
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            {ctas?.map(({ label, link, key }, idx) => (
              <Link
                key={key}
                {...link}
                className={clsx(
                  "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-base font-medium text-center",
                  {
                    " text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900":
                      idx == 0,
                    "text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600":
                      idx == 1,
                  }
                )}
              >
                {idx === 1 && (
                  <svg
                    className='w-5 h-5 mr-2 -ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
                  </svg>
                )}
                <Text slug={`ctas.${idx}.label`} value={label} tagName='span' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

DefaultCTASection.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-DefaultCTASection",
  displayName: "Default CTA Section",
  defaultProps: {
    title: "Let's find more that brings us together.",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.",
    ctas: [
      {
        link: { href: "/" },
        label: "Get started",
        key: "0",
      },
      {
        link: { href: "/" },
        label: "View more",
        key: "1",
      },
    ],
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
