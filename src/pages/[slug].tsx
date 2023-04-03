import React, { useEffect } from "react";
import { GetServerDataProps, GetServerDataReturn, navigate } from "gatsby";
import { EPageType, getProps } from "../services/content/getProps";
import { Page } from "../layouts/Page";
import {
  IGenFooter,
  IGenNavigation,
  IGenPage,
} from "../services/graphql/__generated/sdk";
import { HeadComponent } from "../layouts/Head";

export type TServerProps = {
  serverData: {
    Page?: IGenPage | null;
    is404?: boolean;
    redirectHome?: boolean;
    Navigation?: IGenNavigation;
    Footer?: IGenFooter;
  };
};

const IndexPage: React.FC<TServerProps> = ({ serverData }) => {
  useEffect(() => {
    if (serverData?.is404) navigate("/404");
    if (serverData?.redirectHome) navigate("/");
  }, [serverData?.is404, serverData?.redirectHome]);

  return <>{serverData && <Page {...serverData} />}</>;
};

export async function getServerData({
  params,
}: GetServerDataProps): GetServerDataReturn {
  const slug = params?.slug as string;

  const resPage = await getProps({ slug, pageType: EPageType.Index });

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
