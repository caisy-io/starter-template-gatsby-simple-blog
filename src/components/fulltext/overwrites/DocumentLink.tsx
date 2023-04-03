import React from "react";
import { Asset } from "../../Asset";
import { IGenAsset } from "../../../services/graphql/__generated/sdk";

interface IDocumentLink {
  children?: React.ReactNode;
  connections: any;
  node: any;
}

export const DocumentLink: React.FC<IDocumentLink> = ({
  connections,
  node,
  children,
}) => {
  return (
    <>
      {connections?.map(
        (component: IGenAsset) =>
          component?.__typename == "Asset" &&
          node?.attrs?.documentId == component.id && (
            <Asset key={component.id} {...component} />
          )
      )}
      {children}
    </>
  );
};
