import { graphql } from "gatsby";

export const f_ContactForm = graphql`
  fragment ContactForm on CAISY_ContactForm {
    id
    headline
  }
`;
