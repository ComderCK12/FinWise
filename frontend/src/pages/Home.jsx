import React from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/DashBoard';
import '../styles/Home.css';

const Home = () => {
    console.log("Home page")
  return (
    <div>
      <div className='user-welcome'>Hello World from home page</div>
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Home;
