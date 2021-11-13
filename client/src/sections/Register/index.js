import React from 'react';
import { Link } from 'react-router-dom';
import { AuthStyled } from '../../styles';

const Register = () => {
  return (
    <AuthStyled>
      <h1>Register</h1>
      <form>
        <div className='field'>
          <label>FirstName</label>
          <input type='text' />
        </div>
        <div className='field'>
          <label>LastName</label>
          <input type='email' />
        </div>
        <div className='field'>
          <label>Email</label>
          <input type='email' />
        </div>
        <div className='field'>
          <label>Password</label>
          <input type='password' />
        </div>
        <div className='btnContainer'>
          <button>login</button>
        </div>
        <div className='have-account'>
          <span>
            Already have an account <Link to='/login'>Login</Link>
          </span>
        </div>
      </form>
    </AuthStyled>
  );
};

export default Register;
