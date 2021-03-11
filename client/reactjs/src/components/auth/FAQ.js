import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';


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

                <a onClick={this.toggle} href="#FAQ">FAQ</a>

                <Modal class="terms-modal" isOpen={this.state.modal} toggle={this.toggle} >

                    <ModalHeader toggle={this.toggle}>FAQ's</ModalHeader>
                    <ModalBody style={{ 'max-height': 'calc(85vh - 210px)', 'overflow-y': 'auto', 'padding': '16px', 'marginBottom': '10px' }}>

                        

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default FAQ;