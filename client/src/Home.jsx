import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Debugging App</h2>
      <Link to="/code">
        <button className="btn-get-started">Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
