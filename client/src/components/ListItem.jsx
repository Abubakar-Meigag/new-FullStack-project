import React from 'react'
import ProgressBar from './ProgressBar';
import TickIcon from "./TickIcon";

const ListItem = ({ todoItem }) => {
  return (
    <div className="flex justify-between items">
      <div className='info-container'>
        <TickIcon />
        <p className='todo-title'>{todoItem.title}</p>
        <ProgressBar />
      </div>
      <div className=''>

      </div>
    </div>
  );
}

export default ListItem