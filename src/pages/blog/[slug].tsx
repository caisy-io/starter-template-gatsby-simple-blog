import React, { useEffect } from "react";
import { GetServerDataProps, GetServerDataReturn, navigate } from "gatsby";
import { EPageType, getProps } from "../../services/content/getProps";
import {
  IGenBlogArticle,
  IGenFooter,
  IGenNavigation,
} from "../../services/graphql/__generated/sdk";
import { HeadComponent } from "../../layouts/Head";
import { Layout } from "../../layouts/Layout";
import { FullText } from "../../components/fulltext/FullText";
import { DefaultSpacer } from "../../components/DefaultSpacer";

type TServerProps = {
  serverData: {
    BlogArticle?: IGenBlogArticle | null;
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

  return (
    <Layout footer={serverData?.Footer} navigation={serverData?.Navigation}>
      <FullText {...serverData?.BlogArticle} />
      <DefaultSpacer />
    </Layout>
  );
};

export async function getServerData({
  params,
}: GetServerDataProps): GetServerDataReturn {
  const slug = params?.slug as string;

  const resPage = await getProps({ slug, pageType: EPageType.Blog });

  return {
    props: {
      ...(resPage || null),
    },
  };
}

export default IndexPage;

export const Head: React.FC<TServerProps> = ({ serverData }) => {
  const seoInfo = serverData?.BlogArticle?.seo;
  return <HeadComponent {...seoInfo} />;
};
