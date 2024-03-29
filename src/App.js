import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <section>
                    <Router>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about/">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/users/">Users</Link>
                                    </li>
                                </ul>
                            </nav>

                            <Route path="/" exact component={Index} />
                            <Route path="/about/" component={About} />
                            <Route path="/users/" component={Users} />

                        </div>
                    </Router>
                </section>
            </div>
        );
    }
}

