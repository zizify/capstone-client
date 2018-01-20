import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link, Redirect} from 'react-router-dom';

export class HeaderNav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="navigation">
              <ul className="navigation__list">
                <div className="navigation__main">
                  <li className="navigation__logo navigation__item"><a href="#">LOGO</a></li>
                </div>
                <div className="navigation__action">
                  <li className="navigation__item"><Link to="/login">Login</Link></li>
                </div>
              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderNav);
