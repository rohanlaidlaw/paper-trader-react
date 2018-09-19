import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddCard from '../containers/AddCard';
import CardList from './CardList';


const App = () => (
  <MuiThemeProvider>
    <div>
      <AddCard />
      <CardList />
    </div>
  </MuiThemeProvider>
);

export default App;
