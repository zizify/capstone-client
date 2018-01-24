import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginWrapper(props) {
  console.log(props)
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn && props.currentUser.isTeacher) {
      console.log('gets here')
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
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LoginWrapper);
