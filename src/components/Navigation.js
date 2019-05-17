import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import SingOutButton from './SingOut';
import * as routes from '../constants/routes';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Badge } from 'react-bootstrap';
import { Mail, Bell, Power } from 'react-feather';
import { db, auth } from '../firebase/firebase';
import logo from './assets/logo.svg'
import AuthUserContext from './AuthUserContext';

const Navigation = () =>

  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>

<div>
<Navbar className="navBar">
  <Navbar.Brand href="#home"><img width="150px"  src={logo}></img></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Link to={routes.SIGN_IN}><SingOutButton /></Link>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>

const NavigationNonAuth = () =>
<div>

<Navbar className="navBar">
  <Navbar.Brand href="#home"><img width="100px" src={logo}></img></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Link to={routes.SIGN_IN}> <Button>Iniciar Sesión</Button></Link> </Navbar.Text>
  </Navbar.Collapse>
</Navbar>

</div>

export default Navigation;