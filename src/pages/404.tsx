import React, { useEffect } from "react";
import { GetServerDataProps, GetServerDataReturn, navigate } from "gatsby";
import { EPageType, getProps } from "../services/content/getProps";
import { Page } from "../layouts/Page";
import { HeadComponent } from "../layouts/Head";
import { TServerProps } from "./[slug]";

const IndexPage: React.FC<TServerProps> = ({ serverData }) => {
  useEffect(() => {
    if (serverData?.is404) navigate("/404");
    if (serverData?.redirectHome) navigate("/");
  }, [serverData?.is404, serverData?.redirectHome]);

  return <>{serverData && <Page {...serverData} />}</>;
};

export async function getServerData(): GetServerDataReturn {
  const resPage = await getProps({ pageType: EPageType.NotFound });

  return {
    props: {
      ...(resPage || null),
    },
  };
}

export default IndexPage;

export const Head: React.FC<TServerProps> = ({ serverData }) => {
  const seoInfo = serverData?.Page?.seo;
  return <HeadComponent {...seoInfo} />;
};
