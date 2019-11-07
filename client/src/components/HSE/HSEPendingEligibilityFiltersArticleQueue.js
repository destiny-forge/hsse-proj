/**
 * @name HSEPendingEligibilityFiltersArticleQueue.js
 * @description This component renders articles that are pending (have not been assigned yet)
 */

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
import PendingEligibilityFiltersArticleQueueRow from '../Common/PendingEligibilityFiltersArticleQueueRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as actions from '../../actions';
import Datatable from '../Tables/Datatable';

const dtOptions2 = {
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
  },
  columnDefs: [{
    orderable: false,
    className: 'select-checkbox',
    targets: 0
  }],
  dom: 'Bfrtipl',

  select: {
    style: 'multi',
    selector: 'td:first-child'
  },
  order: [[1, 'asc']]
};

class HSEPendingEligibilityFiltersArticleQueue extends Component {
  constructor(props) {
    super(props);

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
      instance: null
    };
  }

  componentDidMount() {
    this.props.listHSEPendingEligibilityFiltersArticlesQueue().then(res => {
      this.setState({ pendingArticles: res});
    });
  }

  toggleModal = (articleId) => {
    this.setState({
      modal: !this.state.modal
    });
  }

  swalCallback(isConfirm, swal) {
    swal("Assigned!", "The article has been assigned to your pending Eligibility & Filter list.", "success");
  }

  swalCallbackAssignJunior(isConfirm, articleId) {
    if(isConfirm) {
      const result = this.props.assignHSEPendingEligibilityFiltersArticlesJuniorFilter(articleId, this.props.history);
      console.log(result);
    }
  }

  swalCallbackAssignSenior(isConfirm, articleId) {
    if(isConfirm) {
      const result = this.props.assignHSEPendingEligibilityFiltersArticlesSeniorFilter(articleId, this.props.history);
      console.log(result);
    }
  }

  notify = (message, type, position) => toast(message, {
    type,
    position
  });

  handleSelected = (tableElement) => {
    this.setState({ instance : tableElement })
  }

  renderArticles() {
    if(this.state.pendingArticles && this.state.pendingArticles.length > 0 ) {
      let queueRows = this.state.pendingArticles.map(article => {
        return (
          <PendingEligibilityFiltersArticleQueueRow
            key={article._id}
            article={article}
            history={this.props.history} />
        );
      });

      return (
        <div>
          <Datatable options={dtOptions2} onSelected={this.handleSelected} >
            <table className="table table-striped my-4 w-100">
              <thead>
                <tr>
                  <th data-priority="1">Select</th>
                  <th>Priority</th>
                  <th>Source</th>
                  <th>Harvest Date</th>
                  <th>Junior Filterer</th>
                  <th>Senior Filterer</th>
                  <th>Article Id</th>
                  <th>Title</th>
                  <th>Author(s)</th>
                  <th>Language</th>
                </tr>
              </thead>
              <tbody>
                { testRows }
              </tbody>
            </table>
          </Datatable>
          <ToastContainer />
        </div>
      );
    }
  };

  render() {
    return (
      <ContentWrapper>
        <div className="content-heading">
          <div>Assessing Eligibility and Assigning Filters Articles
            <small>Health Systems Evidence - Main Queue</small>
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
            { this.renderArticles() }
          </CardBody>
        </Card>
        </ContentWrapper>
        );
  }
}

function mapStateToProps({ hsePendingEligibilityFiltersArticleQueue }) {
  return {
    errorMessage: hsePendingEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticleErrorMessage,
    pendingArticles: hsePendingEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticles
  }
}

export default connect(mapStateToProps, actions)(HSEPendingEligibilityFiltersArticleQueue);
