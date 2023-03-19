import { graphql } from "gatsby";

export const f_Headline = graphql`
  fragment Headline on CAISY_Headline {
    subheadline
    id
    headline
  }
`;
