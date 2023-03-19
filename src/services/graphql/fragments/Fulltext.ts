import { graphql } from "gatsby";

export const f_Fulltext = graphql`
  fragment Fulltext on CAISY_Fulltext {
    text {
      json
      connections {
        __typename
        ...Asset
      }
    }
    id
  }
`;
