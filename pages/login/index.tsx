import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { LoginTemplate } from "@/templates";
import { useToast } from "@/hooks";
import { SEO } from "@/components";

const LoginPage = () => {
  const { query, replace, pathname } = useRouter();
  const { showToast } = useToast();
  const [showToastExpiredSession, setShowToastExpiredSession] = useState(false);

  useEffect(() => {
    if (query?.expired_session && !showToastExpiredSession) {
      showToast({
        title: "Sección Expirada",
        description: "La sección ha expirado, por favor inicie sesión nuevamente.",
        status: "warning",
      });
      replace({ pathname }, undefined, { shallow: true });
    }
    setShowToastExpiredSession(true);
  }, [query]);

  return (
    <>
      <SEO title="Iniciar Sesión" />
      <LoginTemplate />
    </>
  );
};

export default LoginPage;
