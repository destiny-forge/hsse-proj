import React, { Component } from 'react';
import ContentWrapper from '../../../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';

import * as actions from '../../../../actions';

import Datatable from '../../../Tables/Datatable';

const dtOptions = {
  'paging': true, // Table pagination
  'ordering': true, // Column ordering
  'info': true, // Bottom left status text
  responsive: true,
  // Text translation options
  // Note the required keywords between underscores (e.g _MENU_)
  oLanguage: {
    sSearch: '<em class="fa fa-search"></em>',
    sLengthMenu: '_MENU_ records per page',
    info: 'Showing page _PAGE_ of _PAGES_',
    zeroRecords: 'Nothing found - sorry',
    infoEmpty: 'No records available',
    infoFiltered: '(filtered from _MAX_ total records)',
    oPaginate: {
      sNext: '<em class="fa fa-caret-right"></em>',
      sPrevious: '<em class="fa fa-caret-left"></em>'
    }
  }
}

class BatchFileQueue extends Component {

  componentDidMount() {
    this.props.listHSEPendingEligibilityFiltersBatchfilesQueue();
  }

  renderBatchfiles() {
    if (this.props.pendingBatchfiles !== undefined) {
      const rows = Object.entries(this.props.pendingBatchfiles).map(batchfile => {

        return (
          <tr key={batchfile[1]._id}>
            <td>Test</td>
            <td>{batchfile[1]._id}</td>
            <td>{batchfile[1].harvestDate}</td>
            <td>{batchfile[1].uploadDate}</td>
            <td><a className="mr-1 badge badge-primary" href="">{batchfile[1].articleSource}</a></td>
            <td>{batchfile[1].fileName}</td>
            <td><a className="mr-1 badge badge-primary" href="https://s3.amazonaws.com/hsse-staging/{batchfile[1].batchfileUrl}">https://s3.amazonaws.com/hsse-staging/{batchfile[1].batchfileUrl}</a></td>
            <td>{batchfile[1].language}</td>
          </tr>
        )
      });

      return (
        <Datatable options={dtOptions}>
          <table className="table table-striped my-4 w-100">
            <thead>
              <tr>
                <th data-priority="1">Priority</th>
                <th>Batchfile Id</th>
                <th>Harvest Date</th>
                <th>Upload Date</th>
                <th>Article Source</th>
                <th>Filename</th>
                <th>Link</th>
                <th style={{ width: "130px" }} className="text-right" data-priority="2">Language</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </Datatable>
      );
    }
  };

  render() {

    return (
      <ContentWrapper>
        <div className="content-heading">
          <div>Assessing Eligibility and Assigning Filters Batchfiles
            <small>Health Systems Evidence - Main Queue</small>
          </div>
        </div>
        <Card className="card-default">
          <CardHeader>List of pending Batchfiles</CardHeader>
          <CardBody>
            {this.renderBatchfiles()}
          </CardBody>
        </Card>
      </ContentWrapper>
    );
  }
}

function mapStateToProps({ hsePendingEligibilityFiltersBatchfileQueue }) {
  return {
    errorMessage: hsePendingEligibilityFiltersBatchfileQueue.hsePendingEligibilityFiltersBatchfileErrorMessage,
    pendingBatchfiles: hsePendingEligibilityFiltersBatchfileQueue.hsePendingEligibilityFiltersBatchfiles
  }
}

export default connect(mapStateToProps, actions)(BatchFileQueue);