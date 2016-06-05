import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import classNames from 'classnames';
import styles from './contact-form.css';

export const fields =['firstName', 'lastName', 'email'];

class ContactForm extends Component {
    render() {
        const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
        let className = classNames(styles.root, "form-horizontal");
        return (
            <form className={className}  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="col-xs-4 control-label">First Name:</label>
                    <div className="col-xs-8">
                        <input type="text" className="form-control" placeholder="First Name" {...firstName}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-4 control-label">Last Name:</label>
                    <div className="col-xs-8">
                        <input type="text" className="form-control" placeholder="Last Name" {...lastName}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-4 control-label">Email:</label>
                    <div className="col-xs-8">
                        <input type="email" className="form-control" placeholder="Email" {...email}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-4 control-label"></label>
                    <div className="col-xs-8">
                        <button type="submit" className="btn btn-primary btn-lg">
                            <i className="fa fa-paper-plane"></i>Submit
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

ContactForm = reduxForm({
    form: 'contact',
    fields
})(ContactForm);

export default ContactForm;