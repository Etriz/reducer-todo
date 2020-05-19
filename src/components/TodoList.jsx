import React from "react";

const TodoList = ({ state, dispatch }) => {
  const toggleCompleted = (e) => {
    dispatch({ id: Number(e.target.id), type: "toggle" });
  };
  return (
    <div>
      {state ? (
        state.map((item) => (
          <div key={item.id} className="todoItem" onClick={toggleCompleted}>
            <h2 id={item.id} className={item.completed ? "completed" : null}>
              {item.item}
            </h2>
          </div>
        ))
      ) : (
        <h2>No List Found</h2>
      )}
    </div>
  );
};

export default TodoList;
