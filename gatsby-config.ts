import { GatsbyConfig, GatsbyFunctionRequest } from "gatsby";
import { IGenAlleMetaQuery } from "./sdk";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `starter-template-gatsby-simple-blog`,
  },
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/sitemap.xml.ts`,
        query: `
          query allMeta {
            caisy {
              allPage {
                totalCount
                pageInfo {
                  hasNextPage
                  endCursor
                }
                edges {
                  node {
                    _meta {
                      publishedAt
                    }
                    id
                    slug
                  }
                }
              }
              allBlogArticle {
                totalCount
                pageInfo {
                  hasNextPage
                  endCursor
                }
                edges {
                  node {
                    _meta {
                      publishedAt
                    }
                    id
                    slug
                  }
                }
              }
            }
          }
        `,
        resolvePages: ({
          caisy: { allBlogArticle, allPage },
        }: IGenAlleMetaQuery) => {
          const allBlogArticleResponse: any = allBlogArticle?.edges?.map(
            (edge) => {
              const slug = edge?.node?.slug;
              const meta = edge?.node?._meta;
              return { meta, slug };
            }
          );

          const allPageResponse: any = allPage?.edges?.map((edge) => {
            const slug = edge?.node?.slug;
            const meta = edge?.node?._meta;
            return { meta, slug };
          });

          const allPages = [...allBlogArticleResponse, ...allPageResponse];

          return allPages;
        },
        resolveSiteUrl: async function get(req: GatsbyFunctionRequest) {
          const { url } = req;
          const host = url?.split("/")[2];
          return host;
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "CAISY",
        fieldName: "caisy",
        url: `https://cloud.caisy.io/api/v3/e/${process.env.CAISY_PROJECT_ID}/graphql`,
        headers: {
          "x-caisy-apikey": `${process.env.CAISY_API_KEY}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./sdk.ts`,
        documentPaths: [
          "src/services/graphql/fragments/**/*.ts",
          "src/services/graphql/queries/**/*.ts",
        ],
        codegenPlugins: [
          {
            resolve: "typescript",
          },
          {
            resolve: "operations",
          },
        ],
        codegenConfig: {
          rawRequest: false,
          inlineFragmentTypes: "combine",
          skipTypename: false,
          exportFragmentSpreadSubTypes: true,
          dedupeFragments: true,
          preResolveTypes: true,
          typesPrefix: "IGen",
        },
      },
    },
  ],
};

export default config;
