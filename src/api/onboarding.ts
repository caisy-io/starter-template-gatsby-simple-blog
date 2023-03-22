import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  res.redirect(
    `https://app.caisy.io/app/project/home?project_id=${process.env.CAISY_PROJECT_ID}?verify_onboarding=true`
  );
}
