import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal'
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout'
import Logo from '../assets/Cue_logo_v2_light.svg'
import Home from './Home'
class AppNavBar extends Component {

    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}!` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
            {window.innerWidth>574?
                <nav class="app-nav">
                    <a class="app-nav-a" id="nav-a-indicator" href="#Home">Home</a>
                    <a class="app-nav-a" id="nav-a-indicator" href="#About us">About us</a>
                    <a class="app-nav-a" id="nav-a-indicator" href="#Services">Services</a>
                    <a class="app-nav-a" id="nav-a-indicator" href="#Contact">Contact</a>
                    <div class="animation start-home"></div>
                </nav>:
                <div class="app-nav-bar-mobile-view">
                <NavItem>
                    <a href="#Home">Home</a>
                </NavItem>
                <NavItem>
                    <a href="#About us">About us</a>
                </NavItem>
                <NavItem>
                    <a href="#Services">Services</a>
                </NavItem>
                <NavItem>
                    <a href="#Contact">Contact</a>
                </NavItem>
                </div>
                }
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        )

        return (
            <div>
                <Navbar dark expand="sm" className="app-navbar fixed-top" style={{ borderRadius:'0px 0px 26px 26px'}}>
                    <Container>
                        < a href="/"><img src={Logo} style={{ height: 40, width: 75, paddingRight: 10 }}></img></a>
                        <NavbarBrand href="/" style={{ paddingLeft: 5 }}>CUE ASAP</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavBar);