import React from "react";
import { ImageType, SuncelBlock } from "@suncel/nextjs";
import { Image, Text } from "@suncel/nextjs/components";

type BlockquoteProps = {
  text: string;
  author: {
    profilePicture: ImageType;
    name: string;
    role: string;
  };
};

export const Blockquote: SuncelBlock<BlockquoteProps> = ({ text, author }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
        <figure className='max-w-screen-md mx-auto'>
          <svg
            className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
            viewBox='0 0 24 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
              fill='currentColor'
            />
          </svg>
          <blockquote>
            <Text slug='text' value={text} className='text-2xl font-medium text-gray-900 dark:text-white' />
          </blockquote>
          <figcaption className='flex items-center justify-center mt-6 space-x-3'>
            <Image
              slug='author.profilePicture'
              className='w-6 h-6 rounded-full'
              alt='profile picture'
              {...author?.profilePicture}
              height={24}
              width={24}
            />
            <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
              <Text
                value={author?.name}
                slug='author.name'
                tagName='div'
                className='pr-3 font-medium text-gray-900 dark:text-white'
              />
              <Text
                value={author?.role}
                slug='author.role'
                tagName='div'
                className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'
              />
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

Blockquote.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-Blockquote",
  displayName: "Blockquote",
  defaultProps: {
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    author: {
      profilePicture: {
        src: "https://assets.suncel.io/61bf5e233c962a862faf209f/GX0Qg-michael-gouch.png",
        alt: "profile picture",
      },
      name: "Micheal Gough",
      role: "CEO at Google",
    },
  },
  editor: {
    settings: [],
  },
};
