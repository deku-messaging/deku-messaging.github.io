import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Skai from './assets/Skai.png';


const About = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleContent = () => {
        setExpanded(!expanded);
    };

    return (
        <section className="about-section">
            <Container>
                <Row className="clearfix">
                    {/* Content Column */}
                    <Col md={6} sm={12} xs={12} className="content-column">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title" id='us'>About Us</div>
                                <h2 className='about-text' id='about' >Empowering Communication <br />  Ensuring Privacy</h2>
                            </div>
                            <div className="text">
                                {expanded ? (
                                    <>
                                        <p>
                                            Deku SMS is an open-source initiative revolutionizing messaging by emphasizing privacy, 
                                            security, and innovation. More than an app, we're a community-driven project committed to 
                                            providing users with a messaging experience that truly empowers them.
                                        </p>
                                        <h3>Privacy Beyond Compromise</h3>
                                        <p>
                                            In a digitally connected era, privacy is paramount. 
                                            Deku SMS integrates cutting-edge end-to-end encryption into all aspects of our platform.
                                            Messages are transformed into secret codes, decipherable only by the sender and recipient, safeguarding your privacy.
                                        </p>
                                        <h3>Visual Expression, Encrypted</h3>
                                        <p>
                                            Words are just the beginning. Deku SMS introduces an experimental 
                                            feature enabling image sharing via SMS. Whether it's cherished memories
                                            or important documents, your images are protected by robust encryption.
                                        </p>
                                        <h3>Communication that Adapts</h3>
                                        <p>
                                            Life is dynamic,
                                            and so is communication. Deku SMS empowers you to 
                                            forward SMS messages to online servers,
                                            ensuring constant connectivity even when you're on the go.
                                            It's about communication that adapts to your lifestyle.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                        Deku SMS is an open-source initiative that is revolutionizing messaging by placing a strong emphasis on 
                                        privacy, security, and innovation. Beyond just being an application, 
                                        we are a community-driven project dedicated to delivering users
                                         a messaging experience that genuinely empowers them.
                                        </p>
                                        {/* <p>Read more...</p> */}
                                    </>
                                )}
                            </div>
                            <Button onClick={toggleContent} className="theme-btn btn-style-three">
                                {expanded ? 'Read Less' : 'Read More'} 
                            </Button>
                        </div>
                    </Col>

                    {/* Image Column */}
                    <Col md={6} sm={12} xs={12} className="image-column">
                        <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                {/* <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt="" /> */}
                                <img src={Skai} alt="" />

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
