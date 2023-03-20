import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const { createHttpLink } = require(`@apollo/client`);

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "CAISY",
        fieldName: "caisy",
        //
        createLink: () => {
          return createHttpLink({
            uri: `https://cloud.caisy.io/api/v3/e/${process.env.CAISY_PROJECT_ID}/graphql`,
            headers: {
              "x-caisy-apikey": `${process.env.CAISY_API_KEY}`,
            },
            fetch,
          });
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
