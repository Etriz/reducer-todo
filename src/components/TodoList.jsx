import React from "react";

const TodoList = (props) => {
  const toggleCompleted = (e) => {
    props.dispatch({ value: Number(e.target.id), type: "TOGGLE" });
  };
  return (
    <div className="todoList">
      {props.storedValue ? (
        props.storedValue.map((item) => (
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
