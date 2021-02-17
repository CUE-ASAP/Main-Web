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


// To configure Toast notification:
toast.configure()

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            useAddress: null
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

    police() {
        toast.success("You clicked police.", { position: toast.POSITION.BOTTOM_RIGHT });
    }
    
    fire() {
        toast.success("You clicked fire.", { position: toast.POSITION.BOTTOM_RIGHT });
    }

    medical() {
        toast.success("You clicked medical.", { position: toast.POSITION.BOTTOM_RIGHT });
    }

    vehicle() {
        toast.success("You clicked vehicle.", { position: toast.POSITION.BOTTOM_RIGHT });
    }


    render(){

        // Tracking user's current location:
        this.getLocation()
        
        return (

            <Container>

                <div class="box-area-map">
                    <div class="box-area-cue" style={{marginLeft:20,marginRight:20}}>
                        <div class="single-box-cue" onClick={this.police} >
                                <div class="img-area-cue"><img src={police_icon} width="30px" /></div>
                                <div class="img-text-cue">
                                    <span class="header-text-cue"><strong>POLICE</strong></span>
                                </div>
                        </div>
                        <div class="single-box-cue" onClick={this.medical} >
                            <div class="img-area-cue"><img src={medical_icon} width="30px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>MEDICAL</strong></span>
                            </div>
                        </div>
                    </div>
                    <div class="box-area-cue" style={{ marginLeft: 20, marginRight: 20 }}>
                        <div class="single-box-cue-2" onClick={this.fire}>
                            <div class="img-area-cue" ><img src={fire_icon} width="24px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>FIRE</strong></span>
                            </div>
                        </div>
                        <div class="single-box-cue-2" onClick={this.vehicle}>
                            <div class="img-area-cue"><img src={vehicle_icon} width="40.3px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>VEHICLE</strong></span>
                            </div>
                        </div>
                    </div>
                
                    <div class="single-box-map" id="home-text" style={{ marginLeft: 60 , marginRight:60}}>
                        {
                            this.state.latitude && this.state.longitude ?
                                <img class="map-api" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=300x260&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${'AIzaSyBHgWojYObkZUzJRtOrGH9dEZHXPXQMwFE'}`} alt='' />
                                :
                                null
                        }
                        <h4 style={{paddingTop:6}}>{this.state.useAddress}</h4>
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

export default Home;
