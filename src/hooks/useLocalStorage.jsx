import { useReducer } from "react";
import { reducerFn } from "../reducers/reducers";

// export const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue;
//   });

//   const setValue = (value) => {
//     setStoredValue(value);
//     window.localStorage.setItem(key, JSON.stringify(value));
//   };
//   return [storedValue, setValue];
// };

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, dispatch] = useReducer(reducerFn, () => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValueAndDispatch = async (value, type) => {
    // const blankObject = { item: value, completed: false, id: Date.now() };
    dispatch({ value: value, type: type });
    // const newState = await storedValue;
    // window.localStorage.setItem(key, JSON.stringify(newState));
  };
  return [storedValue, setValueAndDispatch];
};
