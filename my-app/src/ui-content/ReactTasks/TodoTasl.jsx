import React, { useState } from 'react';
import TodoBox from './TodoBox';
import './TodoTask.css';

export default function TodoTask() {
  const [data, setData] = useState("");
  const [array, setArray] = useState([]);

  const onChange = (e) => {
    setData(e.target.value); // Update input value
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.trim() !== "") {
      setArray((prevState) => [...prevState, data]); // Add new task to the list
      setData(""); // Clear the input field
    } else {
      alert("Enter input");
    }
  };

  return (
    <div className="todo-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={data}
          onChange={onChange}
          placeholder="Enter a task"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="task-list">
        {array.map((task, index) => (
          <TodoBox key={index} title={task} />
        ))}
      </div>
    </div>
  );
}
