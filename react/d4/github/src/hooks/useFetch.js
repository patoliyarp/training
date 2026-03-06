import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchApi(url, options) {
    try {
      if (!url) {
        throw new Error(`Please Provide url`);
      }
      setLoading(true);
      const res = await fetch(url, options);
      if (res.status === 404) {
        throw new Error(`Resource not found`);
      } else if (!res.ok) {
        throw new Error("Error while fetch data");
      }
      const data = await res.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error.message || "Some thing went wrong while fetch data");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchApi(url, options);
  }, [url]);

  return { data, loading, error };
};
