import * as React from "react";
import { graphql, HeadFC, navigate, PageProps } from "gatsby";
import { useNavigation } from "../services/graphql/queries/useNavigation";
import { useFooter } from "../services/graphql/queries/useFooter";
import { Layout } from "../layouts/Layout";
import { Page } from "../layouts/Page";
import { IGenAllPageBySlugQuery } from "../../sdk";
import { HeadComponent } from "../layouts/Head";

const IndexPage = ({ data }: PageProps<IGenAllPageBySlugQuery>) => {
  const navigation = useNavigation();
  const footer = useFooter();
  const pageComponents = data?.caisy?.allPage?.edges?.[0]?.node;

  return (
    navigation &&
    footer && (
      <Layout navigation={navigation} footer={footer}>
        {pageComponents && <Page {...pageComponents} />}
      </Layout>
    )
  );
};

export const query = graphql`
  query allPageBySlug {
    caisy {
      allPage(where: { slug: { eq: "404" } }) {
        edges {
          node {
            ...Page
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC<IGenAllPageBySlugQuery> = ({ data }) => {
  const seoInfo = data?.caisy?.allPage?.edges?.[0]?.node?.seo;
  return <HeadComponent {...seoInfo} />;
};
