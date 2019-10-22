import React, { Component } from 'react';
import { connect } from 'react-redux';
import pubsub from 'pubsub-js';
import { Collapse } from 'reactstrap';

import * as actions from '../../actions';

class SidebarUserBlock extends Component {

    state = {
        userBlockCollapse: false
    }

    componentDidMount() {

        this.pubsub_token = pubsub.subscribe('toggleUserblock', () => {
            this.setState({
                userBlockCollapse: !this.state.userBlockCollapse
            });
        });
    }

    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_token);
    }

    render() {
        return (
            <Collapse id="user-block" isOpen={ this.state.userBlockCollapse }>
                <div>
                    <div className="item user-block">
                       {/* User picture */}
                       <div className="user-block-picture">
                          <div className="user-block-status">
                             <img className="img-thumbnail rounded-circle" src="img/user/02.jpg" alt="Avatar" width="60" height="60" />
                             <div className="circle bg-success circle-lg"></div>
                          </div>
                       </div>
                       {/* Name and Job */}
                       <div className="user-block-info">
                          <span className="user-block-name">Hello, </span>
                          <span className="user-block-role">{ this.props.currentUser && this.props.currentUser.user.email }</span>
                       </div>
                    </div>
                </div>
            </Collapse>
        )
    }
}

function mapStateToProps({ auth }) {
    return { currentUser: auth.currentUser }
}

export default connect (mapStateToProps, actions)(SidebarUserBlock);
