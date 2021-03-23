import React, { useEffect, useRef } from 'react'
import { Spinner } from 'reactstrap';
import lottie from 'lottie-web'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import GuestUser from './GuestUser'
import './Home.css'

function Home() {

    const container = useRef(null);
    const [guest_log, set_guest_log] = React.useState(false)
    const [guest_log_timer, set_guest_log_timer] = React.useState(300000)  
    const [loading, set_loading] = React.useState(false)


    // Access to Guest user (with expiry time)
    const guest_user_loading = React.useCallback(() => {
        set_loading(true);
        setTimeout(() => {
            guest_user(guest_log_timer);  
        }, 2000)
    },[guest_log_timer])

    const guest_user = (guest_log_timer) => {
        set_loading(false);
        set_guest_log_timer(300000);
        set_guest_log(true);
        setTimeout(() => {
                set_guest_log(false)
            }, guest_log_timer)
    }

    // Back to home from guest page
    const back_to_home_loading = React.useCallback(() => {
        set_loading(true);
        setTimeout(() => {
            back_to_home()
        }, 2000)
    },[])

    const back_to_home = () => {
        set_loading(false);
        set_guest_log_timer(0);
        set_guest_log(false);
        window.location.reload()
    }

    // Lottie Animation container
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
            
            {
            guest_log
            ?
              // {/* Guest User */}
            <div class="guest-user-ui" id="Cue">
                <div class="back-to-home" >
                    <div class="back-to-home-glass-inner">
                        <div id="back-to-home-glass-inner-info">
                            <h5>Guest access will expire in </h5>
                        </div>
                        <div id="back-to-home-glass-inner-timer">
                                    <CountdownCircleTimer
                                        isPlaying
                                        duration={300}
                                        size={60}
                                        strokeWidth={4}
                                        colors={[
                                            ['#1a2980', 0.33],
                                            ['#2f80ed', 0.33],
                                            ['#b33', 0.33],
                                        ]}
                                    >
                                        {({ remainingTime }) => `${Math.floor(remainingTime / 60) > 9 ? Math.floor(remainingTime / 60) : '0' + Math.floor(remainingTime / 60)}:${remainingTime % 60 > 9 ? remainingTime % 60 : '0' + remainingTime % 60}`}
                                    </CountdownCircleTimer>
                        </div>
                        <div id="back-to-home-glass-inner-text">
                                <h5>Back to</h5>
                                <button id="back-to-home-btn" onClick={back_to_home_loading}>
                                {loading
                                ?
                                <Spinner animation="border" size="sm" style={{ color: "#fff" }} />
                                :
                                `Home`
                                }
                                </button>
                        </div>
                    </div>
                </div>
                <GuestUser/>
            </div>
            :
              // {/* Home */}
            <div class="home-landing-section" id="Cue">       
                <section class="home-glass">
                    <div class="home-dashboard" id="home-text">
                        <div id="home-guest-img"></div>
                        <h3 style={{margin:0, padding:0}}>Get Started</h3>
                        <h5 style={{padding:0}}>as</h5>
                                <a href="#Cue" >
                                <button id="home-guest-btn" onClick={guest_user_loading}>
                                {loading
                                ?
                                <Spinner animation="border" size="sm"style={{ color: "#fff" }} />
                                :
                                `Guest`
                                }
                                </button></a>
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
            }


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
                    <div class="contact-wrapper">
                        <div class="contact-gist">
                            <h3>For any assistance contact:</h3>
                        </div>
                        <div class="contact-glass-inner">
                            <div id="contact-glass-inner-img-area"></div>
                            <div id="contact-glass-inner-img-text">
                                <h5><a href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3Dcueasap.help%40gmail.com%26bcc%3Dcueasap.help%40gmail.com%2Ckurtzcolonel848%40gmail.com%26subject%3DHello%2520Cue%2520Dev,%26body%3D<CUE-ASAP>%2520We%2520hope%2520that%2520you%2520are%2520enjoying%2520our%2520CUE-ASAP%2520Platform.%2520If%2520you%2520have%2520any%2520queries%2520state%2520it%2520below:%2520</CUE-ASAP>" target="_blank" rel="noreferrer">cueasap.help@gmail.com</a></h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    );
}


export default Home;