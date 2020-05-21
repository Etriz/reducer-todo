import React, { useReducer } from "react";
import { reducerFn, INITIAL_STATE } from "./reducers/reducers";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  // const [state, dispatch] = useReducer(reducerFn, INITIAL_STATE);
  const [storedValue, setValueAndDispatch] = useLocalStorage("reducer-todo", INITIAL_STATE);

  return (
    <div className="App">
      <h1>Things To Do Today</h1>
      <AddTodoForm setValueAndDispatch={setValueAndDispatch} />
      <TodoList storedValue={storedValue} dispatch={setValueAndDispatch} />
    </div>
  );
}

export default App;
