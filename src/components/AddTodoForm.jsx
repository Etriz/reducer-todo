import React, { useState } from "react";

const AddTodoForm = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const addItemToList = (e) => {
    e.preventDefault();
    dispatch({ value: inputValue, type: "ADD" });
    setInputValue("");
  };

  return (
    <form onSubmit={addItemToList}>
      <label>
        <input type="text" value={inputValue} placeholder="Add Item" onChange={onChange} />
      </label>
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
