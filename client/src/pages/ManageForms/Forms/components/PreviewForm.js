import React, { useState } from 'react';
import styled from 'styled-components';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const PreviewFormStyled = styled.div`
  position: absolute;
  left: 150px;
  /* width: calc(100% - 150px); */

  width: 40%;
  margin: 50px auto;
  border: 1px solid lightgray;
  .header {
    .header-top {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .header-bottom {
      margin: 0 auto;
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100px;
      p {
        background-color: white;
        color: #747fda;
        padding: 12px;
        border-radius: 50%;
        border: 1px solid #747fda;
      }
      span {
        border: 1px solid lightgray;
        width: 550px;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    align-self: center;

    .first,
    .second,
    .third {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .main-form {
    margin-bottom: 50px;
    .first-header,
    .second-header,
    .third-header,
    .fourth-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      margin: 0 auto;
      background-color: gray;
      margin-bottom: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    section {
      width: 50%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
      .form-group {
        width: 100%;
        border-bottom: 2px solid lightgray;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

const PreviewForm = () => {
  const [showMain, setshowMain] = useState(true);
  const [leaveRequest, setLeaveRequest] = useState(true);
  const [manager, setManager] = useState(true);
  const [hr, setHr] = useState(true);
  const [employee, setEmployee] = useState(true);

  return (
    <PreviewFormStyled>
      <div className='header'>
        <div className='header-top'>
          <h1>Logo</h1>
          <h2>Employee Leave Request Form</h2>
        </div>
        <div className='header-bottom'>
          <span></span>
          <p>1</p>
          <span></span>
          <p>2</p>
          <span></span>
          <p>3</p>
          <span></span>
          <p>4</p>
          <span></span>
        </div>
      </div>

      <div className='main'>
        <p onClick={() => !!setshowMain(!showMain)}>
          {showMain ? 'hide' : 'show instruction'}
        </p>
        {showMain ? (
          <div>
            <div className='first'>
              <h4>Understanding this form</h4>
              <p>
                This is an employee leave request form to request leave over a
                specified period of time.
              </p>
              <p>
                This form has to be completed within 14 days of the date
                requested and is subject to manager approval.
              </p>
            </div>
            <div className='second'>
              <h4>Completing this form</h4>
              <p>
                To complete this form, have all necessary documentation ready
                and fill in all required fields. You can choose to upload
                documents that are pertinent to your leave within this form
              </p>
              <p>
                When you are finished, click submit at the bottom of the page.
              </p>
            </div>
            <div className='third'>
              <h4>When completed</h4>
              <p>When the form is completed, it will be sent to the </p>
            </div>
          </div>
        ) : null}
      </div>

      <div className='main-form'>
        <div className='first'>
          <div
            className='first-header'
            onClick={() => setLeaveRequest(!leaveRequest)}
          >
            <h1>Leave Requested</h1>
            {!leaveRequest ? <DownOutlined /> : <UpOutlined />}
          </div>
          <div className='first-body'>
            {leaveRequest && (
              <section>
                <div className='form-group'>
                  <label>Starting date</label>
                  <input type='date' name='' id='' />
                </div>
                <div className='form-group'>
                  <label>Ending date</label>
                  <input type='date' name='' id='' />
                </div>
                <div className='form-group'>
                  <label>Reason for leave</label>
                  <select>
                    <option value=''>select an option</option>
                    <option value=''>sick leave</option>
                    <option value=''>annual leave</option>
                    <option value=''>carer's leave</option>
                    <option value=''>civil leave</option>
                    <option value=''>others</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Comment</label>
                  <textarea name='' id='' cols='50' rows='5'></textarea>
                </div>
              </section>
            )}
          </div>
        </div>

        <div className='second'>
          <div className='second-header' onClick={() => setManager(!manager)}>
            <h1>Manager Approval</h1>
            {!manager ? <DownOutlined /> : <UpOutlined />}
          </div>
          <div className='second-body'>
            {manager && (
              <section>
                <div className='form-group'>
                  <label>Manager Name</label>
                  <select>
                    <option value=''>select an option</option>
                    <option value=''>sick leave</option>
                    <option value=''>annual leave</option>
                    <option value=''>carer's leave</option>
                    <option value=''>civil leave</option>
                    <option value=''>others</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Date of Decision</label>
                  <input type='date' name='' id='' />
                </div>
                <div className='form-group'>
                  <label>Manager Comments</label>
                  <textarea name='' id='' cols='50' rows='5'></textarea>
                </div>
              </section>
            )}
          </div>
        </div>

        <div className='third'>
          <div className='third-header' onClick={() => setHr(!hr)}>
            <h1>HR Approval</h1>
            {!hr ? <DownOutlined /> : <UpOutlined />}
          </div>
          <div className='third-body'>
            {hr && (
              <section>
                <div className='form-group'>
                  <label>Manager Name</label>
                  <select>
                    <option value=''>select an option</option>
                    <option value=''>sick leave</option>
                    <option value=''>annual leave</option>
                    <option value=''>carer's leave</option>
                    <option value=''>civil leave</option>
                    <option value=''>others</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Date of Decision</label>
                  <input type='date' name='' id='' />
                </div>
                <div className='form-group'>
                  <label>Manager Comments</label>
                  <textarea name='' id='' cols='50' rows='5'></textarea>
                </div>
              </section>
            )}
          </div>
        </div>

        <div className='fourth'>
          <div className='fourth-header' onClick={() => setEmployee(!employee)}>
            <h1>Employee Details</h1>
            {!employee ? <DownOutlined /> : <UpOutlined />}
          </div>
          <div className='fourth-body'>
            {employee && (
              <section>
                <div className='form-group'>
                  <label>Employee Name</label>
                  <select>
                    <option value=''>select an option</option>
                    <option value=''>sick leave</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Department</label>
                  <select>
                    <option value=''>select an option</option>
                    <option value=''>Tenant & Occupancy</option>
                    <option value=''>annual leave</option>
                    <option value=''>carer's leave</option>
                    <option value=''>civil leave</option>
                    <option value=''>others</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Emergency Contact Number</label>
                  <input type='text' />
                </div>
                <div className='form-group'>
                  <label>My Manager</label>
                  <select>
                    <option value=''>select an option</option>
                    <option value=''>sick leave</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>My HR Manager</label>
                  <select>
                    <option value=''>select an option</option>
                    <option value=''>sick leave</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Additional Comments</label>
                  <textarea name='' id='' cols='50' rows='5'></textarea>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </PreviewFormStyled>
  );
};

export default PreviewForm;
