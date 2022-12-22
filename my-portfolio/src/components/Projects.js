import { Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectCards } from './ProjectCards';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css'

import Radius from '../assets/img/Radius.jpg';




export const Projects = () => {
    const projects = [
        {
            title: "Radius",
            description: "Social Media Blockchain app that promotes social interaction in person while letting people stay in touch after.",
            imgUrl: Radius,
        },
        {
            title: "",
            description: "",
            imgUrl: "",
        },
        {
            title: "",
            imgUrl: "",
            description: "",
        },
        {
            title: "",
            description: "",
            imgUrl: "",
        },
        {
            title: "",
            description: "",
            imgUrl: "",
        },
        {
            title: "",
            description: "",
            imgUrl: "",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>Veniam adipisicing cupidatat quis est sit. Quis minim cillum duis sunt reprehenderit id nisi aliqua elit sunt aliqua. Dolor est minim esse dolore mollit ullamco. Elit ullamco proident esse adipisicing. Duis elit officia anim aliquip minim incididunt.</p>
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
                                        <Tab.Pane eventKey="section">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}