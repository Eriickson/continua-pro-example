import React, { createContext, Context, useState, FC, useContext } from "react";
import { client } from "../../settings";
import axios from "axios";
import { useUI } from "../ui/UIContext";
import { useRouter } from "next/router";
import { useClient, useHandlerTryCatch } from "src/hooks";
import { useCookies } from "react-cookie";

interface IAuthContext {
  logout(): Promise<void>;
  signin(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<IAuthContext | null>(
  null
) as Context<IAuthContext>;

const AuthProvider: FC = ({ children }) => {
  const { setLoadingScreen } = useUI();
  const { client, setAuthToken } = useClient();
  const { push } = useRouter();
  const { handlerError } = useHandlerTryCatch();
  const [, , removeCookie] = useCookies(["authToken"]);

  async function signin(email: string, password: string) {
    setLoadingScreen({ isLoading: true });
    try {
      const { data, status } = await client.post("/authenticate", {
        email,
        password,
      });

      if (status === 200) {
        setAuthToken("authToken", data.data[0].auth_token);
        if (status) window.location.href = "/dashboard";

        console.log(data);
      }
    } catch (err: any) {
      handlerError(err);
    }
  }

  async function logout() {
    setLoadingScreen({ isLoading: true, label: "Cerrando Sessión" });
    try {
      removeCookie("authToken");
    } catch (err) {
      console.log({ err });
      setLoadingScreen({ isLoading: false });
    }
  }

  return (
    <AuthContext.Provider value={{ signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
