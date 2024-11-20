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
            <Navbar className='py-3' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='fs-4 fw-bold' href="#home">Flone.</Navbar.Brand>
                    <Nav className="mx-auto fs-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#categories">Categories</Nav.Link>
                        <Nav.Link href="#footer">Footer</Nav.Link>
                    </Nav>
                    <div className='buttons'>
                        <Link to={"/Login"}>
                            <a href='' className='btn btn-outline-white border-white '>{<FaUserCircle />}
                                Login</a>
                        </Link>
                    </div>
                </Container>
            </Navbar>
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
            <div className='bg-secondary mt-5 py-5' id="footer">
                <Row>
                    <Col xs>
                        <h3 className='display-5 fw-bold'>Flone.</h3>
                        <p>© 2024 Flone.<br />
                            All Rights Reserved</p>
                    </Col>
                    <Col xs>
                        <a href='' className='text-decoration-none text-dark'>
                            <h5>ABOUT US</h5>
                            <div>About us</div>
                            <div>Store location</div>
                            <div>Contact</div>
                            <div>Orders tracking</div>
                        </a>
                    </Col>
                    <Col xs>
                        <a href='' className='text-decoration-none text-dark'>
                            <h5>USEFUL LINKS</h5>
                            <div>Returns</div>
                            <div>Support Policy</div>
                            <div>Size guide</div>
                            <div>FAQs</div>
                        </a>
                    </Col>
                    <Col xs>
                        <a href='' className='text-decoration-none text-dark'>
                            <h5>FOLLOW US</h5>
                            <div>Facebook</div>
                            <div>Twitter</div>
                            <div>Instagram</div>
                            <div>Youtube</div>
                        </a>
                    </Col>
                    <Col xs>
                        <h5>SUBSCRIBE</h5>
                        <div>Get E-mail updates about our latest shop and special offers.</div>
                        <input type="text" placeholder='Enter your email address'></input>
                        <a href=''>SUBSCRIBE</a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Bags