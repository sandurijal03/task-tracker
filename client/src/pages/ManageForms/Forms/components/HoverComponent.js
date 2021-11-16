import React from 'react';
import {
  PlusSquareOutlined,
  CopyFilled,
  SettingOutlined,
  DeleteFilled,
} from '@ant-design/icons';
import styled from 'styled-components';

const HoverComponentStyled = styled.div`
  position: absolute;
  left: 400px;
  top: 25px;
  width: 48.8%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 80px;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .hover-left {
    p {
      background-color: #262626;
      color: white;
      position: absolute;
      top: 0;
      border-radius: 5px;
      padding: 3px;
    }
  }

  .hover-right {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    li {
      /* margin: 20px 10px; */
      border: 1px solid;
      padding: 3px;
      svg {
        font-size: 1.5rem;
      }
      :hover {
        background-color: #262626;
        color: white;
      }
    }
  }
`;

const HoverComponent = ({ leaveRequest, setLeaveRequest }) => {
  const handleClick = () => {
    setLeaveRequest(!leaveRequest);
  };

  return (
    <HoverComponentStyled>
      <div className='hover-left'>
        <p>accordion</p>
      </div>
      <ul className='hover-right'>
        <li onClick={handleClick}>
          <PlusSquareOutlined />
        </li>
        <li>
          <CopyFilled />
        </li>
        <li>
          <SettingOutlined />
        </li>
        <li>
          <DeleteFilled />
        </li>
      </ul>
    </HoverComponentStyled>
  );
};

export default HoverComponent;
