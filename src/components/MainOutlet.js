import React from 'react';
import '../assets/css/MainOutlet.css';
import Home from './Home';
import Users from './Users';
import Admin from '../pages/Admin';
import PrivateRoute from '../routes/PrivateRoute';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import UserManagePage from '../pages/UserManage';
import NavigationBar from './NavigationBar';

function MainOutlet() {
  return (
    <div className='outlet-wrapper'>
      <NavigationBar />
      <hr />
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route path='/users' component={Users} />
        <Route path='/user/:id' component={UserManagePage} />
        <PrivateRoute path='/admin' component={Admin} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default MainOutlet;
