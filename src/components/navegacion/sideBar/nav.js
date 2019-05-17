import React, {Component} from 'react'

import { Container, Row, Col, ListGroup} from 'react-bootstrap';

class SideNav extends Component{
         constructor(props){
            super(props)
         }
         render(){
            return(
                
                <Col md={2} xs={12}>
               <ListGroup>
                 <ListGroup.Item action variant="light">
                   Comunidad
                 </ListGroup.Item>
                 <ListGroup.Item action variant="light">
                   Consultorio
                 </ListGroup.Item>
                 <ListGroup.Item action variant="light">
                   Agenda
                 </ListGroup.Item>
               </ListGroup>
                
               </Col>
             
            )
        }

}


export default SideNav;