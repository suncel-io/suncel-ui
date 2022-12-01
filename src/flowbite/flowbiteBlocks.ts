import { MenuBlockSchema } from "@suncel/nextjs";
import { DefaultHeroSection } from "./blocks/hero/defaultHeroSection";
import { VisualImageWithHeading } from "./blocks/hero/visualImageWithHeading";
import { DefaultFeatureList } from "./blocks/feature/defaultFeatureList";
import { DefaultCTASection } from "./blocks/ctaSection/defaultCTASection";
import { ImageWithCTAButton } from "./blocks/ctaSection/imageWithCTAButton";
import { HeadingWithCTAButton } from "./blocks/ctaSection/headingWithCTAButton";
import { DefaultPricingCards } from "./blocks/pricingTable/defaultPricingCards";
import { HeadingWithDescription } from "./blocks/contentSections/headingWithDescription";
import { ImagesWithHeadingAndDescription } from "./blocks/contentSections/imagesWithHeadingAndDescription";
import { DefaultSocialProof } from "./blocks/socialProof/defaultSocialProof";
import { Team } from "./blocks/team";
import { Blockquote } from "./blocks/testimonials/blockquote";
import { TestimonialCards } from "./blocks/testimonials/testimonialCards";
import { BlogHero } from "./blocks/blog/hero";
import { ImageBlock } from "./blocks/blog/imageBlock";
import { RichTextBlock } from "./blocks/blog/richTextBlock";
import { DefaultFAQSections } from "./blocks/FAQSections/defaultFAQSections";

export const flowbiteBlocks: MenuBlockSchema = {
  category: "Flowbite",
  blocks: [
    {
      name: "Hero",
      variants: [
        {
          component: DefaultHeroSection,
          name: DefaultHeroSection?.suncel?.displayName,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/oh2m7-VisualImageWithHeading.png",
          description:
            "Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.",
        },
        {
          component: VisualImageWithHeading,
          name: VisualImageWithHeading?.suncel?.displayName,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/LNzDG-Screenshot 2022-11-27 at 17.19.51.png",
          description:
            "Use this example to show an image next to the heading and CTA buttons to improve the visual impact of the website's first visit.",
        },
      ],
    },
    {
      name: "Feature",
      variants: [
        {
          component: DefaultFeatureList,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/dl3l4-Default feature list.png",
          name: DefaultFeatureList?.suncel?.displayName,
          description:
            "Get started with this default example of feature items based on a grid layout where you can show up to three items on a row featuring an icon, title and description.",
        },
      ],
    },
    {
      name: "CTA Sections",
      variants: [
        {
          component: DefaultCTASection,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/tJQjE-Default CTA section.png",
          name: DefaultCTASection?.suncel?.displayName,
          description:
            "Use this example to show a simple heading, paragraph, and a couple of CTA buttons to encourage users to take action.",
        },
        {
          component: ImageWithCTAButton,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/yefOk-Image with CTA button.png",
          name: ImageWithCTAButton?.suncel?.displayName,
          description:
            "Use this example to show an image or app screenshot next to the CTA button to provide additional visual impact.",
        },
        {
          component: HeadingWithCTAButton,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/TccA8-HeadingWithCTAButton.png",
          name: HeadingWithCTAButton?.suncel?.displayName,
          description:
            "Use this simple yet effective CTA section with a heading, short paragraph, and a button to encourage users to start a free trial.",
        },
      ],
    },
    {
      name: "Pricing Tables",
      variants: [
        {
          component: DefaultPricingCards,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/yqi0n-Default pricing cards.png",
          name: DefaultPricingCards?.suncel?.displayName,
          description:
            "Use this example of three pricing cards showcasing the pricing plan title, description, feature list, and CTA button.",
        },
      ],
    },
    {
      name: "Content Sections",
      variants: [
        {
          component: HeadingWithDescription,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/HHCqz-HeadingWithDescription.png",
          name: HeadingWithDescription?.suncel?.displayName,
          description:
            "Use this example to show a heading with a paragraph and a CTA link anywhere on your page relative to other sections.",
        },
        {
          component: ImagesWithHeadingAndDescription,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/D9GIN-ImagesWithHeadingAndDescription.png",
          name: ImagesWithHeadingAndDescription?.suncel?.displayName,
          description:
            "Use this example to show a couple of images next to a heading and paragraph to provide visual impact to your users.",
        },
      ],
    },
    {
      name: "Social Proof",
      variants: [
        {
          component: DefaultSocialProof,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/f0VCE-DefaultSocialProof.png",
          name: DefaultSocialProof?.suncel?.displayName,
          description:
            "Use this example of statistical numbers that you can use to showcase the adoption rate of your product by the community.",
        },
      ],
    },
    {
      name: "Team",
      variants: [
        {
          component: Team,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/hhguS-Team member cards.png",
          name: Team?.suncel?.displayName,
          description:
            "Use this example to show information about your team members such as the name, occupation, picture, and social media accounts inside a card component.",
        },
      ],
    },
    {
      name: "FAQ Sections",
      variants: [
        {
          component: DefaultFAQSections,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/P-tSi-DefaultFAQSections.png",
          name: DefaultFAQSections?.suncel?.displayName,
          description:
            "Use this simple example of a FAQ section to show a list of questions and answers based on two columns and a question mark icon.",
        },
      ],
    },
    {
      name: "Testimonials",
      variants: [
        {
          component: Blockquote,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/7Bem1-Blockquote.png",
          name: Blockquote?.suncel?.displayName,
          description:
            "Use this simple example of a testimonial based on a blockquote element and show the text, customer avatar, name, and occupation.",
        },
        {
          component: TestimonialCards,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/SHCij-Testimonial cards.png",
          name: TestimonialCards?.suncel?.displayName,
          description:
            "You can use this example of testimonial cards up to two items on a row and show the title, description, avatar, name, and occupation.",
        },
      ],
    },
    {
      name: "Blog article blocks",
      variants: [
        {
          component: BlogHero,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/wmb-h-BlogHero.png",
          name: BlogHero?.suncel?.displayName,
          description: "Hero for a blog article, fetch author information directly from the project users.",
        },
        {
          component: ImageBlock,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/9TN-R-ImageBlock.png",
          name: ImageBlock?.suncel?.displayName,
          description: "Image for a blog article",
        },
        {
          component: RichTextBlock,
          image: "https://assets.suncel.io/61bf5e233c962a862faf209f/jHGBU-RichTextBlock.png",
          name: RichTextBlock?.suncel?.displayName,
          description: "RichText for a blog article",
        },
      ],
    },
  ],
};
