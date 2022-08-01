import React from 'react';
import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Task = ({ text, done }) => {
  return (
    <div className={done ? 'task-container done' : 'task-container'}>
      <div className='task-text'>
        {text}
      </div>
      <div className='task-icon-container'>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  )
}

export default Task;