import React from "react";

const TodoList = ({ state }) => {
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
