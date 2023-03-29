import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const url = `https://app.staging.caisy.io/app/project/home?project_id=${process.env.CAISY_PROJECT_ID}&verify_template_setup=true`;
  res.redirect(url);
}
