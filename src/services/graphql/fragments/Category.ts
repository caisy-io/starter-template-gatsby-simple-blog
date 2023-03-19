import { graphql } from "gatsby";

export const f_Category = graphql`
  fragment Category on CAISY_Category {
    name
    id
  }
`;
