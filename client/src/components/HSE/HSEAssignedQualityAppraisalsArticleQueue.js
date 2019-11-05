import React, { Component } from 'react';
import moment from "moment";
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import Datatable from '../Tables/Datatable';
import Priority from '../Common/Priority';

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

class HSEAssignedQualityAppraisalsArticleQueue extends Component {

  componentDidMount() {
    // TODO: Check if this method actually works?
    this.props.getCurrentUser();
    this.props.listHSEAssignedQualityAppraisalsArticlesQueue();
  }

  renderArticles() {

    if (this.props.assignedArticles !== undefined) {
      const rows = Object.entries(this.props.assignedArticles).map(article => {
        return (
          <tr key={article[1]._id}>
            <Priority priority={article[1].priority} />
            <td>
              {article[1].author}
            </td>
            <td>
              {moment(article[1].harvestDate).format("DD-MM-YYYY")}
            </td>
            <td>
              {((article[1]._qualityAppraisalsJuniorEmail) && (this.props.currentUser.user.email === article[1]._qualityAppraisalsSeniorEmail)) ? article[1]._qualityAppraisalsJuniorEmail : ''} {((article[1]._qualityAppraisalsSeniorEmail) && (this.props.currentUser.user.email === article[1]._qualityAppraisalsJuniorEmail)) ? article[1]._qualityAppraisalsSeniorEmail : ''}
            </td>
            <td><a className="mr-1 badge badge-primary" href="">{article[1]._id}</a></td>
            <td>{article[1].title}</td>
            <td>{article[1].author}</td>
            <td>{article[1].language}</td>

            <td>{article[1].qualityAppraisalsResolve ? <Link className="mr-1 badge badge-danger" to={{ pathname: "/hse/assignedqualityappraisalsarticleresolution/" + article[1]._id }}>Resolve</Link> : "Incomplete"}</td>
            <td className="text-right">
              <Link to={{ pathname: "/hse/assignedqualityappraisalsarticleinput/" + article[1]._id }} className="btn btn-block btn-secondary"><em className="fas fa-pencil-alt"></em></Link>
            </td>
          </tr>
        )
      });
      return (
        <Datatable options={dtOptions}>
          <table className="table table-striped my-4 w-100">
            <thead>
              <tr>
                <th data-priority="1">Priority</th>
                <th>Source</th>
                <th>Harvest Date</th>
                <th>Other Appraiser</th>
                <th>Article Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>Language</th>
                <th>Status</th>
                <th style={{ width: "10px" }} className="text-right" data-priority="2">Edit</th>
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
          <div>Appraisaing Quality Articles
            <small>Health Systems Evidence - Assigned Queue</small>
          </div>
        </div>
        <Card className="card-default">
          <CardHeader>List of pending Articles</CardHeader>
          <CardBody>
            {this.renderArticles()}
          </CardBody>
        </Card>
      </ContentWrapper>
    );
  }
}

function mapStateToProps({ hseAssignedQualityAppraisalsArticleQueue, auth }) {
  return {
    currentUser: auth.currentUser,
    errorMessage: hseAssignedQualityAppraisalsArticleQueue.hseAssignedQualityAppraisalsArticleErrorMessage,
    assignedArticles: hseAssignedQualityAppraisalsArticleQueue.hseAssignedQualityAppraisalsArticles
  }
}

export default connect(mapStateToProps, actions)(HSEAssignedQualityAppraisalsArticleQueue);

