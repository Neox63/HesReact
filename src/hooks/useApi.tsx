import { useEffect, useState } from "react";
import { HTTPMethods } from "../types";
import { API_URL } from "../utils/constant";

const useApi = (endpoint: string, method?: HTTPMethods) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL + endpoint, {
          method: method || "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();

        setData(json);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [endpoint, method]);

  return { data, loading, error };
};

export default useApi;
