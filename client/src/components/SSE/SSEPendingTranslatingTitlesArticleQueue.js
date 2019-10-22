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
    
class SSEPendingTranslatingTitlesArticleQueue extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            modal: false,
            toasterPos: 'top-right',
            toasterType: 'info',
            selectedArticleForAssignment: '',
            swalOptionJunior: {
                title: "Assign Article",
                text: "Are you sure you want to assign this article to your assigned quality appraisals list!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, assign it!",
                closeOnConfirm: true
            },
            swalOptionSenior: {
                title: "Assign Article",
                text: "Are you sure you want to assign this article to your assigned quality appraisals list!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, assign it!",
                closeOnConfirm: true
            }
        };

    }

    componentDidMount() {
        this.props.listSSEPendingQualityAppraisalsArticlesQueue();
    }

    toggleModal = (articleId) => {
        console.log(articleId);
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleModal1 = function(articleId) {
        console.log(articleId);
        this.setState({
            modal: !this.state.modal
        });
    }

    selectArticleForAssignment = () =>  {
        this.setState({
            selectedArticleForAssignment: ''
        })
    }

    renderPriority(priority) {
        
        switch (priority) {
            case 'LOW':
                return <td className="text-center"><span className="badge badge-success">{ priority }</span></td>
            case 'MODERATE':
                return <td className="text-center"><span className="badge badge-warning">{ priority }</span></td>
            case 'HIGH':
                return <td className="text-center"><span className="badge badge-danger">{ priority }</span></td>
            default:
                return <td className="text-center"><span className="badge badge-success">LOW</span></td>
        }

    }

    swalCallback(isConfirm, swal) {
        swal("Assigned!", "The article has been assigned to your pending Quality Appraisals list.", "success");
    }

    swalCallbackAssignJunior(isConfirm, articleId) {
        if(isConfirm)
            this.props.assignSSEPendingQualityAppraisalsArticlesJuniorAppraiser(articleId);
    }

    swalCallbackAssignSenior(isConfirm, articleId) {
        if(isConfirm)
            this.props.assignSSEPendingQualityAppraisalsArticlesSeniorAppraiser(articleId);
    }

    renderArticles() {
        
        if(this.props.pendingArticles != null ) {
            const rows = Object.entries(this.props.pendingArticles).map(article => {
                return (
                    <tr key={article[1]._id}>
                        {/*
                        <td className="text-center">
                            <span className="badge badge-success">{ article[1].priority }</span>
                        </td>
                        */}
                        { this.renderPriority(article[1].priority) }
                        <td>
                            { article[1].articleSource }
                        </td>
                        <td>
                            { article[1].harvestDate }
                        </td>
                        <td>
                            {article[1]._qualityAppraisalsJuniorEmail || <Link to="/sse/assignedqualityappraisalsarticlequeue"><Swal options={this.state.swalOptionJunior} callback={ (isConfirm) => this.swalCallbackAssignJunior(isConfirm, article[1]._id)}  className="mr-1 badge badge-primary">Assign</Swal></Link>}
                            
                        </td>
                        <td>
                            {article[1]._qualityAppraisalsSeniorEmail || <Link to="/sse/assignedqualityappraisalsarticlequeue" ><Swal options={this.state.swalOptionSenior} callback={ (isConfirm) => this.swalCallbackAssignSenior(isConfirm, article[1]._id)} className="mr-1 badge badge-primary">Assign</Swal></Link>}
                        </td>
                        {/*<td><a className="mr-1 badge badge-primary" href="">{ article[1]._id }</a></td>*/}
                        <td>{ article[1]._id }</td>
                        <td>{ article[1].title }</td>
                        <td>{ article[1].author }</td>
                        <td>{ article[1].language }</td>
                        {/*}
                        <td className="text-right">
                            <Swal options={this.state.swalOption} callback={this.swalCallback} className="btn btn-primary">AssignJ</Swal>
                        </td> */}
                    {/*         
                        <td className="text-right">
                            <button type="button" className="btn btn-sm btn-secondary">
                                <em className="fas fa-pencil-alt"></em>
                            </button>
                            <button type="button" className="btn btn-sm btn-danger">
                                <em className="fas fa-trash-alt"></em>
                            </button>
                            <button type="button" className="btn btn-sm btn-success">
                                <em className="fa fa-check"></em>
                            </button>
                        </td>
                    */}    
                    </tr>
                )
            });
        // <a className="mr-1 badge badge-success" href="">{ article[1].language }</a>
            return (
                <Datatable options={dtOptions}>
                    <table className="table table-striped my-4 w-100">
                        <thead>
                            <tr>
                                <th data-priority="1">Priority</th>
                                <th>Source</th>
                                <th>Harvest Date</th>
                                <th>Junior Appraiser</th>
                                <th>Senior Appraiser</th>
                                <th>Article Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Language</th>
                                {/*<th style={{width:"10px"}} className="text-right" data-priority="2">Assign</th>*/}
                                {/* <th style={{width:"130px"}} className="text-right" data-priority="2">Assign</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            { rows }
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
                        <div>Quality Apprasials Articles
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
                        { this.renderArticles() }
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

function mapStateToProps({ ssePendingQualityAppraisalsArticleQueue }) {
    return { 
        errorMessage: ssePendingQualityAppraisalsArticleQueue.ssePendingQualityAppraisalsArticleErrorMessage,
        pendingArticles: ssePendingQualityAppraisalsArticleQueue.ssePendingQualityAppraisalsArticles 
    }
}

export default connect(mapStateToProps, actions)(SSEPendingTranslatingTitlesArticleQueue);

