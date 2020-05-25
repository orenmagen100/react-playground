import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import '../assets/css/UsersForm.css';

export const UsersForm = props => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [loading]);
  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp.data);
    setLoading(false);
    setUserName('');
  };
  return (
    <div className='users-form-container'>
      <h2 className='fas fa-camera'>GitHub Users</h2>
      <form onSubmit={handleSubmit} className='users-form-wrapper'>
        <input
          type='text'
          value={userName}
          onChange={event => setUserName(event.target.value)}
          placeholder='GitHub username'
          required
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <button className={`${loading} ? 'btn-loading' : '' `}>
            Add User
          </button>
        )}
      </form>
    </div>
  );
};

export default UsersForm;
