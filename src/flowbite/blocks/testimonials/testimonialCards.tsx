import React from "react";
import { ImageType, RichTextType, SuncelBlock } from "@suncel/nextjs";
import { Image, RichText, RichTextKey, Text } from "@suncel/nextjs/components";

type Card = {
  key: string;
  title: string;
  text: RichTextType;
  author: {
    profilePicture: ImageType;
    name: string;
    role: string;
  };
};

type TestimonialCardsProps = {
  title: string;
  description: string;
  cards: Card[];
};

export const TestimonialCards: SuncelBlock<TestimonialCardsProps> = ({ title, description, cards }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
        <div className='max-w-screen-sm mx-auto'>
          <Text
            value={title}
            slug='title'
            tagName='h2'
            className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'
          />
          <Text
            value={description}
            slug='description'
            className='mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'
          />
        </div>
        <div className='grid mb-8 lg:mb-12 lg:grid-cols-2'>
          {cards?.map(({ key, title, text, author }, idx) => (
            <figure
              key={key}
              className='flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 bg-gray-50 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700'
            >
              <blockquote className='max-w-2xl mx-auto mb-8 text-gray-500 dark:text-gray-400'>
                <Text
                  value={title}
                  slug={`cards.${idx}.title`}
                  tagName='h3'
                  className='text-lg font-semibold text-gray-900 dark:text-white'
                />
                <RichText
                  value={text}
                  slug={`cards.${idx}.text`}
                  className='!text-base format lg:format-lg max-w-none dark:format-invert my-4'
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
              </blockquote>
              <figcaption className='flex items-center justify-center space-x-3'>
                <Image
                  slug={`cards.${idx}.author.profilePicture`}
                  height={36}
                  width={36}
                  className='rounded-full w-9 h-9'
                  alt='profile picture'
                  {...author?.profilePicture}
                />
                <div className='space-y-0.5 font-medium dark:text-white text-left'>
                  <Text value={author?.name} slug={`cards.${idx}.author.name`} tagName='div' />
                  <Text
                    value={author?.role}
                    slug={`cards.${idx}.author.role`}
                    tagName='div'
                    className='text-sm font-light text-gray-500 dark:text-gray-400'
                  />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

TestimonialCards.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-TestimonialCards",
  displayName: "Testimonial Cards",
  defaultProps: {
    title: "Testimonials",
    description:
      "Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind",
    cards: [
      {
        key: "0",
        title: "Speechless with how easy this was to integrate",
        text: `I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.
<br/><br/>
            Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.
            <br/><br/>  
            If you care for your time, I hands down would go with this.`,
        author: {
          name: "Bonnie Green",
          role: "Developer at Open AI",
          profilePicture: {
            src: "https://assets.suncel.io/61bf5e233c962a862faf209f/ss7eC-bonnie-green.png",
            alt: "Bonnie Green profile picture",
          },
        },
      },
      {
        key: "1",
        title: "Solid foundation for any project",
        text: `"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.
<br/><br/>
            Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"`,
        author: {
          name: "Roberta Casas",
          role: "Lead designer at Dropbox",
          profilePicture: {
            src: "https://assets.suncel.io/61bf5e233c962a862faf209f/bAb1n-roberta-casas.png",
            alt: "Roberta Casas profile picture",
          },
        },
      },
    ],
  },
  editor: {
    settings: [
      {
        type: "repeatable",
        slug: "cards",
        name: "Card",
        pluralName: "Testimonial Cards",
        max: 8,
        fields: [
          {
            type: "key",
            slug: "key",
            displayInSettings: false,
          },
          {
            type: "text",
            slug: "title",
            defaultValue: "Speechless with how easy this was to integrate",
            displayInSettings: false,
          },
          {
            type: "richText",
            slug: "text",
            defaultValue: `I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.
            <br/><br/>
                        Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.
                        <br/><br/>  
                        If you care for your time, I hands down would go with this.`,
            displayInSettings: false,
          },
          {
            type: "object",
            slug: "author",
            name: "Author",
            fields: [
              {
                type: "text",
                slug: "name",
                defaultValue: "Bonnie Green",
                displayInSettings: false,
              },
              {
                type: "text",
                slug: "role",
                defaultValue: "Developer at Open AI",
                displayInSettings: false,
              },
              {
                type: "image",
                slug: "profilePicture",
                defaultValue: {
                  src: "https://assets.suncel.io/61bf5e233c962a862faf209f/ss7eC-bonnie-green.png",
                  alt: "Bonnie Green profile picture",
                },
                displayInSettings: false,
              },
            ],
          },
        ],
      },
    ],
  },
};
