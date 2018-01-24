import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from './registration-form';

export class HeaderHero extends React.Component {
    render() {
        return (
            <div className="header__hero">
              <div className="header__form-text-container">
                <h1 className="header__text">Easy communication for Teachers and Students</h1>
                <h3 className="header__sub-heading">Teachers and Students Create a Free Account to Set up and View your classes, grades, students, classmates and so much more</h3>
              </div>
              <div className="header__form">
                <RegistrationForm />
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderHero);
