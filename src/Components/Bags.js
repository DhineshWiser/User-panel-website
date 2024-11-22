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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Bags() {
    return (
        <div>
            <Navbarr />
            <div class="card bg-dark text-white border-0" id="home">
                <img class="card-img" src="/assets/images/bag-panner.jpg" alt="Card image" height="645px" />
            </div>

            <Container>
                <Row className='mt-5'>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/laptop-bag.webp" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Laptop bag</Card.Title>
                                <Card.Text>
                                    $2.79
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/travel-bag.webp" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Travel bag</Card.Title>
                                <Card.Text>
                                    $2.79
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/office-bag.webp" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Office bag</Card.Title>
                                <Card.Text>
                                    $2.79
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="/assets/images/college-bag.webp" style={{ width: "100%", height: "300px" }} />
                            <Card.Body>
                                <Card.Title>College bag</Card.Title>
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

export default Bags