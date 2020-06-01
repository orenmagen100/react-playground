import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import SearchUser from './SearchUser';
import UsersForm from './UsersForm';

function Users(props) {
  // const [profiles, setProfiles] = useState([...currentUsers]);
  const [searchValue, setSearchValue] = useState('');
  const { users, actions } = props;
  // const [displayProfiles, setDisplayProfiles] = useState(profiles);

  // useEffect(() => {
  //   setDisplayProfiles(profiles);
  // }, [profiles]);

  useEffect(() => {
    if (users.length === 0) {
      actions.loadUsers().catch(error => {
        alert('Loading users failed' + error);
      });
    }
  }, []);

  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
  };
  const addNewProfile = async profileData => {
    actions.saveUser(profileData);
  };
  const handleSubmit = event => {
    event.preventDefault();
    // setDisplayProfiles(
    //   profiles.filter(
    //     profile =>
    //       profile.name && profile.name.toLowerCase().indexOf(searchValue) > -1
    //   )
    // );
  };

  return (
    <div>
      <div className='users-container'>
        <UsersForm onSubmit={addNewProfile} />
        <SearchUser
          handleSearch={handleSearch}
          searchValue={searchValue}
          handleSubmit={handleSubmit}
        />
      </div>
      <UsersList profiles={props.users} />
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users.length === 0 ? [] : state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(userActions.loadUsers, dispatch),
      saveUser: bindActionCreators(userActions.saveUser, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
