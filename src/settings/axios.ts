import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: cookies.get("auth_token"),
  },
});

export const getClient = () => {
  const token = cookies.get("auth_token");
  let subdomain = "";

  if (typeof window !== "undefined") {
    subdomain = window.location.hostname.replace(/.continuapro.com/, "");
  }

  const headers = { "Access-Control-Allow-Origin": "*" };

  token && Object.assign(headers, { Authorization: token });

  return axios.create({
    baseURL: String(process.env.NEXT_PUBLIC_API_URL) /* .replace(/subdomain/, subdomain) */,
    headers,
  });
};
