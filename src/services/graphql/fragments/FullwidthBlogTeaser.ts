import { graphql } from "gatsby";

export const f_FullwidthBlogTeaser = graphql`
  fragment FullwidthBlogTeaser on CAISY_FullwidthBlogTeaser {
    id
    featuredArticle {
      id
      slug
      teaserImage {
        ...Asset
      }
      text {
        connections {
          __typename
          ... on CAISY_Asset {
            ...Asset
          }
        }
        json
      }
      author {
        ...Author
      }
      category {
        ...Category
      }
      teaserHeadline
      teaserDesciption
    }
    id
  }
`;
