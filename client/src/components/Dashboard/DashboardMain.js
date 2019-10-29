import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import requireAuth from '../Pages/requireAuth';

class DashboardMain extends Component {

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
          {/*
            <div className="ml-auto">
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
          </div>
        </ContentWrapper>
    );
  }
}

//export default translate('translations')(DashboardV2);

export default requireAuth(translate('translations')(DashboardMain));