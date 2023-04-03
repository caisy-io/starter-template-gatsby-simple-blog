import React from "react";
import { ComponentSelector } from "./ComponentSelector";
import {
  IGenFooter,
  IGenNavigation,
  IGenPage,
} from "../services/graphql/__generated/sdk";
import { Layout } from "./Layout";

interface IPage {
  Navigation?: IGenNavigation;
  Footer?: IGenFooter;
  Page?: IGenPage | null;
}

export const Page: React.FC<IPage> = ({ Footer, Navigation, Page }) => {
  return (
    <Layout footer={Footer} navigation={Navigation}>
      {Page?.components?.map(
        (component) =>
          component && (
            <React.Fragment key={component.id}>
              <ComponentSelector {...component} />
            </React.Fragment>
          )
      )}
    </Layout>
  );
};
