import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(42, 51, 66, 0.08);
  /* position: sticky;
  left: 0;
  top: 0; */
  img {
    width: 50px;
    margin: 10px 20px;
  }

  /* .logo {
    font-size: 2rem;
  } */

  ul {
    list-style-type: none;
    display: flex;
  }

  li {
    margin-right: 20px;
    font-size: 1.2rem;
  }
`;
