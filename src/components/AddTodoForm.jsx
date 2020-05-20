import React, { useState } from "react";

const AddTodoForm = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const addItemToList = (e) => {
    e.preventDefault();
    dispatch({ value: inputValue, type: "ADD" });
    setInputValue("");
  };
  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: "DELETE" });
  };

  return (
    <div className="formDiv">
      <form onSubmit={addItemToList}>
        <label>
          <input type="text" value={inputValue} placeholder="Add Item" onChange={onChange} />
        </label>
        <button type="submit" className="btn">
          Add
        </button>
        <button onClick={clearCompleted} className="btn">
          Clear Complete
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
