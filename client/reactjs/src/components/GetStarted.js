import React, { Component} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Home from './Home'
import AuthUser from './AuthUser'

class GetStarted extends Component {
    

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {

        const { isAuthenticated } = this.props.auth;

        const authHome = (
            <AuthUser/>
        )

        const newHome = (
            <Home />
        )

        return (
            isAuthenticated ? authHome : newHome
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(GetStarted);