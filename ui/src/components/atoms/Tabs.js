import React from 'react';

const Tabs = (props) => (
  <React.Fragment>
    <ul className="nav nav-pills nav-sm">
      <li className="nav-item">
        <a
          className="nav-link active"
          href="#!"
          data-toggle="tab"
          data-target="#tab_1"
          onClick={() => props.trackTab(props.type, ['New Article'])}
        >
          Pending
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#!"
          data-toggle="tab"
          data-target="#tab_2"
          onClick={() => props.trackTab(props.type, ['In Progress'])}
        >
          Assigned
        </a>
      </li>
      {props.stage !== 'eligibility' && (
        <li className="nav-item">
          <a
            className="nav-link"
            href="#!"
            data-toggle="tab"
            data-target="#tab_3"
            onClick={() => props.trackTab(props.type, ['Complicated'])}
          >
            Complicated
          </a>
        </li>
      )}
    </ul>
  </React.Fragment>
);

export default Tabs;
