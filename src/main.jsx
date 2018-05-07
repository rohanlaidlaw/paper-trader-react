import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardButton from './components/component.jsx';

const App = () => (
    <MuiThemeProvider>
        <CardButton />
    </MuiThemeProvider>
);



ReactDOM.render(
    <App />,
    document.getElementById('app')
);