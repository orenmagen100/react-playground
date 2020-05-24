import React, { Component } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import '../assets/css/UsersForm.css';

class UsersForm extends Component {
  state = { userName: '', loading: false };
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true }, async () => {
      const resp = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );
      this.props.onSubmit(resp.data);
      this.setState({ userName: '', loading: false });
    });
  };
  render() {
    return (
      <div className='users-form-container'>
        <h2 className='fas fa-camera'>GitHub Users</h2>
        <form onSubmit={this.handleSubmit} className='users-form-wrapper'>
          <input
            type='text'
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder='GitHub username'
            required
          />

          {this.state.loading ? (
            <LoadingSpinner />
          ) : (
            <button className={`${this.state.loading} ? 'btn-loading' : '' `}>
              Add User
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default UsersForm;
