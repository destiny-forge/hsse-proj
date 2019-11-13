import React, { Component } from 'react';
import moment from "moment";
import ContentWrapper from '../../../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Priority from '../../../Common/Priority';

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

class ArticleQueue extends Component {

  componentDidMount() {
    // TODO: Check if this method actually works?
    this.props.getCurrentUser();
    this.props.listHSEAssignedEligibilityFiltersArticlesQueue();
  }

  renderArticles() {

    if (this.props.assignedArticles !== undefined) {
      const rows = Object.entries(this.props.assignedArticles).map(article => {
        return (
          <tr key={article[1]._id}>
            <Priority 
              priority={article[1].priority} />
            <td>
              {article[1].articleSource}
            </td>
            <td>
              {moment(article[1].harvestDate).format("DD-MM-YYYY")}
            </td>
            <td>
              {((article[1]._eligibilityFiltersJuniorEmail) && (this.props.currentUser.user.email === article[1]._eligibilityFiltersSeniorEmail)) ? article[1]._eligibilityFiltersJuniorEmail : ''} {((article[1]._eligibilityFiltersSeniorEmail) && (this.props.currentUser.user.email === article[1]._eligibilityFiltersJuniorEmail)) ? article[1]._eligibilityFiltersSeniorEmail : ''}
            </td>
            <td>{article[1].articleIdShort}</td>
            <td>{article[1].title}</td>
            <td>{article[1].authors}</td>
            <td>{article[1].language}</td>
            <td>{article[1].eligibilityFiltersResolve ? <Link className="mr-1 badge badge-danger" to={{ pathname: "/hse/assignedeligibilityfiltersarticleresolution/" + article[1]._id }}>Resolve</Link> : "Incomplete"}</td>
            <td className="text-right">
              <Link to={{ pathname: "/hse/assignedeligibilityfiltersarticleinput/" + article[1]._id }} className="btn btn-block btn-secondary"><em className="fas fa-pencil-alt"></em></Link>
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
                <th>Other Filterer</th>
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
          <div>Assessing Eligibility and Assigning Filters Articles
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

function mapStateToProps({ hseAssignedEligibilityFiltersArticleQueue, auth }) {
  return {
    currentUser: auth.currentUser,
    errorMessage: hseAssignedEligibilityFiltersArticleQueue.hseAssignedEligibilityFiltersArticleErrorMessage,
    assignedArticles: hseAssignedEligibilityFiltersArticleQueue.hseAssignedEligibilityFiltersArticles
  }
}

export default connect(mapStateToProps, actions)(ArticleQueue);

