import React from 'react';
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_conatiner';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Eventlite</h1>
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
  </div>
);

export default App;
