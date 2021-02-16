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
import fire_icon from '../assets/Fire Icon.png'
import police_icon from '../assets/Police icon.png'
import medical_icon from '../assets/Med Icon.png'
import vehicle_icon from '../assets/Car Icon.png'

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
            alert("Geolocation is not supported by this browser");
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
                useAddress: data.results[3].formatted_address
            }))
            .catch(error => alert(error))
    }

    handleLocationError(error){
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
        }
    }

    render(){

        // Tracking user's current location:
        this.getLocation()
        
        return (

            <Container>

                <div class="box-area-map">
                    <div class="box-area-cue">
                        <div class="single-box-cue">
                            <div class="img-area-cue"><img src={police_icon} width="30px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>POLICE</strong></span>
                            </div>
                        </div>
                        <div class="single-box-cue">
                            <div class="img-area-cue"><img src={medical_icon} width="30px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>MEDICAL</strong></span>
                            </div>
                        </div>
                    </div>
                    <div class="box-area-cue" style={{ marginLeft: 25 , marginRight: 60}}>
                        <div class="single-box-cue">
                            <div class="img-area-cue" ><img src={fire_icon} width="24px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>FIRE</strong></span>
                            </div>
                        </div>
                        <div class="single-box-cue">
                            <div class="img-area-cue"><img src={vehicle_icon} width="40.3px"/></div>
                            <div class="img-text-cue">
                                <span class="header-text-cue"><strong>VEHICLE</strong></span>
                            </div>
                        </div>
                    </div>
                
                    <div class="single-box-map" id="home-text">
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
