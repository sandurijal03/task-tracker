import styled from 'styled-components';

export const AuthStyled = styled.div`
  width: 350px;
  margin: 80px auto;
  min-height: 600px;
  background-color: lightblue;
  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    .name {
      display: flex;
    }

    .field {
      margin: 8px;
      padding: 8px;
      label {
        display: block;
        margin-bottom: 8px;
        font-size: 1.2rem;
      }
      input {
        font-size: 1.1rem;
        outline: none;
        height: 2rem;
      }
    }

    .btnContainer {
      margin: 10px 20px;
      button {
        padding: 10px;
        width: 250px;
        font-size: 1.5rem;
        cursor: pointer;
        text-transform: capitalize;
      }
      .googleButton {
        padding: 10px;
        width: 250px;
        font-size: 1.5rem;
        cursor: pointer;
        text-transform: capitalize;
        color: white;
        background-color: red;
      }
    }
    .have-account {
      margin-top: 10px;
      margin-left: 20px;
    }
  }
`;
