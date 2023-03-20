import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { useNavigation } from "../services/graphql/queries/useNavigation";
import { useFooter } from "../services/graphql/queries/useFooter";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const nav = useNavigation();
  const footer = useFooter();
  console.log({ data, nav, footer });
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
