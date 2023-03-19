import { graphql } from "gatsby";

export const f_NavigationEntry = graphql`
  fragment NavigationEntry on CAISY_NavigationEntry {
    id
    title
    connection {
      id
      slug
    }
  }
`;
