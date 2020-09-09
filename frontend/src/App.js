import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  updateState = (email, password) => {
    this.setState({
      email: email,
      password: password
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={ () => <Login update={this.updateState}/> } />
            <Route exact path="/profile" component={ () => <Profile profileInfo={ this.state }/>} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
