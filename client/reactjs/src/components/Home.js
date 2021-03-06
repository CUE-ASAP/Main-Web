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
import lottie from 'lottie-web'
import Logo from '../assets/Cue_logo_v2.svg'
import './Home.css'

function Home() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/contact-us.json')
        })
    }, [])

    return (


        <div class="box-container">

            {/* Home */}
            <div class="home-landing-section" id="Home">
                <div class="single-box-landing" id="home-text">
                    <h1>Stay Logged</h1>
                    <h1>Be Safe!</h1>
                    <h3>We are there to help you.</h3>
                    <p style={{ marginTop: 16 }}>CUE-ASAP is a solution that can help us to survive in this world without about any kind of threats and accidents.</p>
                </div>
                <div class="single-box-landing" ref={container}>
                </div>
            </div>

            {/* About us */}
            <div class="about-us-landing-section" id="About us">
                <div class="single-box-landing" >
                <img src={Logo} width="300px" height="300px"></img>
                </div>
                <div class="single-box-landing" id="home-text">
                    <h1>About us</h1>
                    <h1>Be Safe!</h1>
                    <h3>We are there to help you.</h3>
                    <p style={{ marginTop: 16 }}>CUE-ASAP is a solution that can help us to survive in this world without about any kind of threats and accidents.</p>
                </div>
            </div>

            {/* Service */}
            <div class="service-landing-section" id="Service">
                <div class="single-box">
                    <div class="img-area"></div>
                    <div class="img-text">
                        <span class="header-text"><strong>Responsive Web Design</strong></span>
                        <p>This website is responsive across a wide range of devices</p>
                    </div>
                </div>
                <div class="single-box">
                    <div class="img-area"></div>
                    <div class="img-text">
                        <span class="header-text"><strong>Maps API</strong></span>
                        <p>Your exact location and services are provided using Maps API</p>
                    </div>
                </div>
                <div class="single-box">
                    <div class="img-area"></div>
                    <div class="img-text">
                        <span class="header-text"><strong>CUE-Assist</strong></span>
                        <p>A chatbot used to conduct an on-line chat conversation for user queries</p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div class="contact-landing-section" id="Contact">
                <div class="single-box-landing" >
                    <img src={Logo} width="300px" height="300px"></img>
                </div>
                <div class="single-box-landing" id="home-text">
                    <h1>Contact us</h1>
                    <h1>Be Safe!</h1>
                    <h3>We are there to help you.</h3>
                    <p style={{ marginTop: 16 }}>CUE-ASAP is a solution that can help us to survive in this world without about any kind of threats and accidents.</p>
                </div>
            </div>

        </div>

    );
}


export default Home;