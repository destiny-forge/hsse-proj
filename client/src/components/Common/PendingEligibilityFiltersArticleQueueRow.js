/**
 * @name PendingEligibilityFiltersArticleQueueRow.js
 * @description Component for the row in Pending Eligibility Filters Queue
 */

import React, { Component } from 'react';
import moment from "moment";
import Swal from '../Elements/Swal';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import * as actions from '../../actions';

class PendingEligibilityFiltersArticleQueueRow extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false,
      toasterPos: 'top-right',
      toasterType: 'info',
      selectedArticleForAssignment: '',
      swalOptionJunior: {
        title: "Assign Article",
        text: "Are you sure you want to assign this article to your assigned eligibility & filter list!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, assign it!",
        closeOnConfirm: true
      },
      swalOptionSenior: {
        title: "Assign Article",
        text: "Are you sure you want to assign this article to your assigned eligibility & filter list!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, assign it!",
        closeOnConfirm: true
      },
      pendingArticles: [],
      selectedIds: []
    };

  }

  // TODO clean this up
  swalCallbackAssignJunior(isConfirm, articleId, history) {
    if (isConfirm)
      this.props.assignHSEPendingEligibilityFiltersArticlesJuniorFilter(articleId, history);
    window.location.reload()
  }

  // TODO clean this up
  swalCallbackAssignSenior(isConfirm, articleId, history) {
    if (isConfirm)
      this.props.assignHSEPendingEligibilityFiltersArticlesSeniorFilter(articleId, history);
    window.location.reload()
  }

  // TODO clean this up
  swalCallbackAssignAllJunior(isConfirm, history) {
    if (isConfirm)
      this.props.assignAllHSEPendingEligibilityFiltersArticlesJuniorFilter(this.state.selectedIds, history);
    window.location.reload()
  }
  // TODO clean this up
  swalCallbackAssignAllSenior(isConfirm, history) {
    if (isConfirm)
      this.props.assignAllHSEPendingEligibilityFiltersArticlesSeniorFilter(this.state.selectedIds, history);
    window.location.reload()
  }

  render() {
    const {
      currentUser,
      article,
      history
    } = this.props;

    const {
      swalOptionJunior,
      swalOptionSenior
    } = this.state;

    // TODO: When server is done to get roles, extract this to service.
    const isJuniorFilter = currentUser.user.roles.includes('juniorfilterer');
    const isSeniorFilter = currentUser.user.roles.includes('seniorfilterer');

    return (
      <tr key={article._id}>
        <td></td>
        <td>LOW</td>
        <td key={Math.random()}>{article.articleSource}</td>
        <td key={Math.random()}>{moment(article.harvestDate).format("DD-MM-YYYY")}</td>
        <td key={Math.random()}>
        {
          article._eligibilityFiltersJuniorEmail
          || <Button size="xs"
                color="primary"
                className="btn-oval"
                disabled={!isJuniorFilter || isSeniorFilter}>
            <Swal disabled={!isJuniorFilter || isSeniorFilter}
               options={swalOptionJunior}
               callback={(isConfirm) => this.swalCallbackAssignJunior(isConfirm, article._id, history)}>
                 Assign
            </Swal>
            </Button>
          }
        </td>
        <td key={Math.random()}>
          {
            article._eligibilityFiltersSeniorEmail
            ||
            <Button size="xs" color="primary"
              className="btn-oval"
              disabled={!isSeniorFilter}>
                <Swal
                disabled={!isSeniorFilter}
                options={swalOptionSenior}
                callback={(isConfirm) => this.swalCallbackAssignSenior(isConfirm, article._id, history)} >Assign
                </Swal>
            </Button>
          }
        </td>
        <td>{article.articleIdShort}</td>
        <td>{article.title}</td>
        <td>{article.authors}</td>
        <td>{article.language}</td>
      </tr>
    );
  }
}

function mapStateToProps({ auth }) {
  return { currentUser: auth.currentUser, errorState: auth.errorState }
}

export default connect(mapStateToProps, actions)(PendingEligibilityFiltersArticleQueueRow);
