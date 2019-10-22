import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

class SSEAssignedEligibilityFiltersArticleQueue extends Component {

    componentDidMount() {
        this.props.getCurrentUser();
        this.props.listSSEAssignedEligibilityFiltersArticlesQueue();
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

    renderArticles() {
        console.log(this.props.assignedArticles);
        if(this.props.assignedArticles !== undefined ) {
            const rows = Object.entries(this.props.assignedArticles).map(article => {
                return (
                    <tr key={article[1]._id}>
                        {/*
                        <td className="text-center">
                            <span className="badge badge-success">{ article[1].priority }</span>
                        </td>
                        */}
                        { this.renderPriority(article[1].priority) }
                        <td>
                            { article[1].author }
                        </td>
                        <td>
                            { article[1].harvestDate }
                        </td>
                        <td>
                            {/*<a className="mr-1 badge badge-primary" href="">Something</a>*/}
                            <Link to="" className="mr-1 badge badge-primary" >{ article[1]._eligibilityFilterJuniorEmail + ", " + article[1]._eligibilityFilterSeniorEmail }</Link>
                        </td>
                        <td><a className="mr-1 badge badge-primary" href="">{ article[1]._id }</a></td>
                        <td>{ article[1].title }</td>
                        <td>{ article[1].author }</td>
                        <td>{ article[1].language }</td>
                        {/*<td>{ article[1].eligibilityFilterResolve ? <a className="mr-1 badge badge-danger" href="">Resolve</a> : "Incomplete" }</td> */}
                        <td>{ article[1].eligibilityFilterResolve ? <Link className="mr-1 badge badge-danger" to={{ pathname: "/sse/assignedeligibilityfiltersarticleresolution/" + article[1]._id }}>Resolve</Link> : "Incomplete" }</td>
                        <td className="text-right">
                            
                            <Link to={{ pathname: "/sse/assignedeligibilityfiltersarticleinput/" + article[1]._id }} className="btn btn-block btn-secondary"><em className="fas fa-pencil-alt"></em></Link>
                            {/*<button type="button" className="btn btn-sm btn-secondary">
                                <em className="fas fa-pencil-alt"></em>
                            </button>*/}
                        </td>
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
                                <th>Other Filterer</th>
                                <th>Article Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Language</th>
                                <th>Status</th>
                                <th style={{width:"10px"}} className="text-right" data-priority="2">Edit</th>
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
                        <div>Assessing Eligibility and Assigning Filters Articles
                            <small>Social Systems Evidence - Assigned Queue</small>
                        </div>
                        </div>
                <Card className="card-default">
                    <CardHeader>List of pending Articles</CardHeader>
                    <CardBody>
                        { this.renderArticles() }
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

function mapStateToProps({ sseAssignedEligibilityFiltersArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: sseAssignedEligibilityFiltersArticleQueue.sseAssignedEligibilityFiltersArticleErrorMessage,
        assignedArticles: sseAssignedEligibilityFiltersArticleQueue.sseAssignedEligibilityFiltersArticles 
    }
}

export default connect(mapStateToProps, actions)(SSEAssignedEligibilityFiltersArticleQueue);

