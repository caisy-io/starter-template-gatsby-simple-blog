import { type } from "os";
import React from "react";
import { IGenCaisy_Page_Components } from "../../sdk";
import { BlogArticleGrid } from "../components/blog-article-grid/BlogArticleGrid";
import { ContactForm } from "../components/ContactForm";
import { FullText } from "../components/fulltext/FullText";
import { FullwidthBlogTeaser } from "../components/FullwidthBlogTeaser";
import { Headline } from "../components/Headline";
import { NewsletterSignup } from "../components/NewsletterSignup";

type IComponentSelector = IGenCaisy_Page_Components & {
  __typename?: string;
};

export const ComponentSelector: React.FC<IComponentSelector> = ({
  __typename,
  ...props
}) => {
  return (
    <>
      {__typename == "CAISY_Headline" && <Headline {...props} />}
      {__typename == "CAISY_Fulltext" && <FullText {...props} />}
      {__typename == "CAISY_BlogArticleGrid" && <BlogArticleGrid {...props} />}
      {__typename == "CAISY_NewsletterSignup" && (
        <NewsletterSignup {...props} />
      )}
      {__typename == "CAISY_FullwidthBlogTeaser" && (
        <FullwidthBlogTeaser {...props} />
      )}
      {__typename == "CAISY_ContactForm" && <ContactForm {...props} />}
    </>
  );
};
