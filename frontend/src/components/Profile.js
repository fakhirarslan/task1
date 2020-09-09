import React, { Component } from 'react';

class Profile extends Component {

  render() {
    console.log(this.props.email);
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td></td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td></td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.props.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
