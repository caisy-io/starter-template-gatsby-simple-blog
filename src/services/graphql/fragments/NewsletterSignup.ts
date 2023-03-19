import { graphql } from "gatsby";

export const f_NewsletterSignup = graphql`
  fragment NewsletterSignup on CAISY_NewsletterSignup {
    headline
    subheadline
    id
  }
`;
