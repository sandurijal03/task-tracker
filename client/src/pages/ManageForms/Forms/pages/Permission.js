import React from 'react';
import styled from 'styled-components';

const PermissionStyled = styled.div`
  position: absolute;
  left: 150px;
`;

const Permission = () => {
  return (
    <PermissionStyled>
      <p>Form Permission</p>
      <div>
        <div className='top'>
          <select>
            <option value=''>all users</option>
          </select>
          <button>+ add</button>
        </div>
        <div>
          <h4>
            Form owners <span>1 user</span>
          </h4>
          <p>
            <div className='left'>
              <span>avatar</span>
              user@gmail.com
            </div>
            <div className='right'>option</div>
          </p>
        </div>
      </div>
    </PermissionStyled>
  );
};

export default Permission;
