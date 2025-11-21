import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);

      return () => clearTimeout(handler);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
}
