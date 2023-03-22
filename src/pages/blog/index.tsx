import * as React from "react";
import { graphql, HeadFC, PageProps, navigate } from "gatsby";
import { useNavigation } from "../../services/graphql/queries/useNavigation";
import { useFooter } from "../../services/graphql/queries/useFooter";
import { Layout } from "../../layouts/Layout";
import { IGenAllBlogArticleBySlugQuery } from "../../../sdk";
import { HeadComponent } from "../../layouts/Head";
import { FullText } from "../../components/fulltext/FullText";
import { DefaultSpacer } from "../../components/DefaultSpacer";

const IndexPage = ({ data }: PageProps<IGenAllBlogArticleBySlugQuery>) => {
  const navigation = useNavigation();
  const footer = useFooter();
  const articleComponents = data?.caisy?.allBlogArticle?.edges?.[0]?.node;

  React.useEffect(() => {
    if (!articleComponents) navigate("404");
  });

  return (
    navigation &&
    footer && (
      <Layout navigation={navigation} footer={footer}>
        {articleComponents && <FullText {...articleComponents} />}
        <DefaultSpacer />
      </Layout>
    )
  );
};

export const query = graphql`
  query allBlogArticleBySlug($slug: String) {
    caisy {
      allBlogArticle(where: { slug: { eq: $slug } }) {
        edges {
          node {
            ...BlogArticle
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC<IGenAllBlogArticleBySlugQuery> = ({ data }) => {
  const seoInfo = data?.caisy?.allBlogArticle?.edges?.[0]?.node?.seo;
  return <HeadComponent {...seoInfo} />;
};
