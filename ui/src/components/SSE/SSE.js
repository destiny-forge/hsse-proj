import React, { Component } from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';

class SSE extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="item">
          <div class="p-4">
            <div class="row mt-3">
              <div class="col-sm-7">
                <div class="media">
                  <div class="media-body mx-3 mb-2">
                    <h4>SOCIAL SYSTEMS EVIDENCE</h4>
                    <p>
                      The world's most comprehensive, free access point for evidence about strengthening 20 government 
                      sectors and program areas, and achieving the Sustainable Development Goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="white bg b-b px-3">
          <div class="row">
            <div class="col-sm-12 order-sm-1">
              <div class="py-4 clearfix nav-active-theme">
                <ul class="nav nav-pills nav-sm">
                  <li class="nav-item">
                    <a class="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">Pending</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Assigned</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="tab" data-target="#tab_3">Complicated</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="padding">
          <div class="row">
            <div class="col-sm-8 col-lg-9">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab_1">
                  First tab
                </div>
              
                <div class="tab-pane fade" id="tab_2">
                  Second tab
                </div>
                
                <div class="tab-pane fade" id="tab_3">
                  Third tab
                </div>
              </div>
            </div>
                
            <div class="col-sm-4 col-lg-3">                  
              <div class="box">
                <div class="box-header">
                  <h2>Actions</h2>
                </div>
                <div class="box-divider"></div>
                <ul class="list">
                  <li class="list-item">
                    <div class="list-body">
                      <a href="#" class="text-primary">Eligibility &amp; Filters</a>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="list-body">
                      <a href="#" class="text-primary">Quality Appraisals</a>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="list-body">
                      <a href="#" class="text-primary">Linking Studies</a>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="list-body">
                      <a href="#" class="text-primary">Presentation Details</a>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="list-body">
                      <a href="#" class="text-primary">Translating Titles</a>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="list-body">
                      <a href="#" class="text-primary">Tracking &amp; Prioritizing</a>
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

export default withRouter(withAuth(SSE));