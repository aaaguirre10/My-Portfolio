import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BackendAstronaut from '../assets/img/BackendAstronaut.png';
import FrontendAstro from '../assets/img/FrontendAstro.png';
import UxAstro from '../assets/img//UxAstro.png';
import colorSharp from '../assets/img/color-sharp.png';



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p >As a software engineer with experience in frontend development, I am proficient in HTML, CSS, and JavaScript, as well as React, a popular JavaScript library for building user interfaces. 
                                I also have experience with backend development in languages such as Java and Python. 
                                In addition, I have experience with UI/UX design using Figma, a cloud-based design and prototyping tool. 
                                This combination of skills allows me to not only develop the functional aspects of a website or application, but also to create a visually appealing and intuitive user experience. 
                                Overall, my skills in frontend and backend development, as well as UI/UX design, make me a well-rounded software engineer with the ability to work on a wide range of projects.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    {/* Space icon by Icons8 */}
                                    <img src={FrontendAstro} alt="spinner1" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    {/* Space icon by Icons8 */}
                                    <img src={UxAstro} alt="spinner2" />
                                    <h5>UX/UI Designer</h5>
                                </div>
                                <div className="item">
                                    {/* Space icon by Icons8 */}
                                    <img src={BackendAstronaut} alt="spinner3" />
                                    <h5>Backend Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="blurEffect" />
        </section>
    )
}