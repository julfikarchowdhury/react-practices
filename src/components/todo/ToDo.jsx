import React, { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: input,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInput("");
  };

  return (
    <div className="main-body">
      <div className="todo-container">
        <h1 className="todo-title">My To-Do List</h1>
        <div className="todo-input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="Write a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="todo-button" onClick={handleSubmit}>
            Add
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
