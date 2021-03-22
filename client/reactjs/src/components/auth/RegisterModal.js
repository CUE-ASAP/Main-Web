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
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    NavLink,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import Sign_up_icon from '../../assets/register_svg.svg'
import { User } from '@styled-icons/entypo/User'
import { Mail } from '@styled-icons/entypo/Mail'
import { Lock } from '@styled-icons/boxicons-solid/Lock'

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg: error.msg.msg});
            }
            else{
                this.setState({msg: null});
            }
        }

        // If authenticated close modal
        if(this.state.modal){
            if(isAuthenticated){
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

        const {name, email, password } = this.state;

        // Create user object
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to register
        this.props.register(newUser);
    }

    render() {
        return (
            <div>
                  
                <NavLink className="navbar-text mr-3" id="sign-up-btn" onClick={this.toggle} href="#Cue" class="sup">   
                   <h6 class="btn-text-sup">Sign up</h6>
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                    <ModalHeader id="cue-register-modal-header" toggle={this.toggle}><a href><img src={Sign_up_icon} style={{ height: 40, width: 40, paddingRight: 10, paddingBottom: 4 }} alt="" ></img></a>Sign up</ModalHeader>
                    <ModalBody id="cue-register-modal-body" >

                        {this.state.msg ? (<Alert style={{ background: '#ffffe0' }} color='danger'> {this.state.msg} </Alert>): null}

                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <h5>Create you own account to become a CUE Member</h5>
                                <Label for="name">Name</Label>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend" >
                                        <InputGroupText style={{ background: '#ffffe0' }}><User style={{ height: 24, width: 24, fill: '#1d2671' }} /></InputGroupText>
                                    </InputGroupAddon>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className='mb-0'
                                    onChange={this.onChange}
                                />
                                </InputGroup>
                                <Label for="email">Email ID</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText style={{ background: '#ffffe0' }}><Mail style={{ height: 24, width: 24, fill:'#1d2671' }}/></InputGroupText>
                                    </InputGroupAddon>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email ID"
                                    className='mb-0'
                                    onChange={this.onChange}
                                />
                                </InputGroup>
                                <Label for="password">Password</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText style={{ background: '#ffffe0' }}><Lock style={{ height: 24, width: 24, fill: '#1d2671' }} /></InputGroupText>
                                    </InputGroupAddon>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className='mb-0'
                                    onChange={this.onChange}
                                />
                                </InputGroup>
                                <h6>By clicking on "Register" you agree to our User Agreement</h6>
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Register
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

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);