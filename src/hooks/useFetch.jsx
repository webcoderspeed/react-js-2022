import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }

        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
        setError(null);
      })
      .catch((error) => setError(error.message));
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
