import { Container, Row, Col } from "react-bootstrap";
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={24} sm={6}>
                        Portfolio
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/aaaguirre10">
                                <FaGithub className="iconEffect" style={{color: 'white'}}/>
                            </a>
                            <a href="https://www.instagram.com/xo.tony/">
                                <FaInstagram className="iconEffect" style={{color: 'white'}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/antonioaaguirre/">
                                <FaLinkedin className="iconEffect" style={{color: 'white'}}/>
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}