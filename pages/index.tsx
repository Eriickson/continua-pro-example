import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { withAuth } from "@/hocs";

const Home: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/dashboard");
  }, []);

  return <div></div>;
};

export default withAuth(Home);
