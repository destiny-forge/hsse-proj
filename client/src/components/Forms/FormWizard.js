import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardHeader, CardBody, Input } from 'reactstrap';
import $ from 'jquery';
// Wizard (jquery.steps)
import 'jquery-validation/dist/jquery.validate.js';
import 'jquery-steps/build/jquery.steps.min.js';


class FormWizard extends Component {

    state = {
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        address: '',
        terms: false
    }

    componentDidMount() {

        // VALIDATION
        // -----------------------------------

        const form = $(this.refs.wizardform);

        form.validate({
            errorPlacement: (error, element) => element.is(':checkbox') ? element.parent().parent().after(error) : element.after(error),
            rules: {
                confirm: {
                    equalTo: '#password'
                }
            }
        });

        form.children('div').steps({
            headerTag: 'h4',
            bodyTag: 'fieldset',
            transitionEffect: 'slideLeft',
            onStepChanging: (event, currentIndex, newIndex) => {
                form.validate().settings.ignore = ':disabled,:hidden';
                return form.valid();
            },
            onFinishing: (event, currentIndex) => {
                form.validate().settings.ignore = ':disabled';
                return form.valid();
            },
            onFinished: (event, currentIndex) => {
                // Submit form
                console.log('Submitted!');
                console.log(JSON.stringify(this.state));
                // form.submit();
            }
        });

        // VERTICAL
        // -----------------------------------
        $(this.refs.examplevertical).steps({
            headerTag: 'h4',
            bodyTag: 'section',
            transitionEffect: 'slideLeft',
            stepsOrientation: 'vertical'
        });

    }

    handleInputChange = event => {
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Form Wizard</div>
                <Card className="card-default">
                    <CardHeader>Basic Form (jquery.validate)</CardHeader>
                    <CardBody>
                        <form ref='wizardform' action='#'>
                            <div>
                                <h4>Account
                                   <br/>
                                   <small>Nam egestas, leo eu gravida tincidunt</small>
                                </h4>
                                <fieldset>
                                    <label htmlFor='userName'>User name *</label>
                                    <Input id='userName' onChange={this.handleInputChange} value={this.state.userName} name='userName' type='text' className='required' />
                                    <label htmlFor='password'>Password *</label>
                                    <Input id='password' onChange={this.handleInputChange} value={this.state.password} name='password' type='text' className='required' />
                                    <label htmlFor='confirm'>Confirm Password *</label>
                                    <Input id='confirm' onChange={this.handleInputChange} value={this.state.confirm} name='confirm' type='text' className='required' />
                                    <p>(*) Mandatory</p>
                                </fieldset>
                                <h4>Profile
                                   <br/>
                                   <small>Nam egestas, leo eu gravida tincidunt</small>
                                </h4>
                                <fieldset>
                                    <label htmlFor='name'>First name *</label>
                                    <Input id='name' onChange={this.handleInputChange} value={this.state.name} name='name' type='text' className='required' />
                                    <label htmlFor='surname'>Last name *</label>
                                    <Input id='surname' onChange={this.handleInputChange} value={this.state.surname} name='surname' type='text' className='required' />
                                    <label htmlFor='email'>Email *</label>
                                    <Input id='email' onChange={this.handleInputChange} value={this.state.email} name='email' type='text' className='required email' />
                                    <label htmlFor='address'>Address</label>
                                    <Input id='address' onChange={this.handleInputChange} value={this.state.address} name='address' type='text' />
                                    <p>(*) Mandatory</p>
                                </fieldset>
                                <h4>Hints
                                   <br/>
                                   <small>Nam egestas, leo eu gravida tincidunt</small>
                                </h4>
                                <fieldset>
                                    <p className='lead text-center'>Almost there!</p>
                                </fieldset>
                                <h4>Finish
                                   <br/>
                                   <small>Nam egestas, leo eu gravida tincidunt</small>
                                </h4>
                                <fieldset>
                                    <p className='lead'>One last check</p>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" required onChange={this.handleInputChange} checked={this.state.terms} name='terms'/>
                                            <span className="fa fa-check"></span>
                                            I agree with the Terms and Conditions.
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                        </form>
                    </CardBody>
                </Card>
                <Card className="card-default">
                    <CardHeader>Basic Vertical Example</CardHeader>
                    <CardBody>
                        <div ref='examplevertical'>
                            <h4>Keyboard</h4>
                            <section>
                                <p>Try the keyboard navigation by clicking arrow left or right!</p>
                            </section>
                            <h4>Effects</h4>
                            <section>
                                <p>Wonderful transition effects.</p>
                            </section>
                            <h4>Pager</h4>
                            <section>
                                <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                        </div>
                    </CardBody>
                </Card>
            </ContentWrapper>
            );
    }

}

export default FormWizard;
