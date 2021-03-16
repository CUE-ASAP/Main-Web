import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import Logout_icon from '../../assets/logout_svg.svg'

export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    render() {
        return (
            <Fragment>
                <NavLink id="logout-btn" onClick={this.props.logout} style={{ fontFamily: 'Mulish', paddingRight:16, paddingTop:10 }} href='#'>
                    < a onClick="return false;" disabled="disabled" style={{cursor:'default', pointerEvents: 'none'}}><img src={Logout_icon} style={{ height: 27, width: 40, paddingRight: 4 }}></img></a>
                    Logout
                </NavLink>
            </Fragment>
        );
    }
}

export default connect(null, { logout })(Logout);
