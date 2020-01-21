import React, { Component } from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import withSection from '../Articles/Section';

class HSE extends Component {
  render() {
    const { trackTab } = this.props;
    
    return (
      <React.Fragment>
        <div className="item hse">
          <div className="p-4">
            <div className="row mt-3">
              <div className="col-sm-7">
                <div className="media">
                  <div className="media-body mx-3 mb-2">
                    <h4>HEALTH SYSTEMS EVIDENCE</h4>
                    <p>
                      The world's most comprehensive, free access point for evidence to support policy makers, stakeholders and 
                      researchers interested in how to strengthen or reform health systems or in how to get cost-effective programs, 
                      services and drugs to those who need them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white bg b-b px-3">
          <div className="row">
            <div className="col-sm-12 order-sm-1">
              <div className="py-4 clearfix nav-active-theme">
                <ul className="nav nav-pills nav-sm">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#!"
                      data-toggle="tab"
                      data-target="#tab_1"
                      onClick={() => trackTab('hse', 'pending')}>Pending</a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#!"
                      data-toggle="tab"
                      data-target="#tab_2"
                      onClick={() => trackTab('hse', 'assigned')}>Assigned</a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#!"
                      data-toggle="tab"
                      data-target="#tab_3"
                      onClick={() => trackTab('hse', 'complicated')}>Complicated</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="padding">
          <div className="row">
            <div className="col-sm-8 col-lg-9">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab_1">
                  First tab
                </div>

                <div className="tab-pane fade" id="tab_2">
                  Second tab
                </div>

                <div className="tab-pane fade" id="tab_3">
                  Third tab
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="box">
                <div className="box-header">
                  <h2>Actions</h2>
                </div>
                <div className="box-divider"></div>
                <ul className="list">
                  <li className="list-item">
                    <div className="list-body">
                      <a href="#" className="text-primary">Eligibility &amp; Filters</a>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-body">
                      <a href="#" className="text-primary">Quality Appraisals</a>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-body">
                      <a href="#" className="text-primary">Linking Studies</a>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-body">
                      <a href="#" className="text-primary">Presentation Details</a>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-body">
                      <a href="#" className="text-primary">Translating Titles</a>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-body">
                      <a href="#" className="text-primary">Tracking &amp; Prioritizing</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withAuth(withSection(HSE)));
