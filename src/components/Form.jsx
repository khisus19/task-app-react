import React from 'react';
import '../styles/TaskForm.css';

const TaskForm = () => {
  return (
    <form className='task-form'>
      <input
        className='task-input'
        type='text'
        placeholder='Write your next task'
        name='text'
      />
      <button className='task-btn'>
        Add Task
      </button>
    </form>
  )
};

export default TaskForm;