import React from "react";

import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";

import { globalTheme } from "src/themes/globalTheme";
import { AgencyProvider, AuthProvider, PlanManagerProvider, UserProvider } from "@/contexts";
import { UIComponentsProvider } from "src/providers";
import { UIProvider } from "src/contexts/ui/UIContext";

// Bar-Progress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Import Swiper styles
import "swiper/css";

import "../styles/globals.css";
import "../styles/agGridTable.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: true });

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";
import { SEO } from "@/components";
import { FC } from "react";

const MyApp: FC<any> = ({ Component, pageProps }) => {
  return (
    <>
      <SEO title="Cargando..." />
      <CookiesProvider>
        <ChakraProvider theme={globalTheme}>
          <ReduxProvider store={store}>
            <UIProvider>
              <UserProvider>
                <AgencyProvider>
                  <PlanManagerProvider>
                    <AuthProvider>
                      <UIComponentsProvider>
                        <Component {...pageProps} />
                      </UIComponentsProvider>
                    </AuthProvider>
                  </PlanManagerProvider>
                </AgencyProvider>
              </UserProvider>
            </UIProvider>
          </ReduxProvider>
        </ChakraProvider>
      </CookiesProvider>
    </>
  );
};

export default MyApp;
