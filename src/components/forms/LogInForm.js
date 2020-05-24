import React, { useState } from 'react';
import { useInput } from '../hooks/UseInput';
import '../../assets/css/LogInForm.css';

function LogInForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: userName,
    bind: bindUserName,
    reset: resetUserName
  } = useInput('');
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput('');

  const handleSubmit = async evt => {
    setIsLoading(true);
    evt.preventDefault();
    console.log(`Submit: ${userName} ${password}`);
    // AuthService.login({ userName, password });
    setTimeout(() => {
      resetUserName();
      resetPassword();
      setIsLoading(false);
      props.onClose();
    }, 2000);
  };
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2 style={{ color: 'white', paddingBottom: '10px' }}>Login</h2>
      <div className='login-inputs'>
        <label>
          User Name:
          <input type='text' {...bindUserName} />
        </label>
        <label>
          Password:
          <input type='text' {...bindPassword} />
        </label>
      </div>

      <button
        style={{
          background: isLoading && 'grey'
        }}
        className='submit-button'
        type='submit'
        disabled={isLoading}
      >
        Submit
      </button>
    </form>
  );
}

export default LogInForm;
