import React from "react";
import { IGenCaisy_Page } from "../../sdk";
import { ComponentSelector } from "./ComponentSelector";

export const Page: React.FC<IGenCaisy_Page> = (props) => {
  return (
    <>
      {props?.components?.map(
        (component) =>
          component && (
            <React.Fragment key={component.id}>
              <ComponentSelector {...component} />
            </React.Fragment>
          )
      )}
    </>
  );
};
