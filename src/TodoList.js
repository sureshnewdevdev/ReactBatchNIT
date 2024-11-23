import React from 'react';

const TodoList = ({ tasks }) => {
  return (
    <div>
      <h3>Tasks:</h3>
      {tasks.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map((task, index) => (
            <li key={index} style={{ margin: '10px 0', textAlign: 'left' }}>
              {task}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet. Add a task!</p>
      )}
    </div>
  );
};

export default TodoList;

