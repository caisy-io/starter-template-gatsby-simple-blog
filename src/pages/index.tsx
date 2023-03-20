import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { useNavigation } from "../services/graphql/queries/useNavigation";
import { useFooter } from "../services/graphql/queries/useFooter";
import { Navigation } from "../layouts/Navigation";
import { Layout } from "../layouts/Layout";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const nav = useNavigation();
  const footer = useFooter();
  console.log({ nav: nav, footer: footer });
  return (
    <Layout navigation={nav} footer={footer}>
      HI
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../layouts/Head";
