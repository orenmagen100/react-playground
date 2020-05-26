import React from 'react';

const UserManagePage = props => {
  return (
    <>
      <h2>User Info</h2>
      {props.match.params.id}
    </>
  );
};

export default UserManagePage;
