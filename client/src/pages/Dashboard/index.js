import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaTasks, FaBriefcase } from 'react-icons/fa';

const DashboardStyled = styled.div`
  width: calc(100% - 80px);
  position: absolute;
  left: 80px;
  background-color: #f1f5f7;

  h1 {
    margin: 10px 20px;
  }

  .main {
    display: flex;
    padding: 50px;

    .left {
      flex: 3;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .right {
      flex: 1;
      padding: 20px;
      margin-left: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      height: 80vh;
      background-color: white;
    }
  }
`;

const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    h6 {
      font-size: 1.2rem;
    }
  }

  svg {
    font-size: 1.2rem;
  }

  .card-left-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .status {
      span {
        margin-right: 5px;
      }
      font-size: 1.1rem;
      margin-right: 10px;
    }
  }
`;

const Dashboard = () => {
  return (
    <DashboardStyled>
      <h1>Dashboard</h1>
      <section className='main'>
        <section className='left'>
          <Link to='/tasks'>
            <CardComponent>
              <div className='card-top'>
                <div className='card-left'>
                  <h6>Tasks due now</h6>
                  <p>0</p>
                </div>
                <div className='card-right'>
                  <AiFillClockCircle />
                </div>
              </div>
              <hr />
              <div className='card-bottom'>
                <p>Number of Tasks due to today</p>
              </div>
            </CardComponent>
          </Link>
          <Link to='/tasks'>
            <CardComponent>
              <div className='card-top'>
                <div className='card-left'>
                  <h6>Tasks due later</h6>
                  <p>0</p>
                </div>
                <div className='card-right'>
                  <FaTasks />
                </div>
              </div>
              <hr />
              <div className='card-bottom'>
                <p>Number of Tasks due starting tomorrow</p>
              </div>
            </CardComponent>
          </Link>
          <Link to='/submissions'>
            <CardComponent>
              <div className='card-top'>
                <div className='card-left'>
                  <h6>My Submissions</h6>
                  <div className='card-left-left'>
                    <p className='status'>
                      <span>0</span>
                      open
                    </p>
                    <p className='status'>
                      <span>0</span>
                      completed
                    </p>
                  </div>
                  <div className='card-left-right'></div>
                </div>
                <div className='card-right'>
                  <FaBriefcase />
                </div>
              </div>
              <hr />
              <div className='card-bottom'>
                <p>count of my submissions</p>
              </div>
            </CardComponent>
          </Link>
        </section>
        <section className='right'>
          <h3>activity feed</h3>
          <p>no activity found</p>
        </section>
      </section>
    </DashboardStyled>
  );
};

export default Dashboard;
