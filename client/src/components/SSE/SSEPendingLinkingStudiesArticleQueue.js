import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Swal from '../Elements/Swal';

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

class SSEPendingLinkingStudiesArticleQueue extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false,
      toasterPos: 'top-right',
      toasterType: 'info',
      selectedArticleForAssignment: '',
      swalOptionJunior: {
        title: "Assign Article",
        text: "Are you sure you want to assign this article to your assigned linking studies list!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, assign it!",
        closeOnConfirm: true
      },
      swalOptionSenior: {
        title: "Assign Article",
        text: "Are you sure you want to assign this article to your assigned linking studies list!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, assign it!",
        closeOnConfirm: true
      }
    };

  }

  componentDidMount() {
    this.props.listSSEPendingLinkingStudiesArticlesQueue();
  }

  toggleModal = (articleId) => {
    console.log(articleId);
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleModal1 = function (articleId) {
    console.log(articleId);
    this.setState({
      modal: !this.state.modal
    });
  }

  selectArticleForAssignment = () => {
    this.setState({
      selectedArticleForAssignment: ''
    })
  }

  swalCallback(isConfirm, swal) {
    swal("Assigned!", "The article has been assigned to your pending Linking Studies list.", "success");
  }

  swalCallbackAssignJunior(isConfirm, articleId) {
    if (isConfirm)
      this.props.assignSSEPendingLinkingStudiesArticlesJuniorLinker(articleId);
  }

  swalCallbackAssignSenior(isConfirm, articleId) {
    if (isConfirm)
      this.props.assignSSEPendingQLinkingStudiesArticlesSeniorLinker(articleId);
  }

  renderArticles() {
    console.log(this.props);
    if (this.props.pendingArticles != null) {
      const rows = Object.entries(this.props.pendingArticles).map(article => {
        return (
          <tr key={article[1]._id}>
            <Priority priority={article[1].priority} />
            <td>
              {article[1].articleSource}
            </td>
            <td>
              {article[1].harvestDate}
            </td>
            <td>
              {article[1]._linkingStudiesJuniorEmail || <Link to="/sse/assignedlinkingstudiesarticlequeue"><Swal options={this.state.swalOptionJunior} callback={(isConfirm) => this.swalCallbackAssignJunior(isConfirm, article[1]._id)} className="mr-1 badge badge-primary">Assign</Swal></Link>}

            </td>
            <td>{article[1]._id}</td>
            <td>{article[1].title}</td>
            <td>{article[1].author}</td>
            <td>{article[1].language}</td>
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
                <th>Junior Linker</th>
                <th>Article Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>Language</th>
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
          <div>Linking Studies Articles
                            <small>Social Systems Evidence - Main Queue</small>
          </div>
        </div>
        <Card className="card-default">
          <CardHeader>List of pending Articles</CardHeader>
          <CardBody>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Article Assignment Confirmation</ModalHeader>
              <ModalBody>
                Are you you want to assign this article to yourself?
                            </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>Yes</Button>{' '}
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
            {this.renderArticles()}
          </CardBody>
        </Card>
      </ContentWrapper>
    );
  }
}

function mapStateToProps({ ssePendingLinkingStudiesArticleQueue }) {
  return {
    errorMessage: ssePendingLinkingStudiesArticleQueue.ssePendingLinkingStudiesArticleErrorMessage,
    pendingArticles: ssePendingLinkingStudiesArticleQueue.ssePendingLinkingStudiesArticles
  }
}

export default connect(mapStateToProps, actions)(SSEPendingLinkingStudiesArticleQueue);

