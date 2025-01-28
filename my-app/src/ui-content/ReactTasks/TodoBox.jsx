import React from 'react';
import './TodoTask.css';

export default function TodoBox(props) {
  return (
    <div className="todo-box">
        <h1>list</h1>
      <p>{props.title}</p> {/* Display each task in a div */}
    </div>
    
  );
}
