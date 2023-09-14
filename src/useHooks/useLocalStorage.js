import { useState } from "react";

// Custom hook to store and retrieve values from localStorage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Return initial value on error
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Save to local storage
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
