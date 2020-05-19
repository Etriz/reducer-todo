import React, { useReducer } from "react";
import { reducerFn, INITIAL_STATE } from "./reducers/reducers";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [state, dispatch] = useReducer(reducerFn, INITIAL_STATE);

  return (
    <div className="App">
      <h1>Things To Do Today</h1>
      <AddTodoForm dispatch={dispatch} />
      <TodoList state={state} />
    </div>
  );
}

export default App;
