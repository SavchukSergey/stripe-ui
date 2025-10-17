import { useEffect, useState } from "react";

export function useLocalStorage<T extends string>(key: string): T | undefined {

  const [state, setState] = useState<T | undefined>(localStorage.getItem(key) as T | undefined);

  useEffect(() => {
    function handler(evt: StorageEvent) {
      if (evt.key === key) {
        if (evt.oldValue !== evt.newValue) {
          setState(evt.newValue as T | undefined);
        }
      }
    }

    setState(localStorage.getItem(key) as T | undefined);

    window.addEventListener("storage", handler);

    return () => {
      window.removeEventListener("storage", handler);
    };
  }, [key]);

  return state as T | undefined;
}
