import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export type ResponseApi<T> = {
  code: number;
  message: string;
  data: T;
};

function getClient(headers?: any) {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      ...headers,
    },
  });
}

export const useFetch = <T extends {}>(url: string) => {
  const [data, setData] = useState<ResponseApi<T> | undefined>(undefined);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);
  const [{ authToken }] = useCookies(["authToken"]);

  function fetchData(url: string) {
    setLoading(true);
    const client = getClient({ Authorization: authToken });

    client(url)
      .then(({ data }) => {
        if (data.code === 200) {
          setData(data);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }

  function reload(newUrl?: string) {
    fetchData(newUrl || url);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, isLoading, reload };
};
