import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MyAwesomeReactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Working!")
    }

    render() {
        return (
            <RaisedButton label="Add Stock" onClick={this.handleClick}>
            </RaisedButton>
        );
    }
}


export default MyAwesomeReactComponent;