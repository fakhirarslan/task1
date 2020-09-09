import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import history from './utils/history';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      logged: false
    };
  }

  updateState = (email, password) => {
    this.setState({
      email: email,
      password: password
    });
    console.log(this.state);
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar email={this.state.email}/>
          <Route exact path="/" component={() => <Login update={this.updateState} />} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={() => <Login update={this.updateState} />} />
            <Route exact path="/profile" component={Landing} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
