import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import Login_icon from '../../assets/login_svg.svg'

class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            }
            else {
                this.setState({ msg: null });
            }
        }

        // If authenticated close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {email,password} = this.state;

        const user = {email,password}

        // Attempt to login
        this.props.login(user);

    }

    render() {
        return (
            <div>
                
                <NavLink className="navbar-text mr-3" id="login-btn" onClick={this.toggle} href="#">
                    <h6 class="btn-text-log">Login</h6>
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                    <ModalHeader id="cue-login-modal-header" toggle={this.toggle}>< a ><img src={Login_icon} style={{ height: 40, width: 40, paddingRight: 10}}></img></a>Login</ModalHeader>
                    <ModalBody id="cue-login-modal-body" >

                        {this.state.msg ? (<Alert color='danger'> {this.state.msg} </Alert>) : null}

                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="email">Email ID</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email ID"
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Login
                                </Button>
                            </FormGroup>
                        </Form>

                    </ModalBody>

                </Modal>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);