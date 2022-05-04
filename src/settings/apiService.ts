import { getClient } from "@/settings";
import { AxiosRequestConfig } from "axios";

const client = getClient();

const listCodeErrors = [401, 404, 500];

interface ApiServiceArgs {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  data?: any;
  config?: AxiosRequestConfig<any>;
}

export const apiService = async (args: ApiServiceArgs) => {
  const { method, url, data, config } = args;

  try {
    const response = await client[method](url, data, config);

    if (listCodeErrors.includes(response.status)) {
      return Promise.reject(data);
    }

    return {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
  } catch (err: any) {
    return Promise.reject({ message: JSON.stringify(err.response.data), ping: "Pong" });
  }
};
