import { graphql } from "gatsby";

export const q_allPageMeta = graphql`
  query allPageMeta($after: String) {
    caisy {
      allPage(after: $after) {
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
