import React, { useReducer } from "react";
import { reducerFn, INITIAL_STATE } from "../reducers/reducers";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducerFn, INITIAL_STATE);
  return (
    <div>
      {state ? (
        state.map((item) => (
          <div key={item.id}>
            <h2>{item.item}</h2>
          </div>
        ))
      ) : (
        <h2>No List Found</h2>
      )}
    </div>
  );
};

export default TodoList;
