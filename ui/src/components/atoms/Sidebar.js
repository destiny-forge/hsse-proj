import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = (props) => {
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
              <NavLink
                to={`/${props.type}/studies`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Linking Studies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/${props.type}/presentation`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Presentation Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/${props.type}/translating`}
                isActive={(match) => {
                  return match && match.isExact;
                }}
                className="nav-link"
              >
                Translating Titles
              </NavLink>
            </li>
            <li className="list-item">
              <div className="list-body">
                <NavLink
                  to={`/${props.type}/prioritizing`}
                  isActive={(match) => {
                    return match && match.isExact;
                  }}
                  className="text-primary"
                >
                  Tracking &amp; Prioritizing
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
