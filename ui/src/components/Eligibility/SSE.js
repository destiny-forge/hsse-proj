import React, { Component } from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import withSection from './Section';
import Header from './Header';
import BatchesTable from './BatchesTable';
import Tabs from './Tabs';
import Sidebar from './Sidebar';

class SSE extends Component {

  render() {
    const { 
      trackTab,
      batches
    } = this.props;

    return (
      <React.Fragment>
        <Header type={'sse'} />
        <div className="white bg b-b px-3">
          <div className="row">
            <div className="col-sm-12 order-sm-1">
              <div className="py-4 clearfix nav-active-theme">
                <Tabs 
                  trackTab={trackTab} 
                  type={'sse'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="padding">
          <div className="row">
            <div className="col-sm-8 col-lg-9">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab_1">
                  <BatchesTable batches={batches} />
                </div>
              
                <div className="tab-pane fade" id="tab_2">
                  <BatchesTable batches={batches} />
                </div>
                
                <div className="tab-pane fade" id="tab_3">
                  Third tab (complicated)... this one is in progress
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withAuth(withSection(SSE)));