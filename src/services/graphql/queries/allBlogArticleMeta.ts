import { graphql } from "gatsby";

export const q_allBlogArticleMeta = graphql`
  query allBlogArticleMeta($after: String) {
    caisy {
      allBlogArticle(after: $after) {
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
