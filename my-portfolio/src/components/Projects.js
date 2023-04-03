import { Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectCards } from './ProjectCards';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css'

import Radius from '../assets/img/Radius.jpg';
import CANBus from '../assets/img/CANBusProj.png';




export const Projects = () => {
    const projects = [
        {
            title: "Radius",
            description: "Social Media Blockchain app that promotes social interaction in person while letting people stay in touch after.",
            imgUrl: Radius,
        },
        {
            title: "CAN Bus Visualizer",
            description: "The CAN Bus Visualizer System is a standalone web-based visualization system intended to be used by DAC analysts. The system provides the ability to visualize and manipulate the incoming traffic of a CAN Bus. The CAN Bus Visualizer System will listen to a CAN Bus network and connect to Other CAN Bus Visualizer Systems.",
            imgUrl: CANBus,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>This is a collection of projects that I completed that showcase a combination of skills and abilities that I learned throughout school as well as some that I taught myself.</p>
                                <Tab.Container id='projects-tabs' defaultActiveKey="first">
                                    <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                        <Nav.Item>
                                            <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id='slideInUp' className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey='first'>
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCards
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p>Currently working on them.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p>Currently working on them.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='backgroundImage'></img>
        </section>
    )
}