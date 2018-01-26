import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginWrapper(props) {
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
