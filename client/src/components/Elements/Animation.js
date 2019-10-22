import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

import $ from 'jquery';
import 'animo/animo';

class Animation extends Component {

    constructor(props) {
        super(props)
        this.elements = [];
    }

    componentDidMount() {
        $(this.elements).on('click', e => {
            e.preventDefault();
            const $data = $(e.currentTarget).data();
            $($data.target).animo({ animation: $data.animation });
        });
    }

    pushRef = node => {
        this.elements.push(node)
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Animations
                        <small>animo is a powerful little tool that makes managing CSS animations extremely easy.</small>
                    </div>
                </div>
                { /* START row */ }
                <Row>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounce" className="card-default">
                            <CardHeader>bounce</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounce" data-animation="bounce">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-flash" className="card-default">
                            <CardHeader>flash</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-flash" data-animation="flash">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-pulse" className="card-default">
                            <CardHeader>pulse</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-pulse" data-animation="pulse">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rubberBand" className="card-default">
                            <CardHeader>rubberBand</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rubberBand" data-animation="rubberBand">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-shake" className="card-default">
                            <CardHeader>shake</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-shake" data-animation="shake">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-swing" className="card-default">
                            <CardHeader>swing</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-swing" data-animation="swing">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-tada" className="card-default">
                            <CardHeader>tada</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-tada" data-animation="tada">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-wobble" className="card-default">
                            <CardHeader>wobble</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-wobble" data-animation="wobble">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceIn" className="card-default">
                            <CardHeader>bounceIn</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceIn" data-animation="bounceIn">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceInDown" className="card-default">
                            <CardHeader>bounceInDown</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceInDown" data-animation="bounceInDown">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceInLeft" className="card-default">
                            <CardHeader>bounceInLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceInLeft" data-animation="bounceInLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceInRight" className="card-default">
                            <CardHeader>bounceInRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceInRight" data-animation="bounceInRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceInUp" className="card-default">
                            <CardHeader>bounceInUp</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceInUp" data-animation="bounceInUp">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceOut" className="card-default">
                            <CardHeader>bounceOut</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceOut" data-animation="bounceOut">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceOutDown" className="card-default">
                            <CardHeader>bounceOutDown</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceOutDown" data-animation="bounceOutDown">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceOutLeft" className="card-default">
                            <CardHeader>bounceOutLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceOutLeft" data-animation="bounceOutLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceOutRight" className="card-default">
                            <CardHeader>bounceOutRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceOutRight" data-animation="bounceOutRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-bounceOutUp" className="card-default">
                            <CardHeader>bounceOutUp</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-bounceOutUp" data-animation="bounceOutUp">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeIn" className="card-default">
                            <CardHeader>fadeIn</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeIn" data-animation="fadeIn">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInDown" className="card-default">
                            <CardHeader>fadeInDown</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInDown" data-animation="fadeInDown">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInDownBig" className="card-default">
                            <CardHeader>fadeInDownBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInDownBig" data-animation="fadeInDownBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInLeft" className="card-default">
                            <CardHeader>fadeInLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInLeft" data-animation="fadeInLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInLeftBig" className="card-default">
                            <CardHeader>fadeInLeftBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInLeftBig" data-animation="fadeInLeftBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInRight" className="card-default">
                            <CardHeader>fadeInRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInRight" data-animation="fadeInRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInRightBig" className="card-default">
                            <CardHeader>fadeInRightBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInRightBig" data-animation="fadeInRightBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInUp" className="card-default">
                            <CardHeader>fadeInUp</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInUp" data-animation="fadeInUp">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeInUpBig" className="card-default">
                            <CardHeader>fadeInUpBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeInUpBig" data-animation="fadeInUpBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOut" className="card-default">
                            <CardHeader>fadeOut</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOut" data-animation="fadeOut">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutDown" className="card-default">
                            <CardHeader>fadeOutDown</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutDown" data-animation="fadeOutDown">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutDownBig" className="card-default">
                            <CardHeader>fadeOutDownBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutDownBig" data-animation="fadeOutDownBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutLeft" className="card-default">
                            <CardHeader>fadeOutLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutLeft" data-animation="fadeOutLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutLeftBig" className="card-default">
                            <CardHeader>fadeOutLeftBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutLeftBig" data-animation="fadeOutLeftBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutRight" className="card-default">
                            <CardHeader>fadeOutRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutRight" data-animation="fadeOutRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutRightBig" className="card-default">
                            <CardHeader>fadeOutRightBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutRightBig" data-animation="fadeOutRightBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutUp" className="card-default">
                            <CardHeader>fadeOutUp</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutUp" data-animation="fadeOutUp">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-fadeOutUpBig" className="card-default">
                            <CardHeader>fadeOutUpBig</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-fadeOutUpBig" data-animation="fadeOutUpBig">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-flip" className="card-default">
                            <CardHeader>flip</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-flip" data-animation="flip">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-flipInX" className="card-default">
                            <CardHeader>flipInX</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-flipInX" data-animation="flipInX">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-flipInY" className="card-default">
                            <CardHeader>flipInY</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-flipInY" data-animation="flipInY">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-flipOutX" className="card-default">
                            <CardHeader>flipOutX</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-flipOutX" data-animation="flipOutX">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-flipOutY" className="card-default">
                            <CardHeader>flipOutY</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-flipOutY" data-animation="flipOutY">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-lightSpeedIn" className="card-default">
                            <CardHeader>lightSpeedIn</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-lightSpeedIn" data-animation="lightSpeedIn">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-lightSpeedOut" className="card-default">
                            <CardHeader>lightSpeedOut</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-lightSpeedOut" data-animation="lightSpeedOut">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateIn" className="card-default">
                            <CardHeader>rotateIn</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateIn" data-animation="rotateIn">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateInDownLeft" className="card-default">
                            <CardHeader>rotateInDownLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateInDownLeft" data-animation="rotateInDownLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateInDownRight" className="card-default">
                            <CardHeader>rotateInDownRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateInDownRight" data-animation="rotateInDownRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateInUpLeft" className="card-default">
                            <CardHeader>rotateInUpLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateInUpLeft" data-animation="rotateInUpLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateInUpRight" className="card-default">
                            <CardHeader>rotateInUpRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateInUpRight" data-animation="rotateInUpRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateOut" className="card-default">
                            <CardHeader>rotateOut</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateOut" data-animation="rotateOut">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateOutDownLeft" className="card-default">
                            <CardHeader>rotateOutDownLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateOutDownLeft" data-animation="rotateOutDownLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateOutDownRight" className="card-default">
                            <CardHeader>rotateOutDownRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateOutDownRight" data-animation="rotateOutDownRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateOutUpLeft" className="card-default">
                            <CardHeader>rotateOutUpLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateOutUpLeft" data-animation="rotateOutUpLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rotateOutUpRight" className="card-default">
                            <CardHeader>rotateOutUpRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rotateOutUpRight" data-animation="rotateOutUpRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-hinge" className="card-default">
                            <CardHeader>hinge</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-hinge" data-animation="hinge">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rollIn" className="card-default">
                            <CardHeader>rollIn</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rollIn" data-animation="rollIn">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-rollOut" className="card-default">
                            <CardHeader>rollOut</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-rollOut" data-animation="rollOut">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomIn" className="card-default">
                            <CardHeader>zoomIn</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomIn" data-animation="zoomIn">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomInDown" className="card-default">
                            <CardHeader>zoomInDown</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomInDown" data-animation="zoomInDown">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomInLeft" className="card-default">
                            <CardHeader>zoomInLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomInLeft" data-animation="zoomInLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomInRight" className="card-default">
                            <CardHeader>zoomInRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomInRight" data-animation="zoomInRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomInUp" className="card-default">
                            <CardHeader>zoomInUp</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomInUp" data-animation="zoomInUp">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomOut" className="card-default">
                            <CardHeader>zoomOut</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomOut" data-animation="zoomOut">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomOutDown" className="card-default">
                            <CardHeader>zoomOutDown</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomOutDown" data-animation="zoomOutDown">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomOutLeft" className="card-default">
                            <CardHeader>zoomOutLeft</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomOutLeft" data-animation="zoomOutLeft">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomOutRight" className="card-default">
                            <CardHeader>zoomOutRight</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomOutRight" data-animation="zoomOutRight">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                    <Col sm="6" lg="3" xl="2">
                        { /* START Card */ }
                        <Card id="card-anim-zoomOutUp" className="card-default">
                            <CardHeader>zoomOutUp</CardHeader>
                            <CardBody>
                                { /* Animation trigger */ }
                                <a href="" ref={this.pushRef} data-target="#card-anim-zoomOutUp" data-animation="zoomOutUp">
                                    <em className="fa fa-play fa-2x"></em>
                                </a>
                            </CardBody>
                        </Card>
                        { /* END Card */ }
                    </Col>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

export default Animation;