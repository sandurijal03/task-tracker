import React from 'react';
import { MdNavigateNext } from 'react-icons/md';

const Stage = ({
  handleClick,
  index,
  onDragLeave,
  onDragOver,
  onDragStart,
  onDrop,
  dragAndDrop,
  stage,
}) => {
  return (
    <li
      onClick={handleClick}
      key={index}
      data-position={index}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={
        dragAndDrop && dragAndDrop.draggedTo === +index ? 'dropArea' : ''
      }
    >
      {stage.id}
      {stage.name}
      <span>
        <MdNavigateNext />
      </span>
    </li>
  );
};

export default Stage;
