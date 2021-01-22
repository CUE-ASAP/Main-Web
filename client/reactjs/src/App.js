import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavbar';

import { Provider } from 'react-redux';
import store from './store'
import {loadUser} from './actions/authActions';
import { Component } from 'react';
import { Container } from 'reactstrap';
import GetStarted from './components/GetStarted';


class App extends Component{

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <GetStarted/>
        </Container>
      </div>
    </Provider>
  );
  }
}

export default App;
