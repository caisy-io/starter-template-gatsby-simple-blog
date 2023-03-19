import { graphql, useStaticQuery } from "gatsby";

export const q_Navigation = () => {
  const { caisy } = useStaticQuery(graphql`
    query Navigation {
      caisy {
        Navigation {
          id
          homePage {
            id
            slug
          }
          notFoundPage {
            id
            slug
          }
          entries {
            ...NavigationEntry
          }
        }
      }
    }
  `);
  return caisy.Navigation;
};
