import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Recover extends Component {

    handleSubmit({ email }) {
        this.props.forgotpassword({ email }, this.logSendingEmail);
        this.props.history.push('/confirmpasswordreset');
    }

    renderEmailField = ({ input }) => {
        return <input 
                className="form-control border-right-0" 
                d="resetInputEmail1" 
                type="email" 
                placeholder="Enter email" 
                autoComplete="off"
                {...input}
            />
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="block-center mt-4 wd-xl">
                {/* START card */}
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            {/*<img className="block-center rounded" src="img/logo.png" alt="Logo"/>*/}
                            <h2 style={{color: '#fff'}}>HSSE</h2>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">PASSWORD RESET</p>
                        <form onSubmit={ handleSubmit(this.handleSubmit.bind(this)) }>
                            <p className="text-center">Please enter your email to receive instructions on how to reset your password.</p>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="resetInputEmail1">Email address</label>
                                <div className="input-group with-focus">
                                    <Field
                                        name="email"
                                        type="text"
                                        component={this.renderEmailField}
                                        autoComplete="none"
                                        className="form-control"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-envelope"></em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-danger btn-block" type="submit">Reset</button>
                        </form>
                    </div>
                </div>
                {/* END card */}
                <div className="p-3 text-center">
                    <span className="mr-2">&copy;</span>
                    <span>2018</span>
                    <span className="mx-2">-</span>
                    <span>McMaster Health Forum</span>
                    <br/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'resetPassword'
    })) (Recover);
