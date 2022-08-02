import React from 'react';
import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Task = ({ id, text, done, completeTask, deleteTask }) => {
  return (
    <div className={done ? 'task-container done' : 'task-container'}>
      <div 
        className='task-text'
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div 
        className='task-icon-container'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  )
}

export default Task;