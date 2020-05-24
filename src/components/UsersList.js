import React from 'react';
import UserCard from './UserCard';
import '../assets/css/UsersList.css';

const UsersList = props => (
  <div className='users-list'>
    {props.profiles.map(profile => (
      <UserCard key={profile.id} {...profile} />
    ))}
  </div>
);

export default UsersList;
