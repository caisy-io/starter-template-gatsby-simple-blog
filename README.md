# Starter template Gatsby simple blog with caisy

## Gatsby x Caisy

Deploy this template to Vercel
<br>
<br>
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaisy-io%2Fstarter-template-gatsby-simple-blog&env=CAISY_PROJECT_ID,CAISY_API_KEY&project-name=caisy-gatsby-simple-blog&repository-name=caisy-gatsby-simple-blog)

### Features

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support

## Requirements

In order to have the right blueprints configured, make sure to follow the onboard on [caisy.io](https://caisy.io/) and select the starter template _"Gatsby Simple Blog"_
To run this project a `.env.production` file like this (with your own projects values) is required:

```
CAISY_PROJECT_ID=a894c383-edfc-4499-a639-a40509986ed4
CAISY_API_KEY=xxx
DOMAIN=www.example.com
```

### To run this project locally

- [ ] `git clone https://github.com/caisy-io/starter-template-gatsby-simple-blog.git`
- [ ] create `.env.development` file with your project id and API key
- [ ] `yarn install`
- [ ] `yarn develop`

In order to have the right blueprints configured, make sure to follow the onboard and select the starter template "Gatsby Simple Blog"

### We are using

- Gatsby as server and server side rendering framework
- tailwindcss for styling
- @caisy/rich-text-react-renderer to render the caisy richtexts in Gatsby
- graphql and graphql-request to fetch data from caisy
- During development we generate code using `@graphql-codegen/cli and plugins` you will need to run `yarn gen` to generate the types


### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                                   |
| :--------------------- | :--------------------------------------------------------|
| `yarn install`          | Installs dependencies                                   |
| `yarn gen`          |  Downloads the generated types from Caisy API                                   |
| `yarn develop`          | Starts local dev server at `localhost:8000`              |                |
| `yarn build`        | Build your production site to `./public/`                   |
| `yarn serve`        | Run your production site on `localhost:9000`|
| `gatsby ...`    | Run CLI commands like `gatsby clean`,&nbsp;   `gatsby check`|
| `gatsby --help` | Get help using the Gatsby CLI                             |

## 👀 Want to learn more?

Feel free to check [the Caisy documentation](https://caisy.io/developer/docs)
Feel free to check [the Gatsby documentation](https://www.gatsbyjs.com/docs/)
