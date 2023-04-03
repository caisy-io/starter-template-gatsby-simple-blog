import React from "react";
import { Toast } from "../components/Toast";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import {
  IGenFooter,
  IGenNavigation,
} from "../services/graphql/__generated/sdk";

interface ILayout {
  navigation?: IGenNavigation | null;
  footer?: IGenFooter | null;
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ footer, navigation, children }) => {
  return (
    <>
      {process.env.GATSBY_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
      {navigation && <Navigation {...navigation} />}
      <main>{children}</main>
      {footer && <Footer {...footer} />}
    </>
  );
};
