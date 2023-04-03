export { default } from "./[slug]";
import { GetServerDataProps } from "gatsby";
import { getServerData as getServerPropsSlug } from "./[slug]";
export { Head } from "./[slug]";

export async function getServerData({ params }: GetServerDataProps) {
  return getServerPropsSlug({
    params: {
      ...params,
    },
  } as any);
}
