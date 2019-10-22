import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Table, Card } from 'reactstrap';

class ForumTopics extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Forum - Topics
                        <small>Category ID: 1324</small>
                    </div>
                    <div className="ml-auto">
                        <button type="button" className="btn btn-sm btn-secondary text-sm" href="">&lt; back</button>
                    </div>
                </div>
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Welcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <a href="">
                                            <strong>Powered by AngularJS</strong>
                                        </a>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">17</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">19</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Victoria West</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <a href="">
                                            <strong>How to create an AngularJS admin GUI?</strong>
                                        </a>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">7</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">13</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Olivia Reynolds</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <a href="">
                                            <strong>Issue found..</strong>
                                        </a>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">13</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">500</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Michelle Lane</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <a href="">
                                            <strong>Share your application</strong>
                                        </a>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">98</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">1900</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Derek Jensen</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <a href="">
                                            <strong>Angle - Angular Admin Template</strong>
                                        </a>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">17</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">19</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Colleen Cole</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <a href="">
                                            <strong>Take a breakfast and happy coding</strong>
                                        </a>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">31</strong>view</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">190</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Charlene Barrett</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <a href="">
                                            <strong>Sed vitae nisi eget metus semper congue.</strong>
                                        </a>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">27</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">419</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Austin Montgomery</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </ContentWrapper>
            );
    }

}

export default ForumTopics;
