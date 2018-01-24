import React from 'react';
import {connect} from 'react-redux';
import { HeaderNav } from './header-nav'
import { HeaderHero } from './header-hero';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
            <HeaderNav />
            <HeaderHero />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
