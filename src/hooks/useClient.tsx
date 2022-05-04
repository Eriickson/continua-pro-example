import { useCookies } from "react-cookie";
import axios from "axios";
import { useCallback } from "react";

export const useClient = () => {
  const [{ authToken }, setAuthToken] = useCookies(["authToken"]);

  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: authToken,
    },
  });

  return { client, setAuthToken };
};
