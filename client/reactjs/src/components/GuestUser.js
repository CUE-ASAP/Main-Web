import React from 'react'
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'
import './GuestUser.css'

import map_static_none from '../assets/map-static-none.png'
import police_icon from '../assets/Police.svg'
import fire_icon from '../assets/Fire.svg'
import medical_icon from '../assets/Medical.svg'
import vehicle_icon from '../assets/Car.svg'
import sos_icon from '../assets/sos-icon.svg'
import maps_police_icon from '../assets/police_map_pin.svg'
import maps_fire_icon from '../assets/fire_map_pin.svg'
import maps_medical_icon from '../assets/hospital_map_pin.svg'
import maps_vehicle_icon from '../assets/vehicle_map_pin.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'
import axios from 'axios'


// To configure Toast notification:
toast.configure()

class GuestUser extends React.Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            useAddress: null,
            ipAddress: null,
            emails_for_sos: null,
            police_cue_state: false,
            fire_cue_state: false,
            medical_cue_state: false,
            vehicle_cue_state: false,
            police_loading: false,
            fire_loading: false,
            medical_loading: false,
            vehicle_loading: false
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this)
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        }
        else {
            toast.warn("Geolocation is not supported by this browse", { position: toast.POSITION.BOTTOM_RIGHT });
        }
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.reverseGeocodeCoordinates();
    }

    reverseGeocodeCoordinates() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${'AIzaSyCvyyFRmRiF4WDVNblK38iSgeKv2LEeyvE'}`)
            .then(response => response.json())
            .then(data => this.setState({
                useAddress: data.results[0].formatted_address
            }))
            .catch(error => toast.warn(error, { position: toast.POSITION.BOTTOM_RIGHT }))
    }

    handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                toast.warn("User denied the request for Geolocation.Don't panic! Just reload the website.", { position: toast.POSITION.BOTTOM_CENTER });
                break;
            case error.POSITION_UNAVAILABLE:
                toast.warn("Location information is unavailable.Don't panic! Just reload the website.", { position: toast.POSITION.BOTTOM_CENTER });
                break;
            case error.TIMEOUT:
                toast.warn("The request to get user location timed out.Don't panic! Just reload the website.", { position: toast.POSITION.BOTTOM_CENTER });
                break;
            case error.UNKNOWN_ERROR:
                toast.warn("An unknown error occurred.Don't panic! Just reload the website.", { position: toast.POSITION.BOTTOM_CENTER });
                break;
            default:
                toast.warn("An unidentified error occurred.Don't panic! Just reload the website.", { position: toast.POSITION.BOTTOM_CENTER });
                break;
        }
    }

    // To send SoS message to users

    police(user_location, email_for_bcc, ip_address) {
        this.setState({
            police_loading: !this.state.police_loading
        })
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding crime emergency",
            "name": `Dear user,`,
            "email_from": "citizen",
            "email_to": "cueasap.help@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `This mail is to notify regarding a crime scene that took place at ${user_location} on ${new Date().toLocaleTimeString()}.`,
            "my_html": `View Map:<br/>  <a href="https://maps.google.com/maps?q=${user_location}&t=&z=14&ie=UTF">Click here...</a>`,
            "contact": `Further user details:<br/>  User IP: ${ip_address}`,
        }, 'user_MOxFwTWXUWLgFndzUELzR')
            .then((result) => {
                this.setState({
                    police_loading: !this.state.police_loading
                })
                toast.success("SoS message is sent to all other users!", { position: toast.POSITION.BOTTOM_CENTER });
            }, (error) => {
                this.setState({
                    police_loading: !this.state.police_loading
                })
                toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_CENTER });
            });
    }

    fire(user_location, email_for_bcc, ip_address) {
        this.setState({
            fire_loading: !this.state.fire_loading
        })
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding fire emergency",
            "name": `Dear user,`,
            "email_from": "citizen",
            "email_to": "cueasap.help@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `Today, a fire broke out at ${user_location} on ${new Date().toLocaleTimeString()}.`,
            "my_html": `View Map:<br/>  <a href="https://maps.google.com/maps?q=${user_location}&t=&z=14&ie=UTF">Click here...</a>`,
            "contact": `Further user details:<br/>  User IP: ${ip_address}`,
        }, 'user_MOxFwTWXUWLgFndzUELzR')
            .then((result) => {
                this.setState({
                    fire_loading: !this.state.fire_loading
                })
                toast.success("SoS message is sent to all other users!", { position: toast.POSITION.BOTTOM_CENTER });
            }, (error) => {
                this.setState({
                    fire_loading: !this.state.fire_loading
                })
                toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_CENTER });
            });

    }

    medical(user_location, email_for_bcc, ip_address) {
        this.setState({
            medical_loading: !this.state.medical_loading
        })
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding medical emergency",
            "name": `Dear user,`,
            "email_from": "citizen",
            "email_to": "cueasap.help@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `There is a need for medical assistance at ${user_location} on ${new Date().toLocaleTimeString()}.`,
            "my_html": `View Map:<br/>  <a href="https://maps.google.com/maps?q=${user_location}&t=&z=14&ie=UTF">Click here...</a>`,
            "contact": `Further user details:<br/>  User IP: ${ip_address}`,
        }, 'user_MOxFwTWXUWLgFndzUELzR')
            .then((result) => {
                this.setState({
                    medical_loading: !this.state.medical_loading
                })
                toast.success("SoS message is sent to all other users!", { position: toast.POSITION.BOTTOM_CENTER });
            }, (error) => {
                this.setState({
                    medical_loading: !this.state.medical_loading
                })
                toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_CENTER });
            });
    }

    vehicle(user_location, email_for_bcc, ip_address) {
        this.setState({
            vehicle_loading: !this.state.vehicle_loading
        })
        emailjs.send('gmail', 'template_a7xa4hf', {
            "subject": "Regarding vehicle emergency",
            "name": `Dear user,`,
            "email_from": "citizen",
            "email_to": "cueasap.help@gmail.com",
            "email_to_bcc": `${email_for_bcc}`,
            "message": `It is regarding a vehicle emergency at ${user_location} on ${new Date().toLocaleTimeString()}.`,
            "my_html": `View Map:<br/>  <a href="https://maps.google.com/maps?q=${user_location}&t=&z=14&ie=UTF">Click here...</a>`,
            "contact": `Further user details:<br/>  User IP: ${ip_address}`,
        }, 'user_MOxFwTWXUWLgFndzUELzR')
            .then((result) => {
                this.setState({
                    vehicle_loading: !this.state.vehicle_loading
                })
                toast.success("SoS message is sent to all other users!", { position: toast.POSITION.BOTTOM_CENTER });
            }, (error) => {
                this.setState({
                    vehicle_loading: !this.state.vehicle_loading
                })
                toast.error("Couldn't send your mail (Sorry for inconvenience!).", { position: toast.POSITION.BOTTOM_CENTER });
            });
    }


    // Links to Map API

    police_maps_link() {
        window.open('https://maps.google.com/maps?q=police&t=&z=14&ie=UTF', '_blank');
    }
    fire_maps_link() {
        window.open('https://maps.google.com/maps?q=fire&t=&z=14&ie=UTF', '_blank');
    }
    medical_maps_link() {
        window.open('https://maps.google.com/maps?q=hospital&t=&z=14&ie=UTF', '_blank');
    }
    vehicle_maps_link() {
        window.open('https://maps.google.com/maps?q=vehicle&t=&z=14&ie=UTF', '_blank');
    }

    // Fetch all emails from server for sos

    get_email_id = () => {
        axios.get('/api/auth/data')
            .then((response) => {
                const data = response.data;
                let email_sos = []
                for (let i = 0; i < data.length; i++)
                    email_sos[i] = data[i].email
                email_sos = email_sos.join(', ')
                this.setState({ emails_for_sos: email_sos })
            })
    }

    get_ip_address = () => {
        fetch('https:/api.ipify.org/?format=json')
        .then(results => results.json())
        .then((data) => {
            const ip = data.ip;
            this.setState({ipAddress: ip})   
        })
    }

    // Cue-buttons state (active/inactive)

    change_police_cue_state = () => {
        this.setState({ police_cue_state: !this.state.police_cue_state })
        setTimeout(() => {
            this.setState({ police_cue_state: !this.state.police_cue_state })
        }, 2500);
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

    // To get invoked immediately after a component is mounted (inserted into the tree).

    componentDidMount = () => {
        // To fetch all emails from server for sos
        this.get_email_id()
        // Tracking user's current location:
        this.getLocation()
        // Tracking user's ip address:
        this.get_ip_address()
    }

    render() {

        return (

            <div class="box-container-guest-user" id="guest-home-user-bg">

                <div class="cue-wrap-btn-map" id="guest-home-btn-map-bg">

                    <div class="cue-wrapper-body">
                        <div class="cue-wrapper-outer">
                            {
                                this.state.police_cue_state
                                    ?
                                    <button class="sos-pole-police-open" id="guest-cue-circle" onClick={() => this.police(this.state.useAddress, this.state.emails_for_sos, this.state.ipAddress)}><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="sos-pole-police-close" id="guest-cue-circle" ><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                            }
                            {
                                this.state.fire_cue_state
                                    ?
                                    <button class="sos-pole-fire-open" id="guest-cue-circle" onClick={() => this.fire(this.state.useAddress, this.state.emails_for_sos, this.state.ipAddress)}><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="sos-pole-fire-close" id="guest-cue-circle" ><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                            }
                        </div>
                        <div class="cue-wrapper-inner">
                            {
                                this.state.police_cue_state ?
                                    <button class="maps-pole-police-open" id="guest-cue-circle" onClick={() => this.police_maps_link()}><img id="guest-img-circle" src={maps_police_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="maps-pole-police-close" id="guest-cue-circle" ><img id="guest-img-circle" src={maps_police_icon} width="52px" alt="" /></button>
                            }
                            <div class="single-box-cue-pole-police" id="guest-cue-box" onClick={() => this.change_police_cue_state()}>
                                {
                                    this.state.police_loading
                                        ?
                                        <Spinner animation="border" style={{ color: "#fff" }} />
                                        :
                                        <div class="img-area-cue-pole"><img id="img-police" src={police_icon} width="30px" alt="" /></div>
                                }
                                <div class="img-text-cue-pole">
                                    <span class="header-text-cue-pole"><strong>POLICE</strong></span>
                                </div>
                            </div>
                            <div class="single-box-cue-pole-fire" id="guest-cue-box" onClick={() => this.change_fire_cue_state()}>
                                {
                                    this.state.fire_loading
                                        ?
                                        <Spinner animation="border" style={{ color: "#fff" }} />
                                        :
                                        <div class="img-area-cue-pole"><img src={fire_icon} width="24px" alt="" /></div>
                                }
                                <div class="img-text-cue-pole">
                                    <span class="header-text-cue-pole"><strong>FIRE</strong></span>
                                </div>
                            </div>

                            {
                                this.state.fire_cue_state ?
                                    <button class="maps-pole-fire-open" id="guest-cue-circle" onClick={() => this.fire_maps_link()}><img id="guest-img-circle" src={maps_fire_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="maps-pole-fire-close" id="guest-cue-circle" ><img id="guest-img-circle" src={maps_fire_icon} width="52px" alt="" /></button>
                            }

                        </div>
                        <div class="cue-wrapper-inner">
                            {
                                this.state.medical_cue_state
                                    ?
                                    <button class="maps-pole-medical-open" id="guest-cue-circle" onClick={() => this.medical_maps_link()}><img id="guest-img-circle" src={maps_medical_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="maps-pole-medical-close" id="guest-cue-circle" ><img id="guest-img-circle" src={maps_medical_icon} width="52px" alt="" /></button>
                            }
                            <div class="single-box-cue-pole-medical" id="guest-cue-box" onClick={() => this.change_medical_cue_state()}>
                                {
                                    this.state.medical_loading
                                        ?
                                        <Spinner animation="border" style={{ color: "#fff" }} />
                                        :
                                        <div class="img-area-cue-pole"><img src={medical_icon} width="30px" alt="" /></div>
                                }
                                <div class="img-text-cue-pole">
                                    <span class="header-text-cue-pole"><strong>MEDICAL</strong></span>
                                </div>
                            </div>
                            <div class="single-box-cue-pole-vehicle" id="guest-cue-box" onClick={() => this.change_vehicle_cue_state()}>
                                {
                                    this.state.vehicle_loading
                                        ?
                                        <Spinner animation="border" style={{ color: "#fff" }} />
                                        :
                                        <div class="img-area-cue-pole"><img src={vehicle_icon} width="40.3px" alt="" /></div>
                                }
                                <div class="img-text-cue-pole">
                                    <span class="header-text-cue-pole"><strong>VEHICLE</strong></span>
                                </div>
                            </div>
                            {
                                this.state.vehicle_cue_state
                                    ?
                                    <button class="maps-pole-vehicle-open" id="guest-cue-circle" onClick={() => this.vehicle_maps_link()}><img id="guest-img-circle" src={maps_vehicle_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="maps-pole-vehicle-close" id="guest-cue-circle" ><img id="guest-img-circle" src={maps_vehicle_icon} width="52px" alt="" /></button>
                            }
                        </div>
                        <div class="cue-wrapper-outer">
                            {
                                this.state.medical_cue_state
                                    ?
                                    <button class="sos-pole-medical-open" id="guest-cue-circle" onClick={() => this.medical(this.state.useAddress, this.state.emails_for_sos, this.state.ipAddress)}><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="sos-pole-medical-close" id="guest-cue-circle" ><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                            }
                            {
                                this.state.vehicle_cue_state
                                    ?
                                    <button class="sos-pole-vehicle-open" id="guest-cue-circle" onClick={() => this.vehicle(this.state.useAddress, this.state.emails_for_sos, this.state.ipAddress)}><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                                    :
                                    <button class="sos-pole-vehicle-close" id="guest-cue-circle"><img id="guest-img-circle" src={sos_icon} width="52px" alt="" /></button>
                            }
                        </div>
                    </div>
                    {
                            <div class="single-box-map" id="guest-map-box" style={{ marginLeft: 60, marginRight: 60 }} >
                                <img class="map-api" src={map_static_none} width="auto" height="auto" alt="" />
                            <h4 style={{ paddingTop: 6 }}>Login to track your location! If you are a new user then Signup to create your own account</h4>
                            </div>
                    }
                </div>


                <div class="container" id="box-card-ui">
                    <div class="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="card-content">
                            <div class="card-img-area"></div>
                            <h2>01</h2>
                            <h3>Location Tracking</h3>
                            <p>Tracks the user location via maps</p>
                        </div>
                    </div>
                    <div class="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="card-content">
                            <div class="card-img-area"></div>
                            <h2>02</h2>
                            <h3>Save your Souls</h3>
                            <p>Sends SoS message to other citizens</p>
                        </div>
                    </div>
                    <div class="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="card-content">
                            <div class="card-img-area"></div>
                            <h2>03</h2>
                            <h3>Contact Authority</h3>
                            <p>To contact the service authorities via maps</p>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(GuestUser);