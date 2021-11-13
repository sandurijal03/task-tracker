import React from 'react';
import { Link } from 'react-router-dom';
import { AuthStyled } from '../../styles';

const Login = () => {
  return (
    <AuthStyled>
      <h1>LOGIN</h1>
      <form>
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
            Doesn't have account <Link to='/register'>Register</Link>
          </span>
        </div>
        {/* <div className='btnContainer'>
          <button className='googleButton'>sign in with google</button>
        </div> */}
      </form>
    </AuthStyled>
  );
};

export default Login;
