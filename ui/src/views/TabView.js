import React, { Component } from 'react';
import { withRouter } from 'react-router';
import withAuth from './withAuth';
import withSection from './Section';
import BatchesTable from '../components/atoms/BatchesTable';
import Tabs from '../components/atoms/Tabs';
import Sidebar from '../components/atoms/Sidebar';
import Header from '../components/atoms/Header';
import BatchService from '../services/BatchService';

class TabView extends Component {
  constructor(props) {
    super(props);
    this.Batch = BatchService({ fetch: props.fetch });
    this.prioritize = this.prioritize.bind(this);
  }
  prioritize(batchId, priority) {
    this.Batch.prioritize({
      batchId,
      priority,
    })
      .then((res) => {
        const { type, status, reload } = this.props;
        reload(type, status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  filter(priority) {
    const { batches } = this.props;
    return batches.filter((batch) =>
      Array.isArray(batch.priority)
        ? batch.priority[0] === priority
        : batch.priority === priority
    );
  }

  render() {
    const { trackTab, batches, type, stage } = this.props;
    return (
      <React.Fragment>
        <Header type={type} />
        <div className="white bg b-b px-3">
          <div className="row">
            <div className="col-sm-12 order-sm-1">
              <div className="py-4 clearfix nav-active-theme">
                <Tabs trackTab={trackTab} type={type} stage={stage} />
              </div>
            </div>
          </div>
        </div>
        <div className="padding">
          <div className="row">
            <div className="col-sm-8 col-lg-9">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab_1">
                  <BatchesTable
                    batches={this.filter('high')}
                    title="High priority"
                    type={type}
                    stage={stage}
                    onPrioritize={this.prioritize}
                  />
                  <BatchesTable
                    batches={this.filter('low')}
                    title="Low priority"
                    type={type}
                    stage={stage}
                    onPrioritize={this.prioritize}
                  />
                </div>

                <div className="tab-pane fade" id="tab_2">
                  <BatchesTable
                    batches={this.filter('high')}
                    title="High priority"
                    type={type}
                    stage={stage}
                    onPrioritize={this.prioritize}
                  />
                  <BatchesTable
                    batches={this.filter('low')}
                    title="Low priority"
                    type={type}
                    stage={stage}
                    onPrioritize={this.prioritize}
                  />
                </div>

                <div className="tab-pane fade" id="tab_3">
                  <BatchesTable
                    batches={this.filter('high')}
                    title="High priority"
                    type={type}
                    stage={stage}
                    onPrioritize={this.prioritize}
                  />
                  <BatchesTable
                    batches={this.filter('low')}
                    title="Low priority"
                    type={type}
                    stage={stage}
                    onPrioritize={this.prioritize}
                  />
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
