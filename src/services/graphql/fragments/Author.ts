import { graphql } from "gatsby";

export const f_Author = graphql`
  fragment Author on CAISY_Author {
    name
    role
    avatar {
      ...Asset
    }
    id
  }
`;
