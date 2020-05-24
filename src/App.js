import React from 'react';
import Header from './components/Header';
import Layout from './pages/Layout';
import { AuthContext } from './context/Auth';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/App.css';

function App() {
  return (
    <>
      <AuthContext.Provider value={false}>
        <Router>
          <Header />
          <Layout />
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
