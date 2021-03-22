import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavbar';

import { Provider } from 'react-redux';
import store from './store'
import {loadUser} from './actions/authActions';
import { Component } from 'react';
import GetStarted from './components/GetStarted';
import discord from "./assets/discord.svg"
import github from "./assets/github.svg"
import slack from "./assets/slack.svg"
import {NavItem} from 'reactstrap'
import UserAgreementModal from './components/auth/UserAgreementModal'
import FAQ from './components/auth/FAQ'
import License from './components/auth/License'


class App extends Component{

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Provider store={store}>
      <div className="App">
          <AppNavBar />
          <GetStarted />
          <div class="contact-footer">
            <div id="footer-elements">
              <h3>Quick links</h3>
              <ul>
              <li><a id="contact-footer-links" href="https://tawk.to/cueassist" target="_blank" rel="noreferrer" >Help Center</a></li>
              <li><a id="contact-footer-links" href="https://maps.google.com/maps?q&t=&z=14&ie=UTF" target="_blank" rel="noreferrer" >Your Location</a></li>
              </ul>
            </div>
          <div id="footer-elements">
            <h3>Support</h3>
            <ul>
              <NavItem><FAQ/></NavItem>
              <NavItem><License/></NavItem>
              <NavItem><UserAgreementModal/></NavItem>
            </ul>
          </div>
          <div id="footer-elements">
            <h3>Connect with us</h3>
            <div id="connect-with-us-img-area">
              <a href="https://discord.gg/BJHHxkMq8s" target="_blank" rel="noreferrer" ><img src={discord} width="22px" alt="" /></a>
              <a href="https://github.com/CUE-ASAP" target="_blank" rel="noreferrer" ><img src={github} width="22px" alt="" /></a>
              <a href="https://join.slack.com/t/cueasap/shared_invite/zt-ng1p11v7-ubghuV9TzGp3XtN5KhIZ6Q" target="_blank" rel="noreferrer" ><img src={slack} width="22px" alt="" /></a>
            </div>
          </div>
          </div>
          <div class="main-footer">
          <h3>&copy; 2020-2021 CUE-ASAP. All Rights Reserved</h3>
          </div> 
      </div>
    </Provider>
  );
  }
}

export default App;
