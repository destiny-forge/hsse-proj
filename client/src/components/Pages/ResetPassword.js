import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';

import * as actions from '../../actions';

import FormValidator from '../Forms/FormValidator.js';

class ResetPassword extends Component {

    state = {
        formRegister: {
            email: '',
            password: '',
            password2: '',
            terms: false
        }
    }

     /**
      * Validate input using onChange event
      * @param  {String} formName The name of the form in the state object
      * @return {Function} a function used for the event
      */
    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.type === 'checkbox' ? input.checked : input.value;

        const result = FormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            }
        });

    }

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i => ['INPUT', 'SELECT'].includes(i.nodeName))

        const { errors, hasError } = FormValidator.bulkValidate(inputs)

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        });

        console.log(hasError ? 'Form has errors. Check!' : 'Form Submitted!')

        e.preventDefault()
    }

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    logPasswordChanged = () => console.log("Password has been changed");

    handleSubmit({ password, confirmPassword }) {
        const { match: { params } } = this.props;
        this.props.resetPassword({ password, confirmPassword }, params.token, this.props.history);
        this.props.history.push('/successfulpasswordreset');
    }

    renderEmailField = ({ input }) => {
        return <Input type="email"
            name="email"
            className="border-right-0"
            placeholder="Enter email"
            invalid={this.hasError('formRegister','email','required')||this.hasError('formRegister','email','email')}
            onChange={this.validateOnChange}
            ata-validate='["required", "email"]'
            //value={this.state.formRegister.email}
            {...input}
        />
    }

    renderPasswordField = ({ input }) => {
        return <Input type="password"
            id="id-password"
            name="password"
            className="border-right-0"
            placeholder="Password"
            invalid={this.hasError('formRegister','password','required')}
            onChange={this.validateOnChange}
            data-validate='["required"]'
            //value={this.state.formRegister.password}
            {...input}
        />
    }

    renderPasswordConfirmField = ({ input }) => {
        return <Input type="password" 
            name="confirmPassword"
            className="border-right-0"
            placeholder="Retype assword"
            invalid={this.hasError('formRegister','confirmPassword','equalto')}
            onChange={this.validateOnChange}
            ata-validate='["equalto"]'
            //value={this.state.formRegister.confirmPassword}
            ata-param="id-password"
            {...input}
        />
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="block-center mt-4 wd-xl">
                <br />
                {/* START card */}
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            {/*<img className="block-center" src="img/logo.png" alt="Logo"/>*/}
                            <h2 style={{color: '#fff'}}>HSSE</h2>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">PASSWORD RESET</p>
                        <form className="mb-3" name="formRegister" onSubmit={ handleSubmit(this.handleSubmit.bind(this))}>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="signupInputPassword1">Password</label>
                                <div className="input-group with-focus">
                                    <Field
                                        name="password"
                                        type="password"
                                        component={this.renderPasswordField}
                                        autoComplete="none"
                                        className="form-control"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-lock"></em>
                                        </span>
                                    </div>
                                    <span className="invalid-feedback">Field is required</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="signupInputRePassword1">Retype Password</label>
                                <div className="input-group with-focus">
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        component={this.renderPasswordConfirmField}
                                        autoComplete="none"
                                        className="form-control"
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-lock"></em>
                                        </span>
                                    </div>
                                    <span className="invalid-feedback">Field must be equal to previous</span>
                                </div>
                            </div>
                            <button className="btn btn-block btn-primary mt-3" type="submit">Reset password</button>
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
    })) (ResetPassword);
