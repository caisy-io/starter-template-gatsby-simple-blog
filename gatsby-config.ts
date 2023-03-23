import { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `starter-template-gatsby-simple-blog`,
    siteUrl: "https://www.example.com",
  },
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.example.com",
        sitemap: "https://www.example.com/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
        `,
        // @ts-ignore
        serialize: ({ path }) => {
          if (path?.startsWith("/blog/")) {
            return {
              changefreq: "never",
              url: path,
              priority: 0.7,
            };
          } else {
            return {
              changefreq: "weekly",
              url: path,
              priority: 1,
            };
          }
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
