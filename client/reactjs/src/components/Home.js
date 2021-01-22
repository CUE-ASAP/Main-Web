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
import './Home.css'

function Home() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container:container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/contact-us.json')
        })
    },[])
 
    return (
            <Container>
            <section id="landing">
            <div class="container">
                <div class="row custom-section d-flex align-items-center">
                    <div class="col-12 col-lg-4" id="home-text">
                        <h1>Stay Logged</h1>
                        <h1>Be Safe!</h1>
                        <h3>We are there to help you.</h3>
                        <p style={{marginTop:16}}>CUE-ASAP is a solution that can help us to survive in this world without about any kind of threats and accidents.</p>
                    </div>
                    <div class="col-12 col-lg-8" ref={container}>   
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
 

export default Home;
