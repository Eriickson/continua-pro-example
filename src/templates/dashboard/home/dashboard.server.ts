import { GetServerSideProps } from "types/servers";
import { isAuthenticated, redirect, withSession } from "@/settings";

const server: GetServerSideProps<{}> = async (ctx) => {
  // if (!isAuthenticated(ctx)) return redirect();

  return {
    props: {},
  };
};

export const dashboardServer = withSession(server as any);
