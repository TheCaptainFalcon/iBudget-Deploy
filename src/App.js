import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className='App-nav' bg="dark" variant="dark">
            <Nav.Link><NavLink className='link' activeClassName='active-link' exact={true} to='/'>Home</NavLink></Nav.Link>
            <Nav.Link> <NavLink className='link' activeClassName='active-link' to='/calculator'>Calculator</NavLink></Nav.Link>
         </Navbar>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path ='/calculator' component={ Calculator } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
