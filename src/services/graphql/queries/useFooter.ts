import { graphql, useStaticQuery } from "gatsby";

export const useFooter = () => {
  const { caisy } = useStaticQuery(graphql`
    query Footer {
      caisy {
        Footer {
          id
          content {
            json
          }
        }
      }
    }
  `);
  return caisy.Footer;
};
