import { useEffect, useState } from "react";

export function useLocaleStorageState({ initialState, key }) {
  const [value, setValue] = useState(function () {
    const storeValue = localStorage.getItem("key");
    return storeValue ? JSON.parse(storeValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
