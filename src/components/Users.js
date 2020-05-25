import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import SearchUser from './SearchUser';
import UsersForm from './UsersForm';

function Users() {
  const [profiles, setProfiles] = useState([...currentUsers]);
  const [searchValue, setSearchValue] = useState('');
  const [displayProfiles, setDisplayProfiles] = useState(profiles);

  useEffect(() => {
    setDisplayProfiles(profiles);
  }, [profiles]);

  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
  };
  const addNewProfile = async profileData => {
    setProfiles(() => [...profiles, profileData]);

  };
  const handleSubmit = event => {
    event.preventDefault();
    setDisplayProfiles(
      profiles.filter(
        profile =>
          profile.name && profile.name.toLowerCase().indexOf(searchValue) > -1
      )
    );
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
      <UsersList profiles={displayProfiles} />
    </div>
  );
}

export default Users;

const currentUsers = [
  {
    login: 'orenmagen100',
    id: 6236964,
    node_id: 'MDQ6VXNlcjYyMzY5NjQ=',
    avatar_url: 'https://avatars1.githubusercontent.com/u/6236964?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/orenmagen100',
    html_url: 'https://github.com/orenmagen100',
    followers_url: 'https://api.github.com/users/orenmagen100/followers',
    following_url:
      'https://api.github.com/users/orenmagen100/following{/other_user}',
    gists_url: 'https://api.github.com/users/orenmagen100/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/orenmagen100/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/orenmagen100/subscriptions',
    organizations_url: 'https://api.github.com/users/orenmagen100/orgs',
    repos_url: 'https://api.github.com/users/orenmagen100/repos',
    events_url: 'https://api.github.com/users/orenmagen100/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/orenmagen100/received_events',
    type: 'User',
    site_admin: false,
    name: 'Oren Magen',
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: true,
    bio: 'Senior Web developer',
    public_repos: 2,
    public_gists: 0,
    followers: 1,
    following: 0,
    created_at: '2013-12-21T15:22:51Z',
    updated_at: '2020-05-20T13:52:12Z'
  },
  {
    login: 'liadmagen',
    id: 130765,
    node_id: 'MDQ6VXNlcjEzMDc2NQ==',
    avatar_url: 'https://avatars3.githubusercontent.com/u/130765?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/liadmagen',
    html_url: 'https://github.com/liadmagen',
    followers_url: 'https://api.github.com/users/liadmagen/followers',
    following_url:
      'https://api.github.com/users/liadmagen/following{/other_user}',
    gists_url: 'https://api.github.com/users/liadmagen/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/liadmagen/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/liadmagen/subscriptions',
    organizations_url: 'https://api.github.com/users/liadmagen/orgs',
    repos_url: 'https://api.github.com/users/liadmagen/repos',
    events_url: 'https://api.github.com/users/liadmagen/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/liadmagen/received_events',
    type: 'User',
    site_admin: false,
    name: 'Liad',
    company: null,
    blog: 'https://keep-current.github.io',
    location: 'Vienna, Austria',
    email: null,
    hireable: null,
    bio:
      "I'm a Machine Learning engineer, working with Natural Language Processing and optimization algorithms.",
    public_repos: 31,
    public_gists: 0,
    followers: 28,
    following: 24,
    created_at: '2009-09-24T10:07:16Z',
    updated_at: '2020-05-20T14:12:35Z'
  },
  {
    login: 'domainio',
    id: 20903560,
    node_id: 'MDQ6VXNlcjIwOTAzNTYw',
    avatar_url: 'https://avatars0.githubusercontent.com/u/20903560?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/domainio',
    html_url: 'https://github.com/domainio',
    followers_url: 'https://api.github.com/users/domainio/followers',
    following_url:
      'https://api.github.com/users/domainio/following{/other_user}',
    gists_url: 'https://api.github.com/users/domainio/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/domainio/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/domainio/subscriptions',
    organizations_url: 'https://api.github.com/users/domainio/orgs',
    repos_url: 'https://api.github.com/users/domainio/repos',
    events_url: 'https://api.github.com/users/domainio/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/domainio/received_events',
    type: 'User',
    site_admin: false,
    name: 'Erez Zohar',
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio:
      'fullstack front-back-end software engineer,\r\npassion for experience new technologies,\r\nfollow by innovation and creativity',
    public_repos: 22,
    public_gists: 1,
    followers: 2,
    following: 0,
    created_at: '2016-08-08T10:38:16Z',
    updated_at: '2020-05-04T13:44:19Z'
  },
  {
    login: 'johnpapa',
    id: 1202528,
    node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/1202528?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/johnpapa',
    html_url: 'https://github.com/johnpapa',
    followers_url: 'https://api.github.com/users/johnpapa/followers',
    following_url:
      'https://api.github.com/users/johnpapa/following{/other_user}',
    gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/johnpapa/subscriptions',
    organizations_url: 'https://api.github.com/users/johnpapa/orgs',
    repos_url: 'https://api.github.com/users/johnpapa/repos',
    events_url: 'https://api.github.com/users/johnpapa/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/johnpapa/received_events',
    type: 'User',
    site_admin: false,
    name: 'John Papa',
    company: 'JohnPapa.net, LLC',
    blog: 'http://johnpapa.net',
    location: 'Orlando, FL',
    email: null,
    hireable: null,
    bio: 'http://johnpapa.me/',
    public_repos: 109,
    public_gists: 52,
    followers: 13137,
    following: 0,
    created_at: '2011-11-17T17:05:03Z',
    updated_at: '2020-05-19T18:54:40Z'
  },
  {
    login: 'mhevery',
    id: 111951,
    node_id: 'MDQ6VXNlcjExMTk1MQ==',
    avatar_url: 'https://avatars0.githubusercontent.com/u/111951?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mhevery',
    html_url: 'https://github.com/mhevery',
    followers_url: 'https://api.github.com/users/mhevery/followers',
    following_url:
      'https://api.github.com/users/mhevery/following{/other_user}',
    gists_url: 'https://api.github.com/users/mhevery/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/mhevery/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mhevery/subscriptions',
    organizations_url: 'https://api.github.com/users/mhevery/orgs',
    repos_url: 'https://api.github.com/users/mhevery/repos',
    events_url: 'https://api.github.com/users/mhevery/events{/privacy}',
    received_events_url: 'https://api.github.com/users/mhevery/received_events',
    type: 'User',
    site_admin: false,
    name: 'Miško Hevery',
    company: 'Google',
    blog: 'http://misko.hevery.com',
    location: null,
    email: null,
    hireable: null,
    bio: 'Father of Angular',
    public_repos: 56,
    public_gists: 24,
    followers: 4099,
    following: 2,
    created_at: '2009-08-04T21:42:41Z',
    updated_at: '2020-05-13T23:36:45Z'
  },
  {
    login: 'danrevah',
    id: 7808742,
    node_id: 'MDQ6VXNlcjc4MDg3NDI=',
    avatar_url: 'https://avatars1.githubusercontent.com/u/7808742?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/danrevah',
    html_url: 'https://github.com/danrevah',
    followers_url: 'https://api.github.com/users/danrevah/followers',
    following_url:
      'https://api.github.com/users/danrevah/following{/other_user}',
    gists_url: 'https://api.github.com/users/danrevah/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/danrevah/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/danrevah/subscriptions',
    organizations_url: 'https://api.github.com/users/danrevah/orgs',
    repos_url: 'https://api.github.com/users/danrevah/repos',
    events_url: 'https://api.github.com/users/danrevah/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/danrevah/received_events',
    type: 'User',
    site_admin: false,
    name: 'Dan',
    company: '@google',
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio: null,
    public_repos: 29,
    public_gists: 1,
    followers: 60,
    following: 33,
    created_at: '2014-06-05T19:03:22Z',
    updated_at: '2020-05-12T17:46:26Z'
  }
];
