import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Welcome to Beat the CSI!</h1>
      <Link to="/game">Start game</Link>
    </div>
  );
};
