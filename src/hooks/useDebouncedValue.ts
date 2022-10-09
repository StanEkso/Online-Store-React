import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, timeout = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(value);
    }, timeout);
    return () => clearTimeout(id);
  });

  return debounced;
}
