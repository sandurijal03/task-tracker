import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProcessDetailed from '../components/ProcessDetailed';
import Stage from '../components/Stage';

let stages = [
  {
    id: 1,
    name: 'Manager Approval',
  },
  {
    id: 2,
    name: 'HR Approval',
  },
  {
    id: 3,
    name: 'Submit',
  },
  {
    id: 4,
    name: 'Completed',
  },
];

const ProcessStyled = styled.div`
  position: absolute;
  width: 90%;
  left: 150px;
  .main {
    display: flex;
  }

  .left {
    width: 10%;
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    ul {
      list-style: none;
      li {
        border-bottom: 2px solid lightgray;
        padding: 20px;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        cursor: move;

        .dropArea {
          color: white !important;
          background: white !important;
          position: relative;

          ::before {
            content: 'Drop Here';
            color: $blue;
            font-size: 0.5em;
            text-transform: uppercase;
            width: 100%;
            height: 100%;
            border: 2px dashed $blue;
            border-radius: 3px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        :hover {
          background: linear-gradient(to left, blue, lightgray);
        }
      }
    }
  }
  .right {
    flex: 2;
    margin-left: 10px;
  }
`;

const initialDragAndDropState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

const Process = () => {
  const [list, setList] = useState(stages);
  const [dragAndDrop, setDragAndDrop] = useState(initialDragAndDropState);

  const [showMenu, setShowMenu] = useState(false);
  const [stageName, setStageName] = useState('');

  const handleClick = (e) => {
    setStageName(e.target.innerText);
    setShowMenu(true);
  };

  const onDragStart = (e) => {
    const initialPosition = Number(e.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });
    e.dataTransfer.setData('text/html', '');
  };

  const onDragOver = (e) => {
    e.preventDefault();

    let newStages = dragAndDrop.originalOrder;

    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(e.currentTarget.dataset.position);

    const stageDragged = newStages[draggedFrom];
    const remainingStages = newStages.filter(
      (stage, index) => index !== draggedFrom,
    );

    newStages = [
      ...remainingStages.slice(0, draggedTo),
      stageDragged,
      ...remainingStages.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newStages,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };
  useEffect(() => {
    console.log('Dragged From: ', dragAndDrop && dragAndDrop.draggedFrom);
    console.log('Dropping Into: ', dragAndDrop && dragAndDrop.draggedTo);
  }, [dragAndDrop]);
  useEffect(() => {
    console.log('list updated', list);
  }, [list]);

  return (
    <ProcessStyled>
      <h3>Form Process</h3>
      <div className='main'>
        <div className='left'>
          <ul>
            {stages.map((stage, index) => {
              return (
                <Stage
                  handleClick={handleClick}
                  key={index}
                  stage={stage}
                  index={index}
                  onDragLeave={onDragLeave}
                  onDragStart={onDragStart}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  dragAndDrop={dragAndDrop}
                />
              );
            })}
          </ul>
        </div>
        {showMenu && (
          <div className='right'>
            <ProcessDetailed
              stageName={stageName}
              setStageName={setStageName}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
        )}
      </div>
    </ProcessStyled>
  );
};

export default Process;
