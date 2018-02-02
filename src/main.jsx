import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout.jsx';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Layout),
        document.getElementById('app')
    );
});
