import React, { useState } from 'react';
import styled from 'styled-components';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import HoverComponent from '../components/HoverComponent';

const DesignerStyled = styled.div`
  position: absolute;
  left: 150px;
  width: 90%;

  display: flex;
  .left {
    flex: 0.3;
    height: 100%;

    ul {
      list-style: none;
      li {
        padding: 10px;
        border: 2px solid;
        margin: 5px 0;
      }
    }
  }
  .center {
    flex: 3;
    margin: 0 200px;
    .main-form {
      margin: 50px 0;
      .first-header,
      .second-header,
      .third-header,
      .fourth-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        background-color: gray;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }

      section {
        width: 100%;
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
  }
  .right {
    flex: 1;
    background-color: red;
  }
`;

const Designer = () => {
  const [leaveRequest, setLeaveRequest] = useState(true);
  const [manager, setManager] = useState(true);
  const [hr, setHr] = useState(true);
  const [employee, setEmployee] = useState(true);
  const [showMenu, setshowMenu] = useState(false);

  const handleMouseOver = (e) => {
    setshowMenu(!showMenu);
  };

  return (
    <DesignerStyled>
      <div className='left'>
        <ul>
          <li>
            <input type='text' />
          </li>
          <li>Checkboxes</li>
          <li>Currency Input</li>
          <li>Date</li>
          <li>DropDown</li>
          <li>File Upload</li>
          <li>Header Text</li>
          <li>HyperLink</li>
          <li>Image</li>
          <li>Label</li>
          <li>List Lookup</li>
          <li>Multi-line Input</li>
          <li>Number Input</li>
          <li>Paragraph</li>
          <li>People Picker</li>
          <li>Radio Input</li>
          <li>Rich Textarea</li>
          <li>Text Input</li>
          <li>Yes/No Input</li>
          <li>Repeater</li>
          <li>Section</li>
        </ul>
      </div>
      <div className='center'>
        <div className='main-form'>
          {showMenu && (
            <HoverComponent
              leaveRequest={leaveRequest}
              setLeaveRequest={setLeaveRequest}
            />
          )}
          <div className='first' onMouseOver={handleMouseOver}>
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
            <div
              className='fourth-header'
              onClick={() => setEmployee(!employee)}
            >
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
                    <label>Emergency Contact Number</label>
                    <textarea name='' id='' cols='50' rows='5'></textarea>
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
      </div>
      <div className='right'></div>
    </DesignerStyled>
  );
};

export default Designer;
