import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavbar';

import { Provider } from 'react-redux';
import store from './store'
import {loadUser} from './actions/authActions';
import { Component } from 'react';
import { Container } from 'reactstrap';
import GetStarted from './components/GetStarted';
import chatbot from './assets/chatbot-color.png'
import discord from "./assets/discord.svg"
import github from "./assets/github.svg"
import slack from "./assets/slack.svg"


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
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Your Location</a></li>
              </ul>
            </div>
          <div id="footer-elements">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy Statement</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div id="footer-elements">
            <h3>Connect with us</h3>
            <div id="connect-with-us-img-area">
              <a href="#"><img src={discord} width="22px"/></a>
              <a href="#"><img src={github} width="22px"/></a>
              <a href="#"><img src={slack} width="22px"/></a>
            </div>
          </div>
          </div>
          <div class="main-footer">
          <h3>&copy; 2020-2021 CUE-ASAP. All Rights Reserved.</h3>
          </div> 
      </div>
    </Provider>
  );
  }
}

export default App;
