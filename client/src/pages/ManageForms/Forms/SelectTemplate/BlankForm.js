import React from 'react';
import styled from 'styled-components';
import { GrEdit } from 'react-icons/gr';
import { Editor } from '@tinymce/tinymce-react';
import { Switch } from 'antd';

const BlankFormStyled = styled.div`
  position: absolute;
  left: 150px;
  margin: 20px auto;
  width: 50%;
  .main {
    height: 100vh;
    border: 5px solid;
    text-align: center;
    margin: 20px auto;

    .form-header {
      width: 80%;
      height: 100px;
      margin: 0 auto;
      margin-top: 20px;
      border: 5px solid red;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .header-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
      }
    }

    .form-body {
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      border: 5px solid orange;
    }

    .form-footer {
      margin: 0 auto;
      margin-top: 20px;
      width: 80%;
      .footer-top {
        border: 3px solid red;
        p {
          margin: 10px 0;
        }
        .switch {
          display: flex;
          justify-content: space-around;
          border-top: 2px solid;
          border-bottom: 2px solid;
          margin-top: 10px;
          padding: 20px 0;
        }
        .duration {
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
          margin-top: 5px;
        }
      }
    }
  }
`;

const BlankForm = () => {
  return (
    <BlankFormStyled>
      <div className='main'>
        <h4>Form Settings</h4>
        <div className='form-header'>
          <h1>LOGO</h1>
          <div className='header-body'>
            <div className='header-body__top'>
              <h5>Blank Form</h5>
              <p>Use this form to start new blank form</p>
            </div>
            <div className='header-body__bottom'>
              <p>Display form Stages</p>
              <p>Redirect to dashboard</p>
            </div>
          </div>
          <GrEdit />
        </div>
        <div className='form-body'>
          <div className='form-body-top'>
            <p>Form instructions</p>
            <Editor
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount image',
                ],
                toolbar:
                  'formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help | image',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
          </div>
          <hr />
        </div>
        <div className='form-footer'>
          <div className='footer-top'>
            <p>Autosave settings</p>
            <div className='switch'>
              <p>enabled</p>
              <Switch />
            </div>
            <div className='duration'>
              <p>duration (in seconds)</p>
              <input type='number' />
            </div>
          </div>
        </div>
      </div>
    </BlankFormStyled>
  );
};

export default BlankForm;
