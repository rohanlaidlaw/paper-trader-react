/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardButton from './components/cardbutton';
import TitleBar from './components/appbar';

const App = () => (
  <MuiThemeProvider>
    <TitleBar />
    <CardButton />
  </MuiThemeProvider>
);


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
