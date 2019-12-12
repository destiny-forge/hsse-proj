import React, { Component } from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';

class Assigned extends Component {
  render() {
    return (
      <div className="padding">
        <div className="box">
          <p>Henlo, fren... this is where we'll list assigned.</p>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Assigned));