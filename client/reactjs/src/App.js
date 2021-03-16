import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavbar';

import { Provider } from 'react-redux';
import store from './store'
import {loadUser} from './actions/authActions';
import { Component } from 'react';
import { Container, Fade } from 'reactstrap';
import GetStarted from './components/GetStarted';
import chatbot from './assets/chatbot-color.png'
import discord from "./assets/discord.svg"
import github from "./assets/github.svg"
import slack from "./assets/slack.svg"
import {NavItem} from 'reactstrap'
import TermsServiceModal from './components/auth/TermsServiceModal'
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
              <li><a id="contact-footer-links" href="https://tawk.to/cueassist" target="_blank">Help Center</a></li>
              <li><a id="contact-footer-links" href="https://maps.google.com/maps?q&t=&z=14&ie=UTF" target="_blank">Your Location</a></li>
              </ul>
            </div>
          <div id="footer-elements">
            <h3>Support</h3>
            <ul>
              <NavItem><FAQ/></NavItem>
              <NavItem><License/></NavItem>
              <NavItem><TermsServiceModal/></NavItem>
            </ul>
          </div>
          <div id="footer-elements">
            <h3>Connect with us</h3>
            <div id="connect-with-us-img-area">
              <a href="https://discord.gg/BJHHxkMq8s" target="_blank"><img src={discord} width="22px"/></a>
              <a href="https://github.com/CUE-ASAP" target="_blank"><img src={github} width="22px"/></a>
              <a href="https://join.slack.com/t/cueasap/shared_invite/zt-ng1p11v7-ubghuV9TzGp3XtN5KhIZ6Q" target="_blank"><img src={slack} width="22px"/></a>
            </div>
          </div>
          </div>
          <div class="main-footer">
          <h3>&copy; 2020-2021 ⚡ CUE-ASAP ◽ Made with ❤ in India.</h3>
          </div> 
      </div>
    </Provider>
  );
  }
}

export default App;
