import React, { Component } from 'react';

import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        console.log('constructor');
    }

    componentDidMount() {
        console.log('/list/count=3');
        fetch('/list').then(res => res.json()).then(res => this.setState({ list: res }))
    }

    render() {
        console.log('state', this.state);

        const { list } = this.state;

        return (
            <div>
                <List list={list}  />
            </div>
        );
    }
}

export default App;
