import React, { Component } from 'react';
import withAuth from './withAuth';
import { withRouter } from 'react-router';

class Dashboard extends Component {
  render() {
    return (
      <div className="padding">
        <div className="box">
          <div className="box-header">
            <h3>Dashboard</h3>
            <p>We'll update the dashboard with actual good data.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Dashboard));