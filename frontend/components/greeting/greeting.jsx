import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  console.log(currentUser);
  const sessionLinks = () => (
    <nav>
      <Link to='/login'>LogIn</Link>
      &nbsp;or&nbsp;
      <Link to='/signup'>Sign Up</Link>
    </nav>
  );

  const personalGreeting = () => (
    <section>
      <p>{currentUser.firstName}</p>
      <button onClick={logout}>Log Out</button>
    </section>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
