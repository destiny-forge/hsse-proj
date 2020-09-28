import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="col-sm-4 col-lg-3">
      <div className="box">
        <div className="box-header">
          <h2>Actions</h2>
        </div>
        <div className="box-divider"></div>
        <ul className="list">
          <li className="list-item">
            <div className="list-body">
              <Link to={`/${props.type}/eligibility`} className="text-primary">
                Eligibility &amp; Filters
              </Link>
            </div>
          </li>
          <li className="list-item">
            <div className="list-body">
              <Link to={`/${props.type}/appraisals`} className="text-primary">
                Quality Appraisals
              </Link>
            </div>
          </li>
          <li className="list-item">
            <div className="list-body">
              <a href={`/${props.type}/studies`} className="text-primary">
                Linking Studies
              </a>
            </div>
          </li>
          <li className="list-item">
            <div className="list-body">
              <a href={`/${props.type}/presentation`} className="text-primary">
                Presentation Details
              </a>
            </div>
          </li>
          <li className="list-item">
            <div className="list-body">
              <a href="#!" className="text-primary">
                Translating Titles
              </a>
            </div>
          </li>
          <li className="list-item">
            <div className="list-body">
              <a href="#!" className="text-primary">
                Tracking &amp; Prioritizing
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
