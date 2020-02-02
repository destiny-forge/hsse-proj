import React from 'react';

const Sidebar = () =>
  <div className="col-sm-4 col-lg-3">
    <div className="box">
      <div className="box-header">
        <h2>Actions</h2>
      </div>
      <div className="box-divider"></div>
      <ul className="list">
        <li className="list-item">
          <div className="list-body">
            <a href="#!" className="text-primary">Eligibility &amp; Filters</a>
          </div>
        </li>
        <li className="list-item">
          <div className="list-body">
            <a href="#!" className="text-primary">Quality Appraisals</a>
          </div>
        </li>
        <li className="list-item">
          <div className="list-body">
            <a href="#!" className="text-primary">Linking Studies</a>
          </div>
        </li>
        <li className="list-item">
          <div className="list-body">
            <a href="#!" className="text-primary">Presentation Details</a>
          </div>
        </li>
        <li className="list-item">
          <div className="list-body">
            <a href="#!" className="text-primary">Translating Titles</a>
          </div>
        </li>
        <li className="list-item">
          <div className="list-body">
            <a href="#!" className="text-primary">Tracking &amp; Prioritizing</a>
          </div>
        </li>
      </ul>
    </div>
  </div>

export default Sidebar;