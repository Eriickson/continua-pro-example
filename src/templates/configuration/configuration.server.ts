import cookies from "next-cookies";
import { GetServerSideProps } from "../../../types/servers";
import { client, isAuthenticated, redirect, withSession } from "../../settings";
import { ConfigurationPageProps } from "./configuration";

const server: GetServerSideProps<ConfigurationPageProps> = async (ctx) => {
  const { authToken } = cookies(ctx);

  const { data } = await client.get("/users", {
    headers: {
      Authorization: String(authToken),
    },
  });

  return {
    props: {
      users: data.data,
    },
  };
};

export const configurationServer = withSession(server as any);
