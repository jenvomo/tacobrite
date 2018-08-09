import React from 'react';
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_conatiner';
import EventIndexContainer from './event/event_index_container';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <p>Eventliter</p>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path='/login' component={LoginContainer} />
      <AuthRoute path='/signup' component={SignupContainer} />
      <Route path='/events' component={EventIndexContainer} />
    </Switch>
  </div>
);

export default App;
