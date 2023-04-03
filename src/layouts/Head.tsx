import React from "react";
import { IGenSeoInformation } from "../services/graphql/__generated/sdk";

export const HeadComponent: React.FC<IGenSeoInformation> = ({
  description,
  title,
  ogImage,
}) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <title>{title ?? ""}</title>
      {title && (
        <>
          <meta property="og:title" content={title ?? ""} />
          <meta name="twitter:title" content={title ?? ""} />
        </>
      )}
      {description && (
        <>
          <meta name="twitter:description" content={description ?? ""} />
          <meta name="description" content={description ?? ""} />
          <meta property="og:description" content={description ?? ""} />
        </>
      )}
      {ogImage?.src && (
        <>
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="630" />
          <meta property="og:image:height" content="1200" />
          <meta
            property="og:image"
            content={`${ogImage.src}?f=jpeg&w=1200&h=630`}
          />
          <meta
            property="og:image:secure_url"
            content={`${ogImage.src}?f=jpeg&w=1200&h=630`}
          />
          <meta
            name="twitter:image"
            content={`${ogImage.src}?f=jpeg&w=1200&h=630`}
          />
        </>
      )}
      {ogImage?.description && (
        <meta property="og:image:alt" content={ogImage.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
