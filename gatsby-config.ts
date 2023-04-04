import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = `https://${process.env.DOMAIN}` || "https://www.yourdomain.tld";

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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/api/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};

export default config;
