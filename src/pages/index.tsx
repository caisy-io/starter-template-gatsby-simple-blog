import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log({ data });
  return <h1>HELLO</h1>;
};

export const query = graphql`
  query test {
    Footer {
      id
      content {
        json
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
