import React, { Component } from 'react';

import withAutorization from './withAutorization';
import { db, auth } from '../firebase/firebase';
import { Container, Row, Col, ListGroup} from 'react-bootstrap';
import { Users, Clipboard,BookOpen, Award, Globe, Calendar, Search } from 'react-feather';
import './navStyle.css'
import SideNav from './navegacion/sideBar/nav.js'

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }
  componentDidMount() {

    alert("hola mundo")        

    const uid = auth.currentUser.uid;

    db.ref(`users/nutriologos/${uid}`).on('value', snapshot => {
        
      this.setState({
        user: snapshot.val()
      })

    })
   
  }

  render() {

      return(
        <div>
          <Container>
            <Row>
              <SideNav/>
              <Col className="content" md={8} xs={12}>2</Col>
              <Col className="sideBar" md={2} xs={12}>1</Col>
            </Row>
          </Container>
           
  
      
        
        </div>
      

      )
    
    
   
  }
}


const authCondition = (authUser) => !!authUser;

export default withAutorization(authCondition)(HomePage);