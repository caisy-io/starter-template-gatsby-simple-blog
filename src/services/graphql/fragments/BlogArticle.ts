import { graphql } from "gatsby";

export const f_BlogArticle = graphql`
  fragment BlogArticle on CAISY_BlogArticle {
    text {
      connections {
        __typename
        ...Asset
      }
      json
    }
    teaserImage {
      ...Asset
    }
    teaserHeadline
    teaserDesciption
    slug
    seo {
      id
      description
      keywords
      ogImage {
        ...Asset
      }
      title
    }
    id
  }
`;
