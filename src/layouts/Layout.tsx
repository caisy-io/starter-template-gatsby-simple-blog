import React from "react";
import { IGenCaisy_Footer, IGenCaisy_Navigation } from "../../sdk";
import { Toast } from "../components/Toast";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

interface ILayout {
  navigation?: IGenCaisy_Navigation | null;
  footer?: IGenCaisy_Footer | null;
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ footer, navigation, children }) => {
  return (
    <>
      {process.env.PUBLIC_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
      {navigation && <Navigation {...navigation} />}
      <main>{children}</main>
      {footer && <Footer {...footer} />}
    </>
  );
};
