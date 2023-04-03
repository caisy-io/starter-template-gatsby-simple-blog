import type { GatsbyConfig } from "gatsby";

const siteUrl = process.env.DOMAIN || "https://www.yourdomain.tld";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `starter-template-gatsby-simple-blog`,
    siteUrl,
  },
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};

export default config;
