import { useEffect, useState } from 'react';

type FetchState<T> = {
  state: 'idle' | 'loading' | 'ready' | 'error';
  data: T | null;
};

const initialState = {
  state: 'idle',
  data: null,
} satisfies FetchState<null>;

const useFetch = <T>(url: string | string[]) => {
  const [fetchState, setFetchState] = useState<FetchState<T>>(initialState);

  const fetchData = () => {
    (async () => {
      try {
        setFetchState((state) => ({
          ...state,
          state: 'loading',
        }));

        const response = Array.isArray(url)
          ? await Promise.all(url.map(
            async (item) => fetch(item).then((body) => body.json()),
          )) : await fetch(url).then((body) => body.json()) as any;

        if (response) {
          setFetchState((state) => ({
            ...state,
            state: 'ready',
            data: response,
          }));
        } else {
          setFetchState((state) => ({
            ...state,
            state: 'ready',
            data: null,
          }));
        }
      } catch (error) {
        setFetchState((state) => ({
          ...state,
          state: 'error',
        }));
      }
    })();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return fetchState;
};

export {
  useFetch,
};
