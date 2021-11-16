/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import styled from 'styled-components';

const LoadingCardStyled = styled.div`
  /* position: absolute;
  left: 150px; */

  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 400px;
  height: 155px;
  margin: 20px;
  border-radius: 10px;
  background-color: #e2e8f0;
  box-shadow: 0 9px 33px rgba(0, 0, 0, 0.07);

  .skeleton-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    margin-left: 10px;
  }

  .skeleton-description {
    margin: 10px 0;
  }

  .skeleton-link {
    margin-top: 20px;
  }

  .skeleton-skills {
    display: flex;
    justify-content: space-between;
  }

  .skeleton-description span:nth-child(1) {
    display: block;
    width: 210px;
    height: 10px;
    background-color: #94a3b8;
  }

  .skeleton-description span:nth-child(2) {
    display: block;
    width: 150px;
    height: 10px;
    background-color: #94a3b8;
    margin-top: 5px;
  }

  .skeleton-skills .skill {
    list-style: none;
    width: 65px;
    height: 12px;
    background-color: #94a3b8;
  }

  .skeleton-link {
    width: 75px;
    height: 12px;
    background-color: #94a3b8;
  }

  .skeleton-title {
    width: 150px;
    height: 12px;
    animation: pulse 2s infinite ease-in-out;
  }

  .skeleton-description span:nth-child(1) {
    display: block;
    width: 210px;
    height: 10px;
    animation: pulse 2s infinite ease-in-out;
  }

  .skeleton-description span:nth-child(2) {
    display: block;
    width: 150px;
    height: 10px;
    animation: pulse 2s infinite ease-in-out;
    margin-top: 5px;
  }

  .skeleton-skills .skill {
    width: 65px;
    height: 12px;
    animation: pulse 2s infinite ease-in-out;
  }

  .skeleton-link {
    width: 75px;
    height: 12px;
    animation: pulse 2s infinite ease-in-out;
  }
  @keyframes pulse {
    0% {
      background-color: #94a3b8;
    }

    50% {
      background-color: #cbd5e1;
    }

    100% {
      background-color: #94a3b8;
    }
  }
`;

const LoadingCard = () => {
  return (
    <LoadingCardStyled>
      <div className='skeleton-text'>
        <h2 className='skeleton-title'></h2>
        <p className='skeleton-description'>
          <span></span>
          <span></span>
        </p>
        <ul className='skeleton-skills'>
          <li className='skill'></li>
          <li className='skill'></li>
          <li className='skill'></li>
        </ul>
        <a href='#' className='skeleton-link'></a>
      </div>
    </LoadingCardStyled>
  );
};

export default LoadingCard;
