import React, { PropsWithChildren } from "react";
import { IGenAssetFragment } from "../../../../sdk";
import { Asset } from "../../Asset";

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
        (component: IGenAssetFragment) =>
          component?.__typename == "CAISY_Asset" &&
          node?.attrs?.documentId == component.id && (
            <Asset key={component.id} {...component} />
          )
      )}
      {children}
    </>
  );
};
