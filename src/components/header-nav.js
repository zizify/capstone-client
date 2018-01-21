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
              <img class="navigation__image"src="https://cdn7.bigcommerce.com/s-fkt3i18h/product_images/uploaded_images/classroom-1-.png?t=1516484551&_ga=2.108777666.1157140005.1516403263-1817016180.1514945206" alt="classroom" />
                  <li className="navigation__logo navigation__item">
                    <Link to= "/">
                      CHALK TALK
                    </Link>
                </li>
                <li className="navigation__item"><Link to="/login">Login</Link></li>
              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderNav);
