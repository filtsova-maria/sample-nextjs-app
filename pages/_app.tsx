import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import { baseURL } from "../config";

export const axiosInstance = axios.create({ baseURL });

const fetcher = async (route: string) => {
  const res = await axiosInstance.get(`${baseURL}/${route}`);
  return res.data;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
