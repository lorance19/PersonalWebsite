import React, { Component } from 'react';
import {Container,Col,Row, Image, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


class Contact extends Component {
    render() { 
        return (  
            <React.Fragment>
                <Container>
                    <h4 className= "text-center" style={{textAlign: 'left', lineHeight: '2', fontFamily: "sans-serif", color: " #7a6652"}}>
                        Plesae Contact me via the following: </h4>
                </Container>
                <div className="col-md-12 text-center">
                    <Button href= "https://www.facebook.com/Lorance.mmpa/" target="_blank" style={{width: "200px", height: "30px", padding: "2px", margin: '10px'}} variant="outline-light" > 
                      <FontAwesomeIcon icon={faFacebookSquare} color="#615544" />
                    </Button>
                    <br/>
                    <Button href= "mailto:mmpa19@g.ucla.edu" target="_blank" style={{width: "200px", height: "30px", padding: "2px", margin: '10px'}} variant="outline-light" > 
                      <FontAwesomeIcon icon={faEnvelope} color="#615544" />
                    </Button>
                    <br/>
                    <Button href= "https://www.linkedin.com/in/lorance-luo-81ba8213a/" target="_blank" style={{width: "200px", height: "30px", padding: "2px", margin: '10px'}} variant="outline-light" > 
                      <FontAwesomeIcon icon={faLinkedin} color="#615544" />
                    </Button>
                  </div>
            </React.Fragment>

        );
    }
}
 
export default Contact;