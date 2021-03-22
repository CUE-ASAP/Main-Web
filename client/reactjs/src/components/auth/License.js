import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

import licence_icon from '../../assets/licence.svg'


class License extends Component {

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

                <a onClick={this.toggle} id="contact-footer-links" href="#License">License</a>
                    <Modal id="cue-license-modal" isOpen={this.state.modal} toggle={this.toggle} >

                    <ModalHeader id="cue-license-modal-header"><a href><img src={licence_icon} style={{ height: 40, width: 40, paddingRight: 10 }} alt="" ></img></a>License</ModalHeader>
                        <ModalBody id="cue-license-modal-body" style={{ 'max-height': 'calc(85vh - 210px)', 'overflow-y': 'auto', 'padding': '16px' }}>

                            <div id="cue-license">
                                <h5>MIT License</h5>
                                <br />
                                <h6>Copyright &copy; 2021 CUE ASAP</h6>
                                <br />
                                <p>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                            <br /><br />
                            The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.
                            <br /><br />
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE.
                       </p>
                            </div>

                        </ModalBody>
                        <ModalFooter id="cue-license-modal-footer" >
                            <Button color="primary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>

            </div>
        );
    }
}

export default License;