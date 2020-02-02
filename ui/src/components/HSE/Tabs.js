import React from 'react';

const Tabs = (props) =>
  <React.Fragment>
    <ul className="nav nav-pills nav-sm">
      <li className="nav-item">
        <a
          className="nav-link active"
          href="#!"
          data-toggle="tab"
          data-target="#tab_1"
          onClick={() => props.trackTab('hse', 'pending_assignment')}>Pending</a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#!"
          data-toggle="tab"
          data-target="#tab_2"
          onClick={() => props.trackTab('hse', 'assigned')}>Assigned</a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#!"
          data-toggle="tab"
          data-target="#tab_3"
          onClick={() => props.trackTab('hse', 'complicated')}>Complicated</a>
      </li>
    </ul>
  </React.Fragment>

export default Tabs;