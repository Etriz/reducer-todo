import React, { useState } from "react";
import { actionTypes } from "../reducers/reducers";

const AddTodoForm = ({ setValueAndDispatch }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const addItemToList = (e) => {
    e.preventDefault();
    setValueAndDispatch(inputValue, actionTypes.add);
    setInputValue("");
  };
  const clearCompleted = (e) => {
    e.preventDefault();
    setValueAndDispatch(null, "DELETE");
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
