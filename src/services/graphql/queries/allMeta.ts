import { graphql } from "gatsby";

export const q_allMeta = graphql`
  query alleMeta {
    caisy {
      allPage {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            _meta {
              publishedAt
            }
            id
            slug
          }
        }
      }
      allBlogArticle {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            _meta {
              publishedAt
            }
            id
            slug
          }
        }
      }
    }
  }
`;
