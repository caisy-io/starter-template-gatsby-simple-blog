import { graphql } from "gatsby";

export const q_allPageBySlug = graphql`
  query allPageBySlug($slug: String!) {
    caisy {
      allPage(where: { slug: { eq: $slug } }) {
        edges {
          node {
            ...Page
          }
        }
      }
    }
  }
`;
