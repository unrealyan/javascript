import _ from 'lodash';
import React, { PropTypes } from 'react';
import {registerReducer} from 'reducers';
import ContactForm, { fields } from './contact-form/contact-form';
import { connect } from 'react-redux';
import {initialize} from 'redux-form';

const UserSetting = ({addContact, userList}) => {
    let handleSubmit = (field) => {
        addContact(field);
    };
    const initValues = {
        initialValues: {
            firstName: 'John',
            lastName: "Doe",
            email: 'apples@qq.com'
        }
    };
    return <div>
        Im user setting page!
        <hr/>
        <div>
            <span className="icon color7">
                User List&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="label label-default">{_.uniqWith(userList, _.isEqual).length}</span>
            </span>
        </div>
        <ul>
        {_.uniqWith(userList, _.isEqual).map((field) =>
                <li key={field.firstName + field.lastName + field.email + new Date().getTime()}>
                    UserName:
                    <span style={{fontWeight: 'bold'}}>{field.firstName}&nbsp;{field.lastName}</span>
                &nbsp;Email:&nbsp;{field.email}
                </li>
        )}
        </ul>
        <ContactForm {...initValues} onSubmit={handleSubmit} />
    </div>
};

UserSetting.propTypes = {
    userList: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired
};

const addContact = (data) => {
    return {
        type: 'ADD_CONTACT',
        data
    }
};

registerReducer('ADD_CONTACT', (state, action) => {
    state.userList.push(action.data);
    return state;
});

const mapStateToProps = (state) =>({userList: state.main.userList});

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (data) => {
            dispatch(addContact(data))
            dispatch(initialize('contact', {}, fields))
        }
    }
};

const UserSettingWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSetting);

export default UserSettingWrapper;