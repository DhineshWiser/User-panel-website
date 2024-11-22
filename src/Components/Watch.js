import React, { useState, useEffect } from 'react'
import Navbarr from './Navbarr'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Watch() {
    return (
        <div>
            <Navbarr />
            <div class="card bg-dark text-white border-0" id="home">
                <img class="card-img" src="/assets/images/watch-panner.jpg" alt="Card image" height="645px" />
            </div>

            <Container id={"apidata/1"}>
                <Row className='mt-5'>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/oip (1).jpeg" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Metalic watch</Card.Title>
                                <Card.Text>
                                    $2.79
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/watch2.jpg" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Leather watch</Card.Title>
                                <Card.Text>
                                    $2.79
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/watch3.jpeg" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Digital watch</Card.Title>
                                <Card.Text>
                                    $2.79
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/watch4.jpeg" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Smart watch</Card.Title>
                                <Card.Text>
                                    $2.79
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>

    )
}

export default Watch