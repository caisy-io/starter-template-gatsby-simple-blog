import { graphql } from "gatsby";

export const q_allBlogArticleBySlug = graphql`
  query allBlogArticleBySlug($slug: String!) {
    caisy {
      allBlogArticle(where: { slug: { eq: $slug } }) {
        edges {
          node {
            ...BlogArticle
          }
        }
      }
    }
  }
`;
