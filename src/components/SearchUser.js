import React from 'react';
import '../assets/css/SearchUser.css';

function SearchUser(props) {
  return (
    <div className='search-wrapper'>
      <form onSubmit={props.handleSubmit} className='search-form'>
        <input
          type='text'
          value={props.searchValue}
          onChange={props.handleSearch}
          placeholder='Search'
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchUser;
