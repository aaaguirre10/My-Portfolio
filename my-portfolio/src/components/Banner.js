import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import BannerIcon from '../assets/img/BannerIcon.png';



export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); 
    const [text, setText] = useState(''); 
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1); 
    const toRotate = [ "Software Engineer", "UI/UX Designer", "Frontend Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300); //How long it takes for the string to complete
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                <span className="tagline">Welcome to my <strong>Portfolio</strong></span>
                                <h1>{`Hello! I'm Antonio, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "UI/UX Designer", "Frontend Developer"]'><span className="wrap">{text}</span></span></h1>
                                    <p>I'm a recent graduate from the The University of Texas at El Paso. I'm currently looking for opportunites as software engineer and I'm open to doing freelance work as well.</p>
                                    <a href="/#connect">
                                        <button>Let's Connect<BsFillArrowRightCircleFill size={25} /></button>
                                    </a>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={BannerIcon} className="headerIconEffect" alt="Header Img"/>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}