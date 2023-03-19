import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { q_Navigation } from "../services/graphql/queries/Navigation";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const nav = q_Navigation();
  console.log({ data, nav });
  return <h1>HELLO</h1>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
