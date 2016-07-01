import React from 'react';
import { mount } from 'react-mounter';
import { Provider } from 'react-redux';
import Layout from '../source/imports/ui/components/layout.jsx';
import store from '../source/imports/ui/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const AppbarStyles = getMuiTheme({
  palette: {
    accent1Color: '#3dbccd'
  }
});

const App = (store) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={AppbarStyles}>
      <Layout />
    </MuiThemeProvider>
  </Provider>
);

FlowRouter.route('/', {
  action() {
    mount(App, store);
  }
});
