import React from 'react';
import { mount } from 'react-mounter';
import Layout from '../source/imports/ui/components/layout.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { useStrict } from 'mobx';

useStrict(true);

const AppbarStyles = getMuiTheme({
  palette: {
    accent1Color: '#3dbccd'
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={AppbarStyles}>
    <Layout />
  </MuiThemeProvider>
);

mount(App);
