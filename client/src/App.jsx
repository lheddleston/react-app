import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log("HELLO");
    }

    render() {
        return (
            <div>
                <h1>This is a React App</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));