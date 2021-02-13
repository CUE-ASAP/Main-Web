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
        return (
            <Container>
                <section id="landing">
                    <div class="container">
                        <div class="row custom-section d-flex align-items-center">
                            <div class="col-12 col-lg-4" id="home-text">
                                <h1>Your Location</h1>
                                <h3>Coordinates!</h3>
                                <Button onClick={this.getLocation}>Get Coordinates</Button>
                                <p style={{ paddingTop: 16 }}>Latitude: { this.state.latitude}</p>
                                <p style={{}}>Longitude: { this.state.longitude}</p>
                                <p style={{}}>Address: { this.state.useAddress}</p>
                            </div>
                            <div class="col-12 col-lg-8">
                            {
                                this.state.latitude && this.state.longitude ?
                                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${'AIzaSyBHgWojYObkZUzJRtOrGH9dEZHXPXQMwFE'}`} alt='' />
                                :
                                null
                            }
                            </div>
                        </div>
                    </div>
                </section>

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
