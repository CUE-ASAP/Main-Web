import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';


class TermsServiceModal extends Component {

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

                <a onClick={this.toggle} href="#Terms-of-Service">Terms of Service</a>

                <Modal class="terms-modal" isOpen={this.state.modal} toggle={this.toggle} >

                    <ModalHeader toggle={this.toggle}>Service Agreement of CUE ASAP Platform</ModalHeader>
                    <ModalBody style={{ 'max-height': 'calc(85vh - 210px)', 'overflow-y': 'auto', 'padding':'16px' ,'marginBottom':'10px'}}>
                        
                        <h6>10 minutes 9 seconds reading.</h6>
                        <br/>

                        <h5>Welcome to CUE ASAP Platform!</h5>
                            <p>
                            Before accepting the Agreement, you are supposed to thoroughly read all contents of the Agreement, and fully know its terms, especially restrictive clauses or exceptions. Restrictive clauses or exceptions are bold or highlighted in other forms to catch your attention. In case of any doubt about the terms of the Agreement, please contact the relevant business department of CUE ASAP. You are not allowed to use the service before you have read and accepted all terms of the Agreement, relevant agreements and rules, etc. Once you select "agree and submit the Agreement" (see registration page for detailed wordings) and complete the registration procedure, or you use the service in any form, it will be deemed that you have read and agreed with the restriction of the Agreement and rules above. In case of any breach of the Agreement, CUE ASAP has the right to unilaterally restrict, suspend or terminate the service for you, and has the right to investigate your relevant responsibilities.
                            <br /><br />
                            The Service Agreement (hereinafter referred to as "the Agreement") is signed by you and CUE ASAP (hereinafter referred to as "CUE ASAP"). It includes (but not limited to) Privacy Policy of CUE ASAP Platform and other contents. In case of change, CUE ASAP will announce such change on its official website without further notification. Upon announcement, the changed agreement and rules become a part of the Agreement automatically, without further notification to you for your consent. In case of objection to such relevant changes, stop using CUE ASAP's service; if you keep using it, it will be deemed that you hold no objections against the changed rules and agree to abide by them.
                            </p>
                        <br/>

                        <h5>I. Definitions of Terms</h5>
                        <br />
                            <p>
                            &nbsp;1.1 Licensed software refers to software systems developed by CUE ASAP, downloaded from the platform, and installed and applied in specified system mobile terminals or the Web-App.
                            <br /><br />
                            &nbsp;1.2 Services refer to services provided for you by CUE ASAP. You can use such services on the mobile and web terminal with the licensed software.
                            </p>
                        <br />

                        <h5>II. Service</h5>
                        <br />
                            <p>
                            &nbsp;2.1 CUE ASAP offers you intelligent life equipment management services, based on which you can access the intelligent terminal on CUE ASAP Cloud Platform through the CUE ASAP Control, and realize interlinkage among intelligent equipment. Service contents include intelligent equipment management, scene interlinkage and analysis report, etc. Such functions may be optimized or modified according to changes of users' demands or judgment of the service supplier, and service supply may be suspended due to regular and irregular maintenance.
                            </p>
                        <br />

                        <h5>III. Scope of Service</h5>
                        <br />
                            <p>
                            &nbsp;3.1 CUE ASAP grants you the right to use the product based on this software.
                            <br /><br />
                            &nbsp;3.2 You are prohibited to license, sell, lease, transfer, issue the product in any form, or use the product for other commercial purposes.
                            <br /><br />
                            &nbsp;3.3 Due to limitations on software adaptation platforms and terminals, you can only use the licensed software in the authorized system platform and terminal; if you install the licensed software on other terminal equipment, it may damage your hardware or software function.
                            <br /><br />
                            &nbsp;3.4 You acknowledge that the licensed software can only be used for non-commercial purposes and installation, application and running of the licensed software is prohibited. If such commercial operation is necessary, prior written authorization and permission from CUE ASAP shall be obtained.
                            <br /><br />
                            &nbsp;3.5 CUE ASAP may change, upgrade or transfer the licensed software or relevant functions from time to time, and may add new functions or services in the licensed software system. If no separate agreements are accompanied by the aforesaid new functions or services, you are entitled to the corresponding functions and services, which is also subject to the Agreement.
                            <br /><br />
                            &nbsp;3.6 You shall be responsible for the accuracy, reliability, integrity and legality of input data and legality of the way in which you obtain the data, and shall back up data and information from time to time. You shall bear all risks for damage and loss of such information.
                            <br /><br />
                            &nbsp;3.7 You shall probably keep your account number and password. In case of any safety loophole for your account (including but not limited to divergence of user password), you shall notify CUE ASAP in time, and CUE ASAP will assist you in taking relevant measures. Otherwise, all behaviors related to your account shall be assumed by you, and you will bear all responsibilities.**
                            </p>
                        <br />

                        <h5>IV. A Third Party</h5>
                        <br />
                            <p>
                            &nbsp;4.1 You acknowledge that certain services of CUE ASAP are based on software or services provided by a third party. Such service is set to facilitate your application and necessary legal authorization is obtained from the third party.
                            <br /><br />
                            &nbsp;4.2 The product includes certain information and services of the third party. CUE ASAP neither controls nor bears responsibility for information and services of the third party.
                            <br /><br />
                            &nbsp;4.3 You acknowledge that CUE ASAP cannot guarantee that the licensed software always uses or contains such services, or that other software provided by the same third party will be used in the future. Likewise, it may use similar services supplied by another third party. Upon application, the aforesaid corresponding software or services are subject to this Agreement.**
                            </p>
                        <br />

                        <h5>V. Service Application Standard</h5>
                        <br />
                            <p>
                            &nbsp;5.1 You shall use the licensed software in a normal manner. The following ways are in breach of the application standard:
                                <br /><br />
                                &emsp;1. Issue or share computer virus, worms, malicious codes, or software that deliberately damages or changes computer system or data;
                                <br />
                                &emsp;2. Collect information or data of other users without authorization, for example, email address and the like;
                                <br />
                                &emsp;3. Maliciously use the product automatically, causing overload to the server, or interfere with or damage web server and network links in other forms.
                                <br />
                                &emsp;4. Attempt to visit server data or communication data of the product without authorization;
                                <br />
                                &emsp;5. Interfere with or damage the production application by other users.
                                <br /><br />
                            &nbsp;5.2 You understand and agree that:
                                <br />
                                &emsp;1. CUE ASAP will determine whether you are involved in violation of standards above, and suspend or terminate your application license according to determination results or take other restrictions according to agreements.
                                <br />
                                &emsp;2. CUE ASAP will directly delete information in breach of laws, or infringing others' legal rights, or in breach of the Agreement issued by you when using the licensed software.
                                <br />
                                &emsp;3. If a third party suffers from damage due to your breach of application standards, you shall independently bear legal responsibility in your name, and protect and indemnify CUE ASAP from losses or additional expenses generated therefrom. Otherwise, CUE ASAP has the right to claim compensation.
                                <br />
                                &emsp;4. If CUE ASAP suffers from any loss due to your breach of relevant laws or the Agreement, you shall compensate CUE ASAP for losses and (or) expenses generated therefrom.
                            </p>
                        <br />

                        <h5>VI. Information Content Standard</h5>
                        <br />
                        <p>
                            &nbsp;6.1 You promise that you will not conduct any act in breach of laws or improper behaviors by using the service, such act and behavior include (but not limited to):
                            <br /><br />
                            &nbsp;6.2 Uploading, transferring or sharing information containing one of the following contents:
                            <br /><br />
                            &emsp;1. Opposing the basic principles determined in the Constitution;
                            <br />
                            &emsp;2. Endangering state safety, disclosing state secret, subverting state power and sabotaging state unity;
                            <br />
                            &emsp;3. Damaging state honor and benefit;
                            <br />
                            &emsp;4. Inciting national hatred and discrimination and sabotaging national unity;
                            <br />
                            &emsp;5. Destroying religious policy of the state and advocating heresy and feudalistic superstition;
                            <br />
                            &emsp;6. Spreading rumors, disturbing social order and destroying social stability;
                            <br />
                            &emsp;7. Spreading gambling, violence, murder and terror or abetting a crime;
                            <br />
                            &emsp;8. Insulting or slandering others and infringing on the legal rights and interests of others;
                            <br />
                            &emsp;9. Containing contents of sham, degradation, harm, threat, infringement to others' privacy, harassment, infringement, slander, coarseness, indecency, or morally repulsive contents;
                            <br />
                            &emsp;10. Containing other contents restricted or forbidden by applicable laws, regulations, rules, provisions and other legal standards
                        </p>
                        <br />

                        <h5>VII. Private Policy and Data</h5>
                        <br />
                            <p>
                            &nbsp;7.1 It is crucial for CUE ASAP to protect your personal information. CUE ASAP prepares the Privacy Policy of CUE ASAP  Platform, in which contents related to ownership and protection of intellectual property, collection, use, share, storage and protection, etc. of your information are disclosed. You are suggested to thoroughly read the Privacy Policy of the CUE ASAP  Platform.
                            <br /><br />
                            &nbsp;7.2 CUE Assist which is the AI chat, also protects your chat with the bit and any misbehaving or vulnerable activities will be leading to the user termination (BAN).
                            <br /><br />
                            &nbsp;7.3 Your data is more important to CUE ASAP'S data misuse is banned for the organization.
                            <br /><br />
                            &nbsp;7.4 The chat system will be an End-to-End encryption even CUE ASAP or the CUE Assist cannot track your information. So, you're safe.
                        </p>
                        <br />

                        <h5>VIII. Exception Clauses</h5>
                        <br />
                            <p>
                            &nbsp;8.1 Unless otherwise specified in laws and regulations, CUE ASAP will do its best to ensure the security, validity, accuracy and reliability of the licensed software and technologies and information involved, but CUE ASAP is unable to guarantee the same due to restriction by available technologies nowadays.
                            <br /><br />
                            &nbsp;8.2 You understand that CUE ASAP will not assume responsibility for direct or indirect losses caused by force of circumstances and default of a third party.
                            <br /><br />
                            &nbsp;8.3 You shall be responsible for personal injury or incidental or indirectly injury caused by or related to one of the following accidents:
                                    <br /><br />
                                    &emsp;1. A third party uses the licensed software or changes your data without permission;
                                    <br />
                                    &emsp;2. Expenses and losses produced by using the licensed software;
                                    <br />
                                    &emsp;3. You're misunderstanding of the licensed software;
                                    <br />
                                    &emsp;4. Other losses related to licensed software caused by reasons not attributable to CUE ASAP.
                            <br /><br />
                            &nbsp;8.4 Any other licensed software-derived software not developed and released by CUE ASAP or the development and release are not granted by CUE ASAP is illegal software. Downloading, installing and using such software may cause unpredictable risks. CUE ASAP shall be free from legal responsibilities and disputes generated therein and CUE ASAP shall have the right to suspend or terminate application licenses and/or other services.
                            <br /><br />
                            &nbsp;8.5 You have been informed that the usage of CUE ASAP  Platform involves Internet service, which may be affected by unstable factors in all links. Although CUE ASAP has taken safeguard measures, the service may be suspended, terminated, delayed, suffered from application restriction or application failure due to inherent defects of Internet and e-communication as well as factors beyond reasonable control of any party to the Agreement (including but not limited to fire, flood, terrorist attack, pestilence, natural disasters, riot, terminal virus, hacker attack, network fault and terminal fault). You hereby agree to bear foregoing risks and agree that CUE ASAP is free from any responsibility when normal running of services are influenced by the occurrence of foregoing risks.
                        </p>
                        <br />

                        <h5>IX. Agreement Termination and Breach of Agreement</h5>
                        <br />
                        <p>
                            &nbsp;9.1 You should understand that you shall use the licensed software according to authorization scope, respect intellectual property of software and contents contained in the software, and perform obligations according to the Agreement when using CUE ASAP's services. CUE ASAP will terminate the application license if you are in material breach of the Agreement.
                            <br /><br />
                            &nbsp;9.2 Your application of the software relies on supporting services supplied by CUE ASAP's related companies. Breach of terms, agreements, rules, annunciation and other relevant regulations of CUE ASAP and its related companies may cause failure in normal usage of licensed software, in which case, CUE ASAP shall be entitled to terminate the application license, or take measures to restrain your application license or other rights and interests controlled by CUE ASAP as agreed in the Agreement, including suspension or termination of your application license.
                            <br /><br />
                            &nbsp;9.3 In case of your breach of the Agreement or other agreements signed with CUE ASAP, CUE ASAP shall have the right to notify the related companies, requiring them to take restrictive measures to your rights and interests, including requiring related companies to suspend or terminate supplying part or whole services for you, and legally announce your breach of agreement on websites run or actually controlled by them.
                            <br /><br />
                            &nbsp;9.4 The licensed software is downloaded from the downloading platform, and you shall abide by stipulations of the download platform, system platform and terminal manufacture on application ways and restrictions of the licensed software. If the above mentioned third party confirms that you are in breach of the agreement and CUE ASAP's treatment is required, CUE ASAP may terminate your application license at the third party's request.
                            <br /><br />
                            &nbsp;9.5 When the application license terminates, you shall stop using the licensed software and destroy all copies.
                            <br /><br />
                            &nbsp;9.6 You must bear all compensation responsibilities if CUE ASAP and other users suffer from losses caused by your breach of terms in the Agreement.
                        </p>
                        <br />

                        <h5>X. Severability and Laws</h5>
                        <br />
                        <p>
                            &nbsp;10.1 Effectiveness, explanation, change, execution and dispute settlement. If no relevant laws and regulations are available, reference to general international business practices and (or) industrial practices shall be made.
                            <br /><br />
                            &nbsp;10.2 Dispute arising from or in connection with the Agreement may be settled by you and CUE ASAP through friendly negotiation.
                            <br /><br />
                            &nbsp;10.3 Any invalid agreement or false agreement is not acceptable, and it will not influence the effectiveness of other terms or any part thereof, and you and CUE ASAP shall perform the valid terms sincerely.
                            <br /><br />
                            &nbsp;10.4 I will respect the above terms and conditions truthfully and the agreement you have signed with CUE ASAP.
                        </p>
                        <br />
                        
                        </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default TermsServiceModal;