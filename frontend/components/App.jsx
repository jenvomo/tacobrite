import React from 'react';
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_conatiner';
import EventIndexContainer from './event/event_index_container';
import NavigationContainer from './navigation/nav_container';
import NewEventContainer from './event/event_form_container';
import EventShowContainer from './event/event_show_container';
import MyEventsContainer from './event/my_events_conatainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Route path='/' component={NavigationContainer} />
    </header>
    <Switch>
      <AuthRoute path='/login' component={LoginContainer} />
      <AuthRoute path='/signup' component={SignupContainer} />
      <Route path='/myevents' component={MyEventsContainer} />
      <Route path='/event/new' component={NewEventContainer} />
      <Route path='/event/:eventId' component={EventShowContainer} />
      <Route path='/events' component={EventIndexContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
