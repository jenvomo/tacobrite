import React from 'react';
import LoginContainer from './session_form/login_form_container';
import SignupContainer from './session_form/signup_form_conatiner';
import EventIndexContainer from './event/event_index_container';
import NavigationContainer from './navigation/nav_container';
import ScrollToTop from './navigation/scroll_to_top';
import NewEventContainer from './event/new_event_form_container';
import EditEventContainer from './event/edit_event_form_container';
import EventShowContainer from './event/event_show_container';
import MyEventsContainer from './event/my_events_container';
import MyTicketsContainer from './ticket/my_tickets_container';
import SearchContainer from './search/search_container';
import FooterComponent from './footer/footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedToEventsRoute, ProtectedToLoginRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Route path='/' component={NavigationContainer} />
    </header>
    <div className="app">
      <Switch>
        <AuthRoute path='/login' component={LoginContainer} />
        <AuthRoute path='/signup' component={SignupContainer} />
        <ScrollToTop>
          <ProtectedToEventsRoute path='/myevents' component={MyEventsContainer} />
          <ProtectedToLoginRoute exact path='/event/new' component={NewEventContainer} formType='new' />
          <ProtectedToLoginRoute path='/event/:eventId/edit' component={EditEventContainer} formType='edit' />
          <Route exact path='/event/:eventId' component={EventShowContainer} />
          <Route path='/events/search' component={SearchContainer} />
          <Route path='/events' component={EventIndexContainer} />
          <Route path='/mytickets' component={MyTicketsContainer} />
          <Redirect to='/events' />
        </ScrollToTop>
      </Switch>
    </div>
    <footer>
      <Route path='/' component={FooterComponent} />
    </footer>
  </div>
);

export default App;
