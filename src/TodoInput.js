import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    addTask(task); // Call the function passed via props
    setTask(''); // Clear the input field
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '10px', width: '70%', marginRight: '10px' }}
      />
      <button onClick={handleAddTask} style={{ padding: '10px' }}>
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
