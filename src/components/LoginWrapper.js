import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginWrapper(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn && props.isTeacher) {
      return <Redirect to="/dashboard/teacher" />;
    }
    if (props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
        <div className="login-wrapper">
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginWrapper);
