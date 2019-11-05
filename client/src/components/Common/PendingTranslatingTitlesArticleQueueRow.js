import React, { Component } from 'react';
import moment from "moment";
import Swal from '../Elements/Swal';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PendingTranslatingTitlesArticleQueueRow extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false,
      toasterPos: 'top-right',
      toasterType: 'info',
      selectedArticleForAssignment: '',
      swalOptionJunior: {
        title: "Assign Article",
        text: "Are you sure you want to assign this article to your assigned translating titles list!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, assign it!",
        closeOnConfirm: true
      },
      swalOptionSenior: {
        title: "Assign Article",
        text: "Are you sure you want to assign this article to your assigned translating titles list!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, assign it!",
        closeOnConfirm: true
      },
      pendingArticles: [],
    };

  }

  swalCallbackAssignJunior(isConfirm, articleId, history) {
    if(isConfirm)
      this.props.assignHSEPendingTranslatingTitlesArticlesJuniorAppraiser(articleId, history);
  }

  swalCallbackAssignSenior(isConfirm, articleId, history) {
    if(isConfirm)
      this.props.assignHSEPendingQTranslatingTitlesArticlesSeniorAppraiser(articleId, history);
  }

  render() {
    const { article, history } = this.props;
    return (
      <tr key={article._id}>
        <td>LOW</td>{
        <td key={Math.random()}>
          { article.articleSource }
        </td>
        <td key={Math.random()}>
          { moment(article.harvestDate).format("DD-MM-YYYY") }
        </td>
        <td key={Math.random()}>
          {article._translatingTitlesJuniorEmail || <a><Swal options={this.state.swalOptionJunior} callback={ (isConfirm) => this.swalCallbackAssignJunior(isConfirm, article._id, history)}  className="mr-1 badge badge-primary">Assign</Swal></a>}
        </td>
        <td key={Math.random()}>
          {article._translatingTitlesSeniorEmail || <a ><Swal options={this.state.swalOptionSenior} callback={ (isConfirm) => this.swalCallbackAssignSenior(isConfirm, article._id, history)} className="mr-1 badge badge-primary">Assign</Swal></a>}
        </td>
        <td key={Math.random()}>{ article._id }</td>
        <td key={Math.random()}>{ article.title }</td>
        <td key={Math.random()}>{ article.authors }</td>
        <td key={Math.random()}>{ article.language }</td>
      </tr>
    );
  }
}


export default connect(null, actions)(PendingTranslatingTitlesArticleQueueRow); 