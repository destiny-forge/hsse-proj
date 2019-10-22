import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ContentWrapper from '../../Layout/ContentWrapper';
import { Row, Col, Input, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

import * as actions from '../../../actions';

import Datetime from 'react-datetime';

import HSEFormValidator from '../HSEFormValidator.js';

/**
 * Validation flow using controlled components
 *
 * 1- User type on input
 * 2- onChange event trigger validation
 * 3- Validate methods are listed using "data-validate"
 *    attribute. Content must be an array in json format.
 * 4- The validation returns an object with format {[input name]: status}
 *    where status is an array of boolean per each method
 * 5- Methods that requires an argument, read the 'data-param' attribute
 * 6- Similarly, onSubmit event does a bulk validation on all form elements
 */

/*
 const ARTICLE_SOURCES = [
     { value: '', label: '' },
     { value: '', label: '' }
 ];
 */

class AddArticle extends Component {

    state = {
        hseSingleArticle: {
            selectedSourceOption: '',

            title: '',
            authors: '',
            journal: '',
            harvestDate: Date.now(),
            articleSource: 'Single article from referrals'
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

        const result = HSEFormValidator.validate(input);

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

        const { errors, hasError } = HSEFormValidator.bulkValidate(inputs)

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        });

        console.log(hasError ? 'Form has errors. Check!' : 'Form Submitted!')

        e.preventDefault()
    }


    handleSubmit = (formProps) => {
        console.log(formProps);
        this.props.onHSEArticleSubmit(formProps, this.props.history);
    }


    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    onDateChange(event) {
        // this.setState({ harvestDate: event._d })
        console.log(event._d);
    }

    handleChangeSelect = (selectedSourceOption) => {
        this.setState({ selectedSourceOption });
    }

    renderTitleField = ({input}) => {
        return <Input type="text"
            name="title"
            className="border-right-0"
            placeholder="Enter title"
            invalid={this.hasError('hseSingleArticle','title','required')}
            onChange={this.validateOnChange}
            data-validate='["required"]'
            //value={this.state.formLogin.email}
            {...input}
        />
    }

    renderAuthorsField = ({input}) => {
        return <Input type="text"
            name="authors"
            className="border-right-0"
            placeholder="Enter author(s)"
            invalid={this.hasError('hseSingleArticle','authors','required')}
            onChange={this.validateOnChange}
            data-validate='["required"]'
            //value={this.state.formLogin.email}
            {...input}
        />
    }

    renderJournalField = ({input}) => {
        return <Input type="text"
            name="journal"
            className="border-right-0"
            placeholder="Enter journal"
            invalid={this.hasError('hseSingleArticle','journal','required')}
            onChange={this.validateOnChange}
            data-validate='["required"]'
            //value={this.state.formLogin.email}
            {...input}
        />
    }

    renderPublishedDateField = ({input}) => {
        return <Datetime
            dateFormat="YYYY"
            inputProps={{className: 'form-control'}}
            timeFormat={false}
            onChange={this.onDateChange.bind(this)}
            {...input}
            //defaultValue=""
        />
    }

    renderSourceField = ({input}) => {
        return <Input
            type="select"
            name="articleSource"
            className="border-right-0"
            placeholder="Select source"
            invalid={this.hasError('hseSingleArticle','articleSource','required')}
            onChange={this.validateOnChange}
            data-validate='["required"]'
            //value={this.state.formLogin.email}
            {...input}
        >
            <option value="Single article from referrals">Single article from referrals</option>
            <option value="Single article from other sources">Single article from other sources</option>
        </Input>
    }

    render() {

        const { selectedSourceOption } = this.state;
        const SourceValue = selectedSourceOption && selectedSourceOption.value;


        const { handleSubmit } = this.props;

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Add Article
                        <small>Health Systems Evidence</small>
                    </div>
                </div>
                { /* START row */ }
                <Row>
                    
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <div className="col-md-12">
                        <form onSubmit={ handleSubmit(this.handleSubmit) } name="hseSingleArticle">
                            { /* START card */ }
                            <Card className="card-default">
                                <CardHeader>
                                    <div className="card-title">Add Single Article</div>
                                </CardHeader>
                                <CardBody>
                                    <legend className="mb-4">Basic Article Information</legend>
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label">Title</label>
                                            <Col md={ 6 }>
                                                <Field 
                                                    type="text"
                                                    name="title"
                                                    component={this.renderTitleField}
                                                    autoComplete="none"
                                                    className="form-control"
                                                    invalid={this.hasError('hseSingleArticle','title','required')}
                                                    onChange={this.validateOnChange}
                                                    data-validate='["required"]'
                                                    value={this.state.title}
                                                />
                                                <span className="invalid-feedback">Field is required</span>
                                            </Col>
                                            <Col md={ 4 }>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label">Authors</label>
                                            <Col md={ 6 }>
                                                <Field 
                                                    type="text"
                                                    name="authors"
                                                    component={this.renderAuthorsField}
                                                    autoComplete="none"
                                                    className="form-control"
                                                    invalid={this.hasError('hseSingleArticle', 'text', 'required')||this.hasError('hseSingleArticle','email','email')}
                                                    onChange={this.validateOnChange}
                                                    data-validate='["required"]'
                                                    value={this.state.authors}/>
                                                { this.hasError('hseSingleArticle', 'authors', 'required') && <span className="invalid-feedback">Field is required</span> }
                                            </Col>
                                            <Col md={ 4 }></Col>
                                        </div>
                                    </fieldset>
    
                                    <fieldset>
                                        <div className="form-group row mb">
                                            <label className="col-md-2 col-form-label mb">Published Date</label>
                                            <Col md={ 6 }>
                                                <Field
                                                    name="publishedDate"
                                                    component={this.renderPublishedDateField}
                                                    value={this.state.harvestDate}
                                                    />
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label mb">Journal</label>
                                            <Col md={ 5 }>
                                                <Field 
                                                    /*type="select"*/
                                                    name="journal"
                                                    component={this.renderJournalField}
                                                    invalid={this.hasError('hseSingleArticle','articleSource','required')}
                                                    onChange={this.validateOnChange}
                                                    data-validate='["integer"]'
                                                    value={this.state.journal}/>
                                                <span className="invalid-feedback">Field is required</span>
                                            </Col>
                                            <Col md={ 4 }>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label mb">Article Source</label>
                                            <Col md={ 6 }>
                                                <Field
                                                    name="articleSource"
                                                    component={this.renderSourceField}
                                                    invalid={this.hasError('hseSingleArticle','text','required')}
                                                    onChange={this.handleChangeSelect}
                                                    data-validate='["required"]'
                                                    value={SourceValue} />
                                                <span className="invalid-feedback">Field is required</span>
                                            </Col>
                                            <Col md={ 4 }>
                                            </Col>
                                        </div>
                                    </fieldset>
                                            
                                </CardBody>
                                <CardFooter className="text-center">
                                    <button type="submit" className="btn btn-danger">Cancel</button>
                                    {'  '}
                                    <button type="submit" className="btn btn-success">Save</button>
                                </CardFooter>
                            </Card>
                            { /* END card */ }
                        </form>
                    </div>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'addhsearticleform'
    })
) (AddArticle);

