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
        <a class="chatbot" href="https://www.kommunicate.io/livechat-demo?appId=16d05155f1ebeb1d004a865007d875793&botIds=cue-assist-qo0g4&assignee=cue-assist-qo0g4" target="_blank" >
        <button class="chatbot-btn"><img src={chatbot} width="52px" /></button><span class="chatbot-btn-batch"></span></a>
          <div id="main-footer">
            <h3>CUE-ASAP &copy; 2020-2021. All Rights Reserved.</h3>
          </div> 
      </div>
    </Provider>
  );
  }
}

export default App;
