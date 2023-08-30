import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLock, FaUsers, FaGlobe, FaKey, FaImage, FaShieldAlt, FaMobileAlt, FaHandsHelping } from 'react-icons/fa';
import './index.css';

const Features = () => {
    return (
        <section className="feature-grid pb-5 pt-5">
            <Container>
                <Row>
                    <Col xl={12} className="text-center mb-4">
                        <div className="feature-title">
                            <h2>Our Features</h2>
                            <p>Explore the features that make Deku the best choice for secure messaging.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaLock />
                            </div>
                            <h4>Privacy and Security Focus</h4>
                            <p>Deku SMS emphasizes privacy, security, and innovation in messaging.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaUsers />
                            </div>
                            <h4>Community-Driven Project</h4>
                            <p>It's not just an app, but a community-driven initiative that aims to empower users.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaGlobe />
                            </div>
                            <h4>Vision for Private Communication</h4>
                            <p>Deku SMS envisions a world where communication is both seamless and secure.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaKey />
                            </div>
                            <h4>End-to-End Encryption</h4>
                            <p>The platform incorporates advanced end-to-end encryption, ensuring messages remain confidential.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaImage />
                            </div>
                            <h4>Visual Expression</h4>
                            <p>Deku SMS introduces an experimental feature allowing users to share images via SMS.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaShieldAlt />
                            </div>
                            <h4>Enhanced Security for Images</h4>
                            <p>Shared images are protected by robust encryption, preserving their privacy.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaMobileAlt />
                            </div>
                            <h4>Adaptive Communication</h4>
                            <p>The app enables forwarding SMS messages to online servers, ensuring continuous connectivity even on the move.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="text-center mb-3">
                        <div className="feature-wrap">
                            <div className="feature-icon">
                                <FaHandsHelping />
                            </div>
                            <h4>Collaboration and Contribution</h4>
                            <p>Deku SMS invites developers, enthusiasts, and privacy advocates to contribute to the project's development.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Features;
