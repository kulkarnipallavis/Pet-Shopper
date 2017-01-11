import React from 'react';
import {Link} from 'react-router';

export const Options = () => (
  <div className="options">
    <span> <Link to="/login">Login</Link></span>
    <span><Link to="/signup">Sign-Up</Link></span>
  </div>
)