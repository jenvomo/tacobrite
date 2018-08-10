import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { logout } from './actions/session_actions';
import { fetchEvents, fetchEvent } from './actions/event_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  window.fetchEvents = fetchEvents;
  window.fetchEvent = fetchEvent;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
