import { graphql } from "gatsby";

export const f_Asset = graphql`
  fragment Asset on CAISY_Asset {
    title
    src
    originType
    keywords
    id
    dominantColor
    description
    copyright
    author
  }
`;
