import React from "react";

const TodoList = ({ state, dispatch }) => {
  const toggleCompleted = (e) => {
    dispatch({ id: Number(e.target.id), type: "TOGGLE" });
  };
  return (
    <div className="todoList">
      {state.length !== 0 ? (
        state.map((item) => (
          <div key={item.id} className="todoItem" onClick={toggleCompleted}>
            <h2 id={item.id} className={item.completed ? "completed" : null}>
              {item.item}
            </h2>
          </div>
        ))
      ) : (
        <div className="todoItem">
          <h2>No Items Found</h2>
        </div>
      )}
    </div>
  );
};

export default TodoList;
