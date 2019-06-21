import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
function Todos() {
  const [todos, setTodo] = useState([
    { text: "Morning Yoga 6 am", Des: "Daily yoga good for mental fit" },
    { text: "Reading Book 8 am", Des: "Motivational Books" },
    { text: "Having Tiffin 9 am", Des: "Healthy protein food" }
  ]);

  const [singleTodo, setSingleTodo] = useState({ text: "", Des: "" });

  const [action, setAction] = useState({ text: "add", index: -1 });

  function handleSubmit(e) {
    console.log("clicked");
    e.preventDefault();
    //console.log(newText);
    //console.log(newDes);

    if (action.text == "add") {
      const newTodo = [...todos, singleTodo];

      setTodo(newTodo);
      document.getElementById("text").value = "";
      document.getElementById("des").value = "";
    } else {
      todos[action.index] = singleTodo;
      console.log(todos);
      const finalTodo = [...todos];
      setTodo(finalTodo);
      document.getElementById("text").value = "";
      document.getElementById("des").value = "";
    }
    setAction({ text: "add", index: -1 });
  }

  function handleChange(e, strControl) {
    setSingleTodo({ ...singleTodo, [e.target.name]: e.target.value });
    console.log(singleTodo);
  }

  function deleteItem(index) {
    const newitems = [...todos];

    console.log("delete");
    newitems.splice(index, 1);
    setTodo(newitems);
    console.log(newitems);
  }

  function handleEdit(todo, index) {
    document.getElementById("text").value = todo.text;
    document.getElementById("des").value = todo.Des;
    setAction({ text: "edit", index: index });
    setSingleTodo({ text: todo.text, Des: todo.Des });
  }

  return (
    <div className="todos">
      <h1 className="heading">Todos</h1>
      <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} />
      {todos.map((todo, index) => {
        // return <TodoItem text={todo.text} des={todo.Des} />;
        return (
          <TodoItem
            todo={todo}
            index={index}
            deleteItem={deleteItem}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
}

export default Todos;
