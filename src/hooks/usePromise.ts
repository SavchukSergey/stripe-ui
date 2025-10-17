import { useEffect, useState } from "react";

export function usePromise<T>(promise: Promise<T>): T | undefined {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    promise.then(val => setData(val));
  }, [promise]);

  return data;
}