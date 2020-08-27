import React, { Component } from 'react';
import { withRouter } from 'react-router';
import withAuth from './withAuth';
import withSection from './Section';
import BatchesTable from '../components/atoms/BatchesTable';
import Tabs from '../components/atoms/Tabs';
import Sidebar from '../components/atoms/Sidebar';
import Header from '../components/atoms/Header';

class TabView extends Component {
  render() {
    const { trackTab, batches, type, stage } = this.props;

    return (
      <React.Fragment>
        <Header type={type} />
        <div className="white bg b-b px-3">
          <div className="row">
            <div className="col-sm-12 order-sm-1">
              <div className="py-4 clearfix nav-active-theme">
                <Tabs trackTab={trackTab} type={type} />
              </div>
            </div>
          </div>
        </div>
        <div className="padding">
          <div className="row">
            <div className="col-sm-8 col-lg-9">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab_1">
                  <BatchesTable batches={batches} type={type} stage={stage} />
                </div>

                <div className="tab-pane fade" id="tab_2">
                  <BatchesTable batches={batches} type={type} stage={stage} />
                </div>

                <div className="tab-pane fade" id="tab_3">
                  Third tab (complicated)... this one is in progress
                </div>
              </div>
            </div>
            <Sidebar type={type} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withAuth(withSection(TabView)));