import useSWR from "swr";

const useUsers = (endpoint: string) => {
  const { data, error } = useSWR(endpoint);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useUsers };
