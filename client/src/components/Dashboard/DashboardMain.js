import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import requireAuth from '../Pages/requireAuth';
// import { Tooltip } from 'reactstrap';

/**
 * Wrap an element and assign automatically an ID,
 * creates a handler to show/hide tooltips without
 * the hassle of creating new states and class methods.
 * Support only one child and simple text content.
 */
/*
class BSTooltip extends Component {
    // static propTypes { content: PropTypes.string }
    state = {
        _id: 'id4tooltip_'+new Date().getUTCMilliseconds(),
        tooltipOpen: false
    }
    toggle = e => {
        this.setState({tooltipOpen: !this.state.tooltipOpen});
    }
    render() {
        return [
            <Tooltip {...this.props} isOpen={this.state.tooltipOpen} toggle={this.toggle} target={this.state._id} key='1'>
                {this.props.content}
            </Tooltip>,
            React.cloneElement(React.Children.only(this.props.children), {
                id: this.state._id,
                key: '2'
            })
        ]
    }
}
*/

class DashboardMain extends Component {

    

    componentDidMount() {
        
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    render() {

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Main Dashboard
                        <small><Trans i18nKey='dashboard.WELCOME'></Trans></small>
                    </div>
                    { /* START Language list */ }
                {/*     <div className="ml-auto">
                        <Dropdown isOpen={this.state.dropdownTranslateOpen} toggle={this.toggleDDTranslate}>
                            <DropdownToggle>
                                English
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-right-forced animated fadeInUpShort">
                                <DropdownItem onClick={() => this.changeLanguage('en')}>English</DropdownItem>
                                <DropdownItem onClick={() => this.changeLanguage('fr')}>French</DropdownItem>
                                <DropdownItem onClick={() => this.changeLanguage('es')}>Spanish</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                */}
                    { /* END Language list */ }
                </div>
                
                
                { /* START radial charts */ }

                
                { /* START radial charts */ }
                { /* START Multiple List group */ }
                          
                
                { /* END Multiple List group */ }
            </ContentWrapper>
            );
    }

}

//export default translate('translations')(DashboardV2);

export default requireAuth(translate('translations')(DashboardMain));