import React, { Component } from 'react';
import Particles from "react-tsparticles";
import { Fade,Bounce} from "react-awesome-reveal";
import {Container,Col,Row, Image, Button} from 'react-bootstrap'
import Webimage from "./webpic.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
          
            <Container>
            <Fade delay="90">
              <Row>
                <Col md={8}>
                  <h2 style={{fontFamily: "sans-serif", color: " #7a6652"}} >Hello Visitor, Welcome to My Page</h2>
                  <pre style={{textAlign: 'left', lineHeight: '2'}}>          Hi! My name is <i>Maung Maung Phyo Aung</i>. You can call me <i>Lorance</i>. <br/> 
                  I am from Rangoon, Myanmar and currently live in Los Angeles, United States. <br/>I recently graduated from UCLA with a Computer Science Degree and just started <br/>
                  a journey to the real world. I enjoy coding and wish to become a full time  <br/>front end developer. 

                  <br/> <br/>
                  </pre>
                  <div className="col-md-12 text-center">
                    <Button size="lg" variant="outline-secondary" > 
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                  </div>
                  
                </Col>
                <Col>
                <Fade delay="150">
                  <Image src= {Webimage}  fluid />
                </Fade>
                </Col>
              </Row>  
            </Fade>
            </Container>
        </React.Fragment> );
    }
}
 
export default Home;