import { graphql } from "gatsby";

export const f_Page = graphql`
  fragment Page on CAISY_Page {
    components {
      __typename
      ...ContactForm
      ...BlogArticleGrid
      ...NewsletterSignup
      ...FullwidthBlogTeaser
      ...Headline
      ...Fulltext
    }
    id
    seo {
      title
      ogImage {
        id
      }
      keywords
      id
      description
    }
    slug
  }
`;
