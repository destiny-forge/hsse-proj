import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import * as actions from '../../actions';

import FormValidator from '../Forms/FormValidator.js';

class Login extends Component {

    state = {
        formLogin: {
            email: '',
            password: ''
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

    successResult = () => {
        this.props.history.push('/dashboardmain');
    }
    
    failureResult = () => {
        this.notify('Unauthorized credentials', "error", "top-right");
    }



    notify = (message, type, position) => toast(message, {
        type,
        position
    })

    handleSubmit = (formProps) => {
        this.props.signin(formProps, this.successResult, this.failureResult);
    }

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }    


    renderEmailField = ({input}) => {
        return <Input type="email"
            name="email"
            className="border-right-0"
            placeholder="Enter email"
            invalid={this.hasError('formLogin','email','required')||this.hasError('formLogin','email','email')}
            onChange={this.validateOnChange}
            data-validate='["required", "email"]'
            //value={this.state.formLogin.email}
            {...input}
        />
    }

    renderPasswordField = ({input}) => {
        return <Input type="password"
            id="id-password"
            name="password"
            className="border-right-0"
            placeholder="Password"
            invalid={this.hasError('formLogin','password','required')}
            onChange={this.validateOnChange}
            data-validate='["required"]'
            //value={this.state.formLogin.password}
            {...input}
        />
    }

    render() {       

        const { handleSubmit } = this.props;

        return (
            <div className="block-center mt-4 wd-xl">
                <br />
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            {/*<img className="block-center rounded" src="img/logo.png" alt="Logo"/>*/}
                            <h2 style={{color: '#fff'}}>HSSE</h2>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">SIGN IN</p>
                        <form className="mb-3" name="formLogin" onSubmit={ handleSubmit(this.handleSubmit) }>
                            <div className="form-group">
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
                                    { this.hasError('formLogin','email','required') && <span className="invalid-feedback">Field is required</span> }
                                    { this.hasError('formLogin','email','email') && <span className="invalid-feedback">Field must be valid email</span> }
                                </div>
                            </div>
                            <div className="form-group">
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
                            <div className="clearfix">
                                <div className="checkbox c-checkbox float-left mt-0">
                                    <label>
                                        <input type="checkbox" value="" name="remember"/>
                                        <span className="fa fa-check"></span>Remember Me</label>
                                </div>
                                <div className="float-right">
                                    <Link to="recover" className="text-muted">Forgot your password?</Link>
                                </div>
                            </div>
                            <button className="btn btn-block btn-primary mt-3" type="submit">Login</button>
                        </form>
                        <ToastContainer />
                        <p className="pt-3 text-center">Need to Signup?</p>
                        <Link to="register" className="btn btn-block btn-secondary">Register Now</Link>
                    </div>
                </div>
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
        form: 'login'
    })) (Login);
