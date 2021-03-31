import React, { Component } from 'react';
import { Layout } from 'antd';
import {Container,Col,Row, Image, Button} from 'react-bootstrap'



const { Header, Footer, Sider, Content } = Layout 
class Resume extends Component {
    render() { 
        return (
            <>
            <Container>
                <Layout>
                    <Header style={{backgroundColor:"#B9A383"}}>
                        
                       <h4 style={{textAlign:'center', color: "white", marginTop: '13px', fontFamily: "sans-serif"}}>
                           <b>Resume</b>
                        </h4> 
                        
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>

            </Container>

            </>

          );
    }
}
 
export default Resume;