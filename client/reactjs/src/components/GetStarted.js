import React, { Component, useEffect, useRef} from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Home from './Home'

class GetStarted extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render() {
        return (
            <Home/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { })(GetStarted);