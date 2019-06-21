import React from "react";

function TodoItem(props) {
  //console.log(props.todo.Des);
  return (
    <div class="todoitem">
      <h5 style={{ display: "inline" }}>{props.todo.text}</h5>
      <span class="action" style={{ float: "right", fontsize: "5px" }}>
        <i
          class="fas fa-edit fa-small"
          onClick={() => props.handleEdit(props.todo, props.index)}
        />
        <i
          class="fas fa-trash fa-small"
          onClick={() => props.deleteItem(props.index)}
        />
      </span>

      <p>{props.todo.Des}</p>
    </div>
  );
}

export default TodoItem;
