import axios from "axios";
import { CacheRequestConfig, setupCache } from "axios-cache-interceptor";
import { useEffect, useState } from "react";
import { baseURL } from "../config";

type Body = {
  [K in string]: any;
};

type Headers = Body;

const useAxios = <TResponse>(
  url: string,
  method: "get" | "post" | "put",
  requestId: string,
  body?: Body,
  headers?: Headers
) => {
  const axiosInstance = setupCache(
    axios.create({
      baseURL,
    })
  );
  const [res, setRes] = useState<TResponse | undefined>(undefined);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  const cacheConfig: CacheRequestConfig = {
    id: requestId,
    cache: { ttl: 1000 * 60 },
    headers,
  };

  const fetch = (requestBody: Body) => {
    axiosInstance[method](url, requestBody)
      .then((res) => {
        setRes(res.data);
      })
      .catch((error) => setErr(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (method === "get") {
      fetch(cacheConfig);
    }
  }, [method, url, body, headers]);

  return { res, err, loading, fetch };
};

export default useAxios;
