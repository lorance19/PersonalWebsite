import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap'
import { Fade,Bounce} from "react-awesome-reveal";
import {List, Card, Collapse,Tag, Progress, Timeline} from 'antd'

const { Panel } = Collapse;

const Education = [{title:'University of California, Los Angeles (UCLA)'}]
const SkillSets = [{title:'Programming Languages'}]

const headerStyle= {
    fontFamily: "sans-serif", 
    color: " #7a6652",
    fontWeight:"bold"
}
const CardContentStyle={
    fontStyle: "italic"
}

class Resume extends Component {
    render() { 
        return (
            <>
                <Container>
                    <Fade delay="90">
                    <Collapse  defaultActiveKey={['1']} ghost   >
                        <Panel header={<h4 style={headerStyle} >Education</h4>} 
                                key="1">
                            <List itemLayout="vertical"
                                dataSource={Education}
                                renderItem={item => (
                                    <List.Item>
                                      <Card title={item.title}  bordered={false}> <p style={CardContentStyle}>
                                      Bachelor of Science in Computer Science and Engineering</p></Card>
                                    </List.Item>
                                  )}/>
                        </Panel>

                        <Panel header={<h4 style={headerStyle} >Skill Set</h4>}  key="2" > 
                            <List itemLayout="vertical"
                                dataSource={SkillSets}
                                renderItem={item => (
                                    <List.Item>
                                      <Card title={item.title}  bordered={false}> <div style={CardContentStyle}>
                                        <Tag color="magenta">C++ </Tag> 
                                        <Tag color="red">C#</Tag>
                                        <Tag color="#520339">JAVA</Tag>
                                        <Tag color="orange">JavaScript</Tag>
                                        <Tag color="gold">TypeScript</Tag>
                                        <Tag color="lime">ReactNative</Tag>
                                        <Tag color="green">NodeJS</Tag>
                                        <Tag color="cyan">Python</Tag>
                                        <Tag color="blue">HTML</Tag>
                                        <Tag color="geekblue">SHELL</Tag>
                                        <Tag color="purple">MySQL</Tag></div>
                                    </Card>
                                        <br/>

                                        <div style={{ width: 400, marginLeft: '20px' }}>
                                            <h5 style={{marginLeft: '10px'}}>Profiency</h5>
                                            <Progress percent={88} showInfo={false} size="large" strokeColor="magenta"/>
                                            <Progress percent={75} showInfo={false} size="large" strokeColor="red"/>
                                            <Progress percent={79} showInfo={false} size="large" strokeColor="#520339"/>
                                            <Progress percent={86} showInfo={false} size="large" strokeColor="orange"/>
                                            <Progress percent={80} showInfo={false} size="large" strokeColor="gold"/>
                                            <Progress percent={82} showInfo={false} size="large" strokeColor="lime"/>     
                                            <Progress percent={70} showInfo={false} size="large" strokeColor="green"/>
                                            <Progress percent={90} showInfo={false} size="large" strokeColor="cyan"/>
                                            <Progress percent={99} showInfo={false} size="large" strokeColor="blue"/>     
                                            <Progress percent={60} showInfo={false} size="large" strokeColor="geekblue"/>
                                            <Progress percent={66} showInfo={false} size="large" strokeColor="purple"/>     


                                        </div>

                                    </List.Item>
                                  )}/>

                        </Panel>

                        <Panel header={<h4 style={headerStyle} >Projects</h4>}  key="3" > 
                            <Timeline>
                                <Timeline.Item color ="#7a6652">
                                    <h4>Stonk, the Paper Trading App</h4>
                                    <p>- Served as the <b>Frontend Developer.</b> <br/>
                                        -Create the paper trading website called "Stonk" with React and uses the Finnhub API to get realtime stock data. <br/>
                                        - Allow the user to sign up and trade the paper stocks and show them the profit and loss from their transactions. 
                                        <a href="https://github.com/cs130-w21/19" style={{color: "#7a6652"}}> here</a>
                                        <br/>
                                    </p>
                                </Timeline.Item>

                                <Timeline.Item color="#7a6652"> 
                                <h4>Travel Planner</h4>
                                <p>- Served as the <b>Frontend Developer.</b> <br/>
                                        -Create the paper trading website called "Stonk" with React and uses the Finnhub API to get realtime stock data. <br/>
                                        - Allow the user to sign up and trade the paper stocks and show them the profit and loss from their transactions. 
                                        <a href="https://github.com/cs130-w21/19" style={{color: "#7a6652"}}> here</a>
                                        <br/>
                                    </p>


                                </Timeline.Item>

                                <Timeline.Item color="#7a6652"> 
                                <h4>Predicting Taxi Ride Duration</h4>
                                <p>- Use <b>Python</b> and  <b>Machine Learning</b> to predict the taxi ride duration in New York City. <br/>
                                        -Create the design matrix of the model and predict the trip duration using location, end location, trip distance, time of day, and day of the week.<br/>
                                        - Using sklearn to process data and fit linear regression models and embedding linear regression as a component in a more complex model.
                                        <a href="https://github.com/lorance19/New-York-Traffic/blob/main/proj3/proj3.ipynb" style={{color: "#7a6652"}}> here</a>
                                        <br/>
                                    </p>


                                </Timeline.Item>


                                <Timeline.Item color="#7a6652"> 
                                <h4>Heart Disease Prediction</h4>
                                <p>- Use <b>Python</b> ,  <b>Machine Learning</b> and UCI Heart Disease dataset to predict the the presence of Heart disease. <br/>
                                        - Use different learning models (SVM, K-Nearest Neighbor, Logistic Regression) to get the highest accuracy and precision score.<br/>
                                        - Using sklearn to process data and fit linear regression models and embedding linear regression as a component in a more complex model.
                                        <a href="https://github.com/lorance19/heart-disease/tree/main/cs188%20Project%202" style={{color: "#7a6652"}}> here</a>
                                        <br/>
                                    </p>


                                </Timeline.Item>

                            </Timeline>
                        </Panel>
                            
                             
                    </Collapse>
                    </Fade>                    
                </Container>
            </>

          );
    }
}
 
export default Resume;