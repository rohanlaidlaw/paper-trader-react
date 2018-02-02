import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render () {
        return (
            <div>
                Hello World ReactJS!!!
            </div>
        );
    }
}

var app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
