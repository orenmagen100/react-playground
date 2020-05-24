import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserCard extends Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} style={{ maxWidth: '200px' }} alt='bla' />
        <div className='info'>
          <div className='name'>
            <Link to={'/user/' + profile.id}> {profile.name}</Link>
          </div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default UserCard;
