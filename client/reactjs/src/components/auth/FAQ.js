import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

import faq_icon from '../../assets/faq.svg'

class FAQ extends Component {

    state = {
        modal: false,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>

                <a onClick={this.toggle} id="contact-footer-links" href="#FAQ">FAQ</a>

                <Modal class="terms-modal" isOpen={this.state.modal} toggle={this.toggle} >

                    <ModalHeader id="cue-faq-modal-header"><a href><img src={faq_icon} style={{ height: 40, width: 40, paddingRight: 10 }} alt="" ></img></a>FAQ's</ModalHeader>
                    <ModalBody id="cue-faq-modal-body" style={{ 'max-height': 'calc(85vh - 210px)', 'overflow-y': 'auto', 'padding': '16px' }}>

                        <div id="cue-faq">

                        <h5>What is CUE ASAP ?</h5>
                        <p>CUE-ASAP is a solution that can help us to survive in this world without about any kind of threats and accidents.</p>
                        <br />
                        <h5>What are the terms and names that CUE ASAP has?</h5>
                        <p>CUE Assist,CUE Member,CUE Mentor,CUE Dev,CUE Contributor,CUE Supporter,CUE Authority and CUE Committee.</p>
                        <br />
                        <h5>Who is CUE Assist?</h5>
                        <p>CUE Assist is a chatbot used to conduct an on-line chat conversation with you.</p>
                        <br />
                        <h5>Is it mandatory to be CUE Member to use your website?</h5>
                        <p>No, it is not mandatory, it's absolutely your choice, anyhow you can use time limited guest account to access our website, but some features are only available to CUE Members. If you are eager to know what are those features just create your own account and become a CUE Member to have unlimited access to our website.</p>
                        <br />
                        <h5>How many languages does this CUE Assist support?</h5>
                        <p>Currently our CUE Assist supports English,Tamil and Tanglish.</p>
                        <br />
                        <h5>Will my details be shared with the authority?</h5>
                        <p> Only when your trigger the panic button, or call for an emergency, other than that we don't save your location or live track you.</p>
                        <br />
                        <h5>Why do you need my coordinate/ location?</h5>
                        <p>To share your location to the nearest emergency station. We don't sell your data for profit, read the terms and conditions.</p>
                        <br />
                        <h5>How to login and register to become a CUE member?</h5>
                        <p>Go to top right corner of our website and you will see Signup and Login buttons. Enter the required information and boom you're officially a CUE Member.</p>
                        <br />
                        <h5>Is there any social media or group that I can join?</h5>
                        <p>Yes, you can connect with us via Discord, Slack, Gmail or GitHub</p>
                        <br />
                        <h5>Where can I see the license for the code?</h5>
                        <p>You can see our license of our at the bottom our website</p>
                        <br />
                        <h5>What kind of frameworks that CUE ASAP uses?</h5>
                        <p>We use React, Node.js, Express.js and Mongodb </p>
                        <br />
                        <h5>Why are you using tawk.io?</h5>
                        <p>It is a help center which monitors you in real time and also connects you with as directly. You can also post your queries and feedbacks here. We will respond to you ASAP!</p>

                        </div>

                    </ModalBody>
                    <ModalFooter id="cue-faq-modal-footer">
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default FAQ;