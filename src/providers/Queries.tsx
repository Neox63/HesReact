import axios, { AxiosInstance } from "axios";
import { ReactNode, useMemo } from "react";
import { SWRConfig } from "swr";

export const createFetcher = (instance: AxiosInstance) => {
  return async function fetcher(url: string, config = {}) {
    try {
      const response = await instance({
        url,
        ...config,
      });
      return response.data;
    } catch (error: any) {
      throw Error(error);
    }
  };
};

const baseConfig = {
  provider: () => new Map(),
};

export const APIProvider = ({
  children,
  api,
}: {
  children: ReactNode;
  api: string;
}) => {
  const config = useMemo(() => {
    if (api) {
      const instance = axios.create({
        baseURL: api,
      });
      return {
        ...baseConfig,
        fetcher: createFetcher(instance),
      };
    }

    return null;
  }, [api]);

  if (!config) return null;

  return <SWRConfig value={config}>{children}</SWRConfig>;
};
