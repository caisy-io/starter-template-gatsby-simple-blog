const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const pageResult = await graphql(`
    query allPageSlug {
      caisy {
        allPage {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `);

  if (pageResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  pageResult?.data?.caisy?.allPage?.edges?.forEach((edge) => {
    actions.createPage({
      path: `${edge?.node?.slug}` || null,
      component: path.resolve(`./src/pages/index.tsx`),
      context: { slug: edge?.node?.slug || null },
    });
  });

  const blogArticleResult = await graphql(`
    query allBlogArticle {
      caisy {
        allBlogArticle {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `);

  if (blogArticleResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  blogArticleResult?.data?.caisy?.allBlogArticle?.edges?.forEach((edge) => {
    actions.createPage({
      path: `/blog/${edge?.node?.slug}` || null,
      component: path.resolve(`./src/pages/blog/index.tsx`),
      context: { slug: edge?.node?.slug || null },
    });
  });
};
