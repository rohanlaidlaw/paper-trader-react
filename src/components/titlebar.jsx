import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

function handleClick() {
  alert('blah');
}

const TitleBar = () => (
  <AppBar
    title="Paper Trader"
    onRightIconButtonClick={handleClick}
    iconElementRight={<IconButton><NavigationClose /></IconButton>}
  />
);

export default TitleBar;
