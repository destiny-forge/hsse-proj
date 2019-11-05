import React, { Component } from 'react';
import moment from "moment";
import Swal from '../Elements/Swal';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import * as actions from '../../actions';

class SSEPendingEligibilityFiltersArticleQueueRow extends Component {

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

  swalCallbackAssignJunior(isConfirm, articleId, history) {
    if(isConfirm)
      this.props.assignSSEPendingEligibilityFiltersArticlesJuniorFilter(articleId, history);
    window.location.reload()
  }

  swalCallbackAssignSenior(isConfirm, articleId, history) {
    if(isConfirm)
      this.props.assignSSEPendingEligibilityFiltersArticlesSeniorFilter(articleId, history);
    window.location.reload()
  }

  swalCallbackAssignAllJunior(isConfirm, history) {
    if(isConfirm)
      this.props.assignAllSSEPendingEligibilityFiltersArticlesJuniorFilter(this.state.selectedIds, history);
    window.location.reload()
  }

  swalCallbackAssignAllSenior(isConfirm, history) {
    if(isConfirm)
      this.props.assignAllSSEPendingEligibilityFiltersArticlesSeniorFilter(this.state.selectedIds, history);
    window.location.reload()
  }

  render() { 
    console.log(this.props.currentUser.user.roles.includes('juniorfilter'));
    const { article, history } = this.props;
    return (
      <tr key={article._id}>
        <td></td>
        <td>LOW</td>
        <td key={Math.random()}>
          { article.articleSource }
        </td>
        <td key={Math.random()}>
          { moment(article.harvestDate).format("DD-MM-YYYY") }
        </td>
        <td key={Math.random()}>
          {article._eligibilityFiltersJuniorEmail || <Button size="xs" color="primary" className="btn-oval" disabled={!(this.props.currentUser.user.roles.includes('juniorfilterer') || this.props.currentUser.user.roles.includes('seniorfilterer'))}><Swal disabled={!(this.props.currentUser.user.roles.includes('juniorfilterer') || this.props.currentUser.user.roles.includes('seniorfilterer'))} options={this.state.swalOptionJunior} callback={ (isConfirm) => this.swalCallbackAssignJunior(isConfirm, article._id, history)} >Assign</Swal></Button>}
        </td>
        <td key={Math.random()}>
          {article._eligibilityFiltersSeniorEmail || <Button size="xs" color="primary" className="btn-oval" disabled={!this.props.currentUser.user.roles.includes('seniorfilterer')}><Swal disabled={!this.props.currentUser.user.roles.includes('seniorfilterer')} options={this.state.swalOptionSenior} callback={ (isConfirm) => this.swalCallbackAssignSenior(isConfirm, article._id, history)} >Assign</Swal></Button>}
        </td>
        <td key={Math.random()}>{ article.articleIdShort }</td>
        <td key={Math.random()}>{ article.title }</td>
        <td key={Math.random()}>{ article.authors }</td>
        <td key={Math.random()}>{ article.language }</td>
      </tr>
    );
  }
}

function mapStateToProps({ auth }) {
  return { currentUser: auth.currentUser, errorState: auth.errorState }
}

export default connect(mapStateToProps, actions)(SSEPendingEligibilityFiltersArticleQueueRow);