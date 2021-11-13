import React from 'react';
import styled from 'styled-components';
import {
  SaveOutlined,
  EyeFilled,
  EditFilled,
  DeleteFilled,
  CopyFilled,
} from '@ant-design/icons';

const FormNavbarStyled = styled.div`
  position: absolute;
  left: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 10px; */
  box-shadow: 0 2px 4px rgba(42, 51, 66, 0.08);
  width: calc(100% - 80px);

  img {
    position: absolute;
    width: 100px;
    top: 0;
    left: 0;
  }

  ul {
    list-style: none;
    display: flex;
    li {
      margin: 20px;
    }
  }
`;

const SaveFormButton = styled.button`
  background-color: #5664d2;
  color: white;
  border-radius: 8px;
  width: 100px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  text-transform: capitalize;
  svg {
    margin-right: 2px;
  }
`;

const PreviewForm = styled(SaveFormButton)`
  color: #5664d2;
  background-color: white;
  border: 1px solid #5664d2;
  width: 120px;
  padding: 5px;
  border-radius: 8px;
  svg {
    margin-right: 2px;
  }
`;

const UpdateFormStatus = styled(PreviewForm)`
  width: 160px;
`;

const CopyForm = styled(PreviewForm)`
  width: 100px;
`;

const DeleteForm = styled(PreviewForm)`
  color: red;
  border-color: red;
`;

const FormNavbar = () => {
  return (
    <FormNavbarStyled>
      <div className='left'></div>
      <div className='right'>
        <ul>
          <li>
            <SaveFormButton>
              <SaveOutlined />
              save form
            </SaveFormButton>
          </li>
          <li>
            <PreviewForm>
              <EyeFilled />
              Preview form
            </PreviewForm>
          </li>
          <li>
            <UpdateFormStatus>
              <EditFilled />
              Update form status
            </UpdateFormStatus>
          </li>
          <li>
            <CopyForm>
              <CopyFilled />
              Copy form
            </CopyForm>
          </li>
          <li>
            <DeleteForm>
              <DeleteFilled />
              Delete form
            </DeleteForm>
          </li>
        </ul>
      </div>
    </FormNavbarStyled>
  );
};

export default FormNavbar;
