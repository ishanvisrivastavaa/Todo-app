import React from "react";
import "./CSS/TodoItems.css";
import tick from "../assets/tick.png";
import cross from "../assets/cross.png";
import notTick from "../assets/not_tick.png";

function TodoItems({ no, display, text, setTodos }) {
  const delTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };
  return (
    <div className="todo-items">
      <div
        className={`todo-items-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={notTick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}

        <div className="todoitems-text">{text}</div>
      </div>
      <img
        className="todoitems-crossicon"
        onClick={() => {
          delTodo(no);
        }}
        src={cross}
        alt=""
      />
    </div>
  );
}

export default TodoItems;
