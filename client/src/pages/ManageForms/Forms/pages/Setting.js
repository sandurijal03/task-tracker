import React from 'react';
import styled from 'styled-components';
import FormNavbar from '../components/FormNavbar';
import MessageSidebar from '../components/MessageSidebar';

const Wrapper = styled.section`
  position: absolute;
  left: 150px;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Setting = () => {
  return (
    <Wrapper>
      <FormNavbar />
      <MessageSidebar />
    </Wrapper>
  );
};

export default Setting;
