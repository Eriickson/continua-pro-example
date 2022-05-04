import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Cookies from "universal-cookie";
import { useAction } from "@/store";

const cookies = new Cookies();

interface WithRouterArgs {
  isPublic: boolean;
}

const PublicRoutes = ["/login"];

export const withAuth = (Page: FC, args?: WithRouterArgs) => {
  return (props: any) => {
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();
    const { setCurrentProfile } = useAction();

    useEffect(() => {
      if (!PublicRoutes.includes(router.pathname)) {
        if (cookies.get("auth_token")) {
          setIsAuth(true);
          const profile = JSON.parse(localStorage.getItem("current_user") || "{}");
          setCurrentProfile({ profile });
        } else {
          localStorage.removeItem("current_user");
          router.push({ query: { return_url: router.asPath, expired_session: true }, pathname: "/login" });
        }
      }
    }, [router]);

    if (!isAuth) return null;

    return <Page isAuth={false} error={true} returnUrl={router.asPath} {...props} />;
  };
};
