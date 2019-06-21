import React from "react";

const TodoForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          id="text"
          name="text"
          placeholder="Enter Todo"
          onChange={e => handleChange(e)}
        />
        <input
          type="text"
          id="des"
          name="Des"
          className="form-control"
          placeholder="Enter Description"
          onChange={e => handleChange(e)}
        />
        <button className="btn btn-warning btn-block">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
