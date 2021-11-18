import React from 'react';
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import { Switch } from 'antd';

const Wrapper = styled.div`
  position: absolute;
  left: 150px;
  margin: 20px auto;
  max-width: 100%;
  width: 60%;
  display: flex;
  .left {
    flex: 0.5;
  }
`;

const MainWrapper = styled.div`
  height: 100%;
  border: 1px solid lightgray;
  text-align: center;
  margin: 20px auto;
  flex: 1;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const HeaderWrapper = styled.div`
  width: 80%;
  height: 200px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const HeaderTop = styled.div``;
const HeaderBottom = styled.div``;

const FormEditorWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const FooterTop = styled.div`
  p {
    margin: 10px 0;
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid lightgray;
  border-left: none;
  border-right: none;
  margin-top: 10px;
  padding: 20px 0;
`;

const DurationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin-top: 5px;
`;

const EmployeeRequestForm = () => {
  return (
    <Wrapper>
      <MainWrapper className='main'>
        <h4>Form Settings</h4>
        <HeaderWrapper className='form-header'>
          <h1>LOGO</h1>
          <HeaderBody>
            <HeaderTop>
              <h5>Employee Leave Request Form</h5>
              <p>This is an Employee Request Form</p>
            </HeaderTop>
            <HeaderBottom>
              <p>Display form Stages</p>
              <p>Redirect to dashboard</p>
            </HeaderBottom>
          </HeaderBody>
          <EditOutlined />
        </HeaderWrapper>
        <FormEditorWrapper>
          <div className='form-body-top'>
            <p>Form instructions</p>
            <Editor
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
          </div>
          <hr />
        </FormEditorWrapper>
        <FooterWrapper>
          <FooterTop>
            <p>Autosave settings</p>
            <SwitchWrapper>
              <p>enabled</p>
              <Switch />
            </SwitchWrapper>
            <DurationWrapper>
              <p>duration (in seconds)</p>
              <input type='number' />
            </DurationWrapper>
          </FooterTop>
        </FooterWrapper>
      </MainWrapper>
    </Wrapper>
  );
};

export default EmployeeRequestForm;
