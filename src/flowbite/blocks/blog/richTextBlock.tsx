import React from "react";
import { RichTextType, SuncelBlock } from "@suncel/nextjs";
import Blockquote from "@tiptap/extension-blockquote";
import clsx from "clsx";
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight";
import { RichText, RichTextKey } from "@suncel/nextjs/components";

type RichTextBlockProps = {
  richText: RichTextType;
};

export const RichTextBlock: SuncelBlock<RichTextBlockProps> = ({ richText }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='w-full max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert '>
        <RichText
          value={richText}
          slug='richText'
          allowedFeatures={[
            RichTextKey.ELEMENT_H1,
            RichTextKey.ELEMENT_H2,
            RichTextKey.ELEMENT_H3,
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
          extensions={[Blockquote]}
          extendedMenu={[
            {
              element: ({ editor }) => {
                const isActive = editor.isActive("blockquote");
                return (
                  <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={clsx({
                      "suncel-richtext-toolbar-button-active": isActive,
                      "suncel-richtext-toolbar-button-disabled": !isActive,
                    })}
                  >
                    <FaQuoteRight />
                  </button>
                );
              },
            },
          ]}
        />
      </div>
    </section>
  );
};

RichTextBlock.suncel = {
  // Randomly generated ID XFD6trd
  slug: "sc-flow-XFD6trd-RichTextBlock",
  displayName: "RichText Block",
  defaultProps: {
    richText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repudiandae aperiam explicabo voluptatibus, rerum esse expedita a dicta ab sapiente nihil aliquid quis est similique nisi, excepturi recusandae consequuntur quidem`,
  },
  editor: {
    settings: [],
  },
};
