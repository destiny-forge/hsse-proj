import React, { Component } from 'react';
import withAuth from './withAuth';

class Dashboard extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HIIIIIIIII</h2>
          <p>Only logged in users should see this</p>
        </div>
      </div>
    );
  }
}

export default withAuth(Dashboard);