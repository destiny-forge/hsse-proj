import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


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

class SSEPendingEligibilityFiltersBatchfileQueue extends Component {

    componentDidMount() {
        this.props.listSSEPendingEligibilityFiltersBatchfilesQueue();
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

    renderBatchfiles() {console.log(this.props.pendingArticles);
        if(this.props.pendingBatchfiles != null ) {
            const rows = Object.entries(this.props.pendingBatchfiles).map(batchfile => {
                
                return (
                    <tr key={batchfile[1]._id}>
                        {/*
                        <td className="text-center">
                            <span className="badge badge-success">{ batchfiles[1].priority }</span>
                        </td>
                        */}
                        <td>Test</td>
                        <td>{batchfile[1]._id}</td>
                        <td>
                            {batchfile[1].harvestDate}
                        </td>
                        <td>
                            {batchfile[1].uploadDate}
                        </td>
                        <td>
                            <a className="mr-1 badge badge-primary" href="">{batchfile[1].articleSource}</a>
                        </td>
                        <td><a className="mr-1 badge badge-primary" href="">{batchfile[1].fileName}</a></td>
                        <td>https://s3.amazonaws.com/hsse-staging/{batchfile[1].batchfileUrl}</td>
                        <td>{batchfile[1].language}</td>
                        
                    </tr>
                )
            });
        // <a className="mr-1 badge badge-success" href="">{ batchfiles[1].language }</a>
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
                                <th style={{width:"130px"}} className="text-right" data-priority="2">Language</th>
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
                        <div>Assessing Eligibility and Assigning Filters Batchfiles
                            <small>Health Systems Evidence - Main Queue</small>
                        </div>
                        </div>
                <Card className="card-default">
                    <CardHeader>List of pending Batchfiles</CardHeader>
                    <CardBody>
                        { this.renderBatchfiles() }
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

function mapStateToProps({ ssePendingEligibilityFiltersBatchfileQueue }) {
    return { 
        errorMessage: ssePendingEligibilityFiltersBatchfileQueue.ssePendingEligibilityFiltersBatchfileErrorMessage,
        pendingBatchfiles: ssePendingEligibilityFiltersBatchfileQueue.ssePendingEligibilityFiltersBatchfiles 
    }
}

export default connect(mapStateToProps, actions)(SSEPendingEligibilityFiltersBatchfileQueue);


