import { type } from "os";
import React from "react";
import { IGenCaisy_Page_Components } from "../../sdk";
import { BlogArticleGrid } from "../components/blog-article-grid/BlogArticleGrid";
import { ContactForm } from "../components/ContactForm";
import { FullText } from "../components/fulltext/FullText";
import { FullwidthBlogTeaser } from "../components/FullwidthBlogTeaser";
import { Headline } from "../components/Headline";
import { NewsletterSignup } from "../components/NewsletterSignup";

// interface IComponentSelector extends IGenCaisy_Page_Components {
//   component: IGenCaisy_Page_Components;
// }

type IComponentSelector = IGenCaisy_Page_Components & {
  __typename?: string;
};

export const ComponentSelector: React.FC<IComponentSelector> = ({
  __typename,
  ...props
}) => {
  return (
    <>
      {__typename == "Headline" && <Headline {...props} />}
      {__typename == "Fulltext" && <FullText {...props} />}
      {__typename == "BlogArticleGrid" && <BlogArticleGrid {...props} />}
      {__typename == "NewsletterSignup" && <NewsletterSignup {...props} />}
      {__typename == "FullwidthBlogTeaser" && (
        <FullwidthBlogTeaser {...props} />
      )}
      {__typename == "ContactForm" && <ContactForm {...props} />}
    </>
  );
};
