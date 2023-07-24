import React from 'react';

const TodoList = ({ todoItems }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;