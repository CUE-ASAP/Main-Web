import React, { Component, useEffect, useRef} from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Home from './Home'
import HomeUser from './HomeUser'

class GetStarted extends Component {
    

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authHome = (
            <HomeUser/>
        )

        const guestHome = (
            <Home />
        )

        return (
            isAuthenticated ? authHome : guestHome
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(GetStarted);