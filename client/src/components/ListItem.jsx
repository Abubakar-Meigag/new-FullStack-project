import React from 'react'
import ProgressBar from './ProgressBar';
import TickIcon from "./TickIcon";

const ListItem = ({ todoItem }) => {
  return (
    <li className="flex justify-between items">
      <div className="info-container">
        <TickIcon />
        <p className="todo-title">
          {todoItem.title}
        </p>
        <ProgressBar />
      </div>
      <div className="flex flex-col my-3 mx-3 sm:flex-row md:flex-row p-2 gap-2 text-center sm:text-center md:text-center">
        <button className="btn btn-accent text-base sm:text-xl">Edit Todo</button>
        <button className="btn btn-error text-base sm:text-xl">Delete</button>
      </div>
    </li>
  );
}

export default ListItem