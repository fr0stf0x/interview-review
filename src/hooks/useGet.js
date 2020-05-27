import { useEffect, useState } from 'react';

export default function useGet(promise) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof promise !== 'function') {
      throw new Error('"promise" is not a function');
    }

    setLoading(true);

    promise().then((res) => {
      setLoading(false);

      setData(res);
    }).catch((err) => {
      setError(err);

      setLoading(false);
    });
  }, [promise]);

  return {
    loading,
    error,
    data,
  };
}
