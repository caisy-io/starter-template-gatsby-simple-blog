import { graphql } from "gatsby";

export const f_BlogArticleGrid = graphql`
  fragment BlogArticleGrid on CAISY_BlogArticleGrid {
    id
    headline
    subheadline
    articles {
      ... on BlogArticle {
        id
        slug
        teaserDesciption
        teaserHeadline
        teaserImage {
          ...Asset
        }
        text {
          connections {
            __typename
            ...Asset
          }
          json
        }
      }
    }
  }
`;
