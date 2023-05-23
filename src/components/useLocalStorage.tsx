import { useRef, useState } from "react";

export function useLocalStorage(key: string, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  // var firsttime=useRef(true);
  const [storedValue, setStoredValue] = useState(() => {
    // if(firsttime.current){
      // firsttime.current=false;
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        console.log(item)
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    // }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      console.log(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}