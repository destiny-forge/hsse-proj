import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const isActive = (node) => {
    console.log(props, node);
  };
  return (
    <div className="col-sm-4 col-lg-3">
      <div className="box">
        <div className="box-header">
          <h2>Actions</h2>
        </div>
        <div className="box-divider"></div>
        <div className="nav-active-border b-primary left box">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                to={`/${props.type}/eligibility`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Eligibility &amp; Filters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/${props.type}/appraisals`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Quality Appraisals
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                to={`/${props.type}/studies`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Linking Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/${props.type}/presentation`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Presentation Details
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/${props.type}/translating`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Translating Titles
              </Link>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                Tracking &amp; Prioritizing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
