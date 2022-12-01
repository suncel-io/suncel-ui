import React from "react";
import { SuncelBlock } from "@suncel/nextjs";
import { Text } from "@suncel/nextjs/components";

type Proof = {
  key: string;
  title: string;
  description: string;
};

type DefaultSocialProofProps = {
  proofs: Proof[];
};

export const DefaultSocialProof: SuncelBlock<DefaultSocialProofProps> = ({ proofs }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
        <dl className='grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white'>
          {proofs?.map(({ key, title, description }, idx) => (
            <div key={key} className='flex flex-col items-center justify-center'>
              <Text
                slug={`proofs.${idx}.title`}
                value={title}
                tagName='dt'
                className='mb-2 text-3xl font-extrabold md:text-4xl'
              />
              <Text
                slug={`proofs.${idx}.description`}
                value={description}
                tagName='dt'
                className='font-light text-gray-500 dark:text-gray-400'
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

DefaultSocialProof.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-DefaultSocialProof",
  displayName: "Default Social Proof",
  defaultProps: {
    proofs: [
      {
        key: "1",
        title: "73M+",
        description: "developers",
      },
      {
        key: "2",
        title: "1B+",
        description: "contributors",
      },
      {
        key: "3",
        title: "4M+",
        description: "organizations",
      },
    ],
  },
  editor: {
    settings: [
      {
        type: "repeatable",
        slug: "proofs",
        name: "Proof",
        pluralName: "Proofs",
        max: 9,
        fields: [
          {
            type: "key",
            slug: "key",
            displayInSettings: false,
          },
          {
            type: "text",
            slug: "title",
            displayInSettings: false,
            defaultValue: "73M+",
          },
          {
            type: "text",
            slug: "description",
            displayInSettings: false,
            defaultValue: "developers",
          },
        ],
      },
    ],
  },
};
