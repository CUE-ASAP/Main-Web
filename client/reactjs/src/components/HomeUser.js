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
import sos_icon from '../assets/sos-icon.png'
import maps_icon from '../assets/maps-tracking.png'
import user_locate from '../assets/user-location.png'
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
            emails_for_sos: null,
            police_cue_state: false,
            fire_cue_state: false,
            medical_cue_state: false,
            vehicle_cue_state: false
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

    change_police_cue_state = () => {
        this.setState({ police_cue_state: !this.state.police_cue_state })
       /* setTimeout(() => {
            this.setState({ police_cue_state: !this.state.police_cue_state })
        }, 2500);*/
    }
    change_fire_cue_state = () => {
        this.setState({ fire_cue_state: !this.state.fire_cue_state })
        setTimeout(() => {
            this.setState({ fire_cue_state: !this.state.fire_cue_state })
        }, 2500);
    }
    change_medical_cue_state = () => {
        this.setState({ medical_cue_state: !this.state.medical_cue_state })
        setTimeout(() => {
            this.setState({ medical_cue_state: !this.state.medical_cue_state })
        }, 2500);
    }
    change_vehicle_cue_state = () => {
        this.setState({ vehicle_cue_state: !this.state.vehicle_cue_state })
        setTimeout(() => {
            this.setState({ vehicle_cue_state: !this.state.vehicle_cue_state })
        }, 2500);
    }

    componentDidMount = () => {
        // To fetch all emails from server for sos
        //this.get_email_id()
        // Tracking user's current location:
        //this.getLocation()
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
                        <h4>{this.state.police_state}</h4>
                    </div>

                </div>



             
            <div class="cue-wrapper-body">
                <div class="cue-wrapper-outer">
                    {
                        this.state.police_cue_state?
                        <button class="sos-pole-police-open"><img src={sos_icon} width="52px" /></button>
                        :
                        <button class="sos-pole-police-close"><img src={sos_icon} width="52px" /></button>
                    }
                    {
                        this.state.fire_cue_state?
                        <button class="sos-pole-fire-open"><img src={sos_icon} width="52px" /></button>
                        :
                        <button class="sos-pole-fire-close"><img src={sos_icon} width="52px" /></button>
                    }
                </div>
                <div class="cue-wrapper-inner">
                    {
                        this.state.police_cue_state?
                        <button class="maps-pole-police-open"><img src={maps_icon} width="52px" /></button>
                        :
                        <button class="maps-pole-police-close"><img src={maps_icon} width="52px" /></button>
                    }
                        <div class="single-box-cue-pole-police" onClick={()=>this.change_police_cue_state()}>
                            <div class="img-area-cue-pole"><img src={police_icon} width="30px" /></div>
                            <div class="img-text-cue-pole">
                                <span class="header-text-cue-pole"><strong>POLICE</strong></span>
                            </div>
                        </div>
                        <div class="single-box-cue-pole-fire" onClick={() => this.change_fire_cue_state()}>
                            <div class="img-area-cue-pole"><img src={fire_icon} width="24px" /></div>
                            <div class="img-text-cue-pole">
                                <span class="header-text-cue-pole"><strong>FIRE</strong></span>
                            </div>
                        </div>
                    {
                        this.state.fire_cue_state?
                        <button class="maps-pole-fire-open"><img src={maps_icon} width="52px" /></button>
                        :
                        <button class="maps-pole-fire-close"><img src={maps_icon} width="52px" /></button>
                    }
                </div>
                <div class="cue-wrapper-inner">
                    {
                        this.state.medical_cue_state?
                        <button class="maps-pole-medical-open"><img src={maps_icon} width="52px" /></button>
                        :
                        <button class="maps-pole-medical-close"><img src={maps_icon} width="52px" /></button>
                    }
                        <div class="single-box-cue-pole-medical" onClick={() => this.change_medical_cue_state()}>
                            <div class="img-area-cue-pole"><img src={medical_icon} width="30px" /></div>
                            <div class="img-text-cue-pole">
                                <span class="header-text-cue-pole"><strong>MEDICAL</strong></span>
                            </div>
                        </div>
                        <div class="single-box-cue-pole-vehicle" onClick={() => this.change_vehicle_cue_state()}>
                            <div class="img-area-cue-pole"><img src={vehicle_icon} width="40.3px" /></div>
                            <div class="img-text-cue-pole">
                                <span class="header-text-cue-pole"><strong>VEHICLE</strong></span>
                            </div>
                        </div>
                    {
                        this.state.vehicle_cue_state?
                        <button class="maps-pole-vehicle-open"><img src={maps_icon} width="52px" /></button>
                        :
                        <button class="maps-pole-vehicle-close"><img src={maps_icon} width="52px" /></button>
                    }
                </div>
                <div class="cue-wrapper-outer">
                    {
                        this.state.medical_cue_state?
                        <button class="sos-pole-medical-open"><img src={sos_icon} width="52px" /></button>
                        :
                        <button class="sos-pole-medical-close"><img src={sos_icon} width="52px" /></button>
                    }
                    {
                        this.state.vehicle_cue_state?
                        <button class="sos-pole-vehicle-open"><img src={sos_icon} width="52px" /></button>
                        :
                        <button class="sos-pole-vehicle-close"><img src={sos_icon} width="52px" /></button>
                    }
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
