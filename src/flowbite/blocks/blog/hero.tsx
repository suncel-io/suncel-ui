import React, { useMemo } from "react";
import { ImageType, SuncelBlock } from "@suncel/nextjs";
import { Text } from "@suncel/nextjs/components";
import { getUsers } from "@suncel/nextjs/api";
import { Image } from "@suncel/nextjs/components";

type BlogHeroProps = {
  title: string;
  author: {
    avatar: ImageType;
    name: string;
    role: string;
  };
};

export const BlogHero: SuncelBlock<BlogHeroProps> = ({ title, author, pageProps }) => {
  const memorizedCreatedAt = useMemo(() => {
    if (!pageProps?.pageProperties?.createdAt) return "";
    return new Date(pageProps?.pageProperties?.createdAt!).toLocaleString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [pageProps?.pageProperties?.createdAt]);

  return (
    <section className='pt-4 pb-2 bg-white dark:bg-gray-900'>
      <div className='w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert '>
        <header className='mb-4 lg:mb-6 not-format'>
          {author && (
            <address className='flex items-center mb-6 not-italic'>
              <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                <Image
                  slug='author.avatar'
                  className='w-16 h-16 mr-4 rounded-full'
                  height={64}
                  width={64}
                  //src={author?.avatar_url || ""}
                  alt='Author image'
                  {...author.avatar}
                />
                <div>
                  <div className='text-xl font-bold text-gray-900 dark:text-white'>
                    <Text value={author.name} slug='author.name' tagName='span' />
                  </div>
                  <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                    <Text value={author.role} slug='author.role' tagName='span' />
                  </p>
                  <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                    <time dateTime={memorizedCreatedAt} title={memorizedCreatedAt}>
                      {memorizedCreatedAt}
                    </time>
                  </p>
                </div>
              </div>
            </address>
          )}
          <Text
            slug='title'
            value={title}
            tagName='h1'
            className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'
          />
        </header>
      </div>
    </section>
  );
};

BlogHero.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-BlogHero",
  displayName: "Blog Hero",
  defaultProps: {
    title: "Best practices for successful prototypes",
    author: {
      avatar: {
        src: "https://assets.suncel.io/61bf5e233c962a862faf209f/jTw9D-profile-picture-2.jpg",
      },
      name: "Jese Leos",
      role: "Graphic Designer, educator & CEO Flowbite",
    },
  },
  editor: {
    settings: [
      {
        type: "select",
        slug: "author",
        name: "Author",
        asyncOptions: async () => {
          const { data: users } = await getUsers();
          return (
            users?.map((user) => ({
              value: {
                avatar: {
                  src: user.avatar_url,
                },
                name: `${user.firstname} ${user.lastname}`,
                role: `${user?.position} at ${user?.company} `,
              },
              name: `${user.firstname} ${user.lastname} `,
            })) || []
          );
        },
      },
    ],
  },
};
