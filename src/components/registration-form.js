import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
export class RegistrationForm extends React.Component {
    onSubmit(values) {
        let {username, password, firstName, lastName, isTeacher} = values;
        if (isTeacher === undefined) {
          isTeacher = false;
        }
        const user = {username, password, firstName, lastName, isTeacher};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }
    render() {
        return (
            <form
                className="registration-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}> <div className="registration-form__name">
                        <Field
                        component={Input}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        />
                  <Field
                  component={Input}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  />

                </div>
                <Field
                    component={Input}
                     type="text"
                     name="username"
                     validate={[required, nonEmpty, isTrimmed]}
                     placeholder="Username"
                 />
               <div className="registration-form__password">
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, length({min:3, max: 72}), isTrimmed]}
                    placeholder="Enter Password"
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                    placeholder="Confirm Password"
                />
                </div>
                <div className="registration-form__isTeacher">
                <label htmlFor="isTeacher">Are you a Teacher?</label>
                  <Field
                  component= {Input}
                  type="checkbox"
                  name="isTeacher"
                  />
                  </div>
                <button
                    className="registration-form__button"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
