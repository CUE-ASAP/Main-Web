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
                <section class="home-glass">
                    <div class="home-dashboard" id="home-text">
                        <div id="home-guest-img"></div>
                        <h3 style={{margin:0, padding:0}}>Get Started</h3>
                        <h5 style={{padding:0}}>as</h5>
                        <button id="home-guest-btn">Guest</button>
                        <p>CUE-ASAP is a solution that can help us to survive in this world without about any kind of threats and accidents.</p>
                    </div>
                    <div class="home-gist" id="home-text">
                        <h1 style={{marginTop:10}}>Stay Logged</h1>
                        <h1>Be Safe!</h1>
                        <h3>We are there to help you.</h3>
                        <div id="home-gist-welcome" ref={container} ></div>
                    </div>
                </section>
                <div class="home-circle-1"></div>
                <div class="home-circle-2"></div>
            </div>

            {/* About us */}
            <div class="about-us-landing-section" id="About us">
                <section class="about-us-glass">
                    <div class="about-us-gist" id="about-text">
                        <h2>Just have a look who we are!</h2>
                    </div>
                    <div class="about-us-glass-inner" id="about-text">
                        <div class="about-us-box-wrapper">
                            <div class="about-us-single-box">
                                <div id="about-us-single-box-details">
                                <h3>Dinesh Kumar R</h3>
                                <h4>Bachelors of Engineering Student</h4>
                                <h5>CSE</h5>
                                </div>
                            </div>
                            <div class="about-us-single-box">
                                <div id="about-us-single-box-details">
                                <h3>Joshua Prem Cyril S</h3>
                                <h4>Bachelors of Engineering Student</h4>
                                <h5>CSE</h5>
                                </div>
                            </div>
                            <div class="about-us-single-box">
                                <div id="about-us-single-box-details">
                                <h3>Vimal Kannan P D</h3>
                                <h4>Bachelors of Engineering Student</h4>
                                <h5>CSE</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Service */}
            <div class="service-landing-section" id="Services">
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
                <section class="contact-glass">
                    
                </section>
            </div>

        </div>

    );
}


export default Home;