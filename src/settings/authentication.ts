import cookies from "next-cookies";
import { GetServerSidePropsContext } from "types/servers";

export function isAuthenticated(ctx: GetServerSidePropsContext) {
  const { authToken } = cookies(ctx);

  return Boolean(authToken);
}
