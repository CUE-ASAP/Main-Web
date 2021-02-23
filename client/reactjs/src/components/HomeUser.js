import React, { Component, useEffect, useRef } from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
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

import PropTypes from 'prop-types'
import './HomeUser.css'
import Logo from '../assets/Asset 4.png'
import Logo_gif from '../assets/CUE asap LOGO Black.gif'
import fire_icon from '../assets/Fire.svg'
import police_icon from '../assets/Police.svg'
import medical_icon from '../assets/Medical.svg'
import vehicle_icon from '../assets/Car.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'
import axios from 'axios';


// To configure Toast notification:
toast.configure()

class HomeUser extends React.Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            useAddress: null,
            emails_for_sos: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this)
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
    }

    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        }
        else{
            toast.warn("Geolocation is not supported by this browse",{position: toast.POSITION.BOTTOM_RIGHT});
        }
    }

    getCoordinates(position){
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.reverseGeocodeCoordinates();
    }

    reverseGeocodeCoordinates() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${'AIzaSyBHgWojYObkZUzJRtOrGH9dEZHXPXQMwFE'}`)
            .then(response => response.json())
            .then(data => this.setState({
                useAddress: data.results[0].formatted_address
            }))
            .catch(error => toast.warn(error, { position: toast.POSITION.BOTTOM_RIGHT }))
    }

    handleLocationError(error){
        switch (error.code) {
            case error.PERMISSION_DENIED:
                toast.warn("User denied the request for Geolocation.", { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case error.POSITION_UNAVAILABLE:
                toast.warn("Location information is unavailable.", { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case error.TIMEOUT:
                toast.warn("The request to get user location timed out.", { position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case error.UNKNOWN_ERROR:
                toast.warn("An unknown error occurred.", { position: toast.POSITION.BOTTOM_RIGHT });
                break;
        }
    }

    police(user_name, user_location, email_for_bcc) {
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding crime emergency",
            "name": `Dear ${user_name},`,
            "email_from": "savage_coders@gmail.com",
            "email_to": "kurtzcolonel848@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `Today, a fire broke out at ${user_location} on ${new Date().toLocaleTimeString()}\n.`,
        }, 'user_8jlcQ5ZP3b4DP5GVGoiSd')
            .then((result) => {
                toast.success("Mail sent to the fire authority & citizens, rescue team is one their way!", { position: toast.POSITION.BOTTOM_RIGHT });
            }, (error) => {
                toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_RIGHT });
            });
    }
    
    fire(user_name, user_location, email_for_bcc) {
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding fire emergency",
            "name": `Dear ${user_name},`,
            "email_from": "savage_coders@gmail.com",
            "email_to": "kurtzcolonel848@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `Today, a fire broke out at ${user_location} on ${new Date().toLocaleTimeString()}.`,
            "my_html": `View Map:<br/>  <a href="https://maps.google.com/maps?q=${user_location}&t=&z=14&ie=UTF">Click here...</a>`,
        }, 'user_8jlcQ5ZP3b4DP5GVGoiSd')
        .then((result) => {
            toast.success("Mail sent to the fire authority & citizens, rescue team is one their way! ", { position: toast.POSITION.BOTTOM_RIGHT });
        }, (error) => {
            toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_RIGHT });
        });
        
    }

    medical(user_name, user_location, email_for_bcc) {
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding medical emergency",
            "name": `Dear ${user_name},`,
            "email_from": "savage_coders@gmail.com",
            "email_to": "kurtzcolonel848@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `Today, a fire broke out at ${user_location} on ${new Date().toLocaleTimeString()}\n.`,
        }, 'user_8jlcQ5ZP3b4DP5GVGoiSd')
            .then((result) => {
                toast.success("Mail sent to the fire authority & citizens, rescue team is one their way!", { position: toast.POSITION.BOTTOM_RIGHT });
            }, (error) => {
                toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_RIGHT });
            });
    }

    vehicle(user_name, user_location, email_for_bcc) {
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding motor accident emergency",
            "name": `Dear ${user_name},`,
            "email_from": "savage_coders@gmail.com",
            "email_to": "kurtzcolonel848@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `Today, a fire broke out at ${user_location} on ${new Date().toLocaleTimeString()}\n.`,
        }, 'user_8jlcQ5ZP3b4DP5GVGoiSd')
            .then((result) => {
                toast.success("Mail sent to the fire authority & citizens, rescue team is one their way!", { position: toast.POSITION.BOTTOM_RIGHT });
            }, (error) => {
                toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_RIGHT });
            });
    }

    // Fetch all emails from server for sos

    get_email_id = () => {
        axios.get('/api/auth/data')
        .then((response) => {
            const data = response.data;
            let email_sos = []
            for (let i=0; i<data.length; i++)
                email_sos[i] = data[i].email
            email_sos = email_sos.join(', ')
            this.setState({emails_for_sos: email_sos})
        })
    }


    componentDidMount = () => {
        // To fetch all emails from server for sos
        this.get_email_id()
        // Tracking user's current location:
        this.getLocation()
    }

    render(){

        
        
        //<a href={`https://maps.google.com/maps?q=fire&t=&z=14&ie=UTF`} target="_blank">Click here...</a>

        const { user } = this.props.auth;
        
        return (

            <Container>

                <div class="box-area-map">
                    <div class="box-area-cue" style={{marginLeft:20,marginRight:20}}>
                        <div class="single-box-cue" onClick={() => this.police(user.name, this.state.useAddress, this.state.emails_for_sos)} >
                                <div class="img-area-cue"><img src={police_icon} width="30px" /></div>
                                <div class="img-text-cue">
                                    <span class="header-text-cue"><strong>POLICE</strong></span>
                                </div>
                        </div>
                        <div class="single-box-cue" onClick={() => this.medical(user.name, this.state.useAddress, this.state.emails_for_sos)} >
                            <div class="img-area-cue"><img src={medical_icon} width="30px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>MEDICAL</strong></span>
                            </div>
                        </div>
                    </div>
                    <div class="box-area-cue" style={{ marginLeft: 20, marginRight: 20 }}>
                        <div class="single-box-cue-2" onClick={() => this.fire(user.name, this.state.useAddress, this.state.emails_for_sos)}>
                            <div class="img-area-cue" ><img src={fire_icon} width="24px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>FIRE</strong></span>
                            </div>
                        </div>
                        <div class="single-box-cue-2" onClick={() => this.vehicle(user.name, this.state.useAddress, this.state.emails_for_sos)}>
                            <div class="img-area-cue"><img src={vehicle_icon} width="40.3px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>VEHICLE</strong></span>
                            </div>
                        </div>
                    </div>
                
                    <div class="single-box-map" id="home-text" style={{ marginLeft: 60 , marginRight:60}} >
                        {
                            this.state.latitude && this.state.longitude ?
                                <img class="map-api" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=300x260&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${'AIzaSyBHgWojYObkZUzJRtOrGH9dEZHXPXQMwFE'}`} alt='' />
                                :
                                null
                        }
                        <h4 style={{ paddingTop: 6 }}>{this.state.useAddress}</h4>
                    </div>

                </div>
                
                <div class="box-area">
                    <div class="single-box">
                        <div class="img-area"></div>
                        <div class="img-text">
                            <span class="header-text"><strong>Hello There</strong></span>
                            <p>Description 1</p>
                        </div>
                    </div>
                    <div class="single-box">
                        <div class="img-area"></div>
                        <div class="img-text">
                            <span class="header-text"><strong>Spread The Awareness</strong></span>
                            <p>Description 2</p>
                        </div>
                    </div>
                    <div class="single-box">
                        <div class="img-area"></div>
                        <div class="img-text">
                            <span class="header-text"><strong>Service authorities</strong></span>
                            <p>Description 3</p>
                        </div>
                    </div>
                </div>

                <footer id="main-footer">
                    <p>CUE-ASAP, Copyright &copy; 2021</p>
                </footer>

            </Container>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(HomeUser);
