import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Products() {

    return (
        <Container id="categories">
            <Row>
                <div className='py-5'>
                    <h1 className='display-5 fw-bold '>Categories</h1>
                    <hr />
                </div>

                <div className='buttons d-flex justify=content-center mb-5 pb-5 gap-3'>
                    <a href='#all'><button className='btn btn-outline-dark'>All</button></a>
                    <Link to={"/apidata/1"}>
                        <a href=""><button  className='btn btn-outline-dark'>Watch</button></a>
                    </Link>
                    <Link to={"/apidata/2"}>
                        <a href=''><button  className='btn btn-outline-dark'>Shoes</button></a>
                    </Link>
                    <Link to={"/apidata/3"}>
                        <a href=''><button  className='btn btn-outline-dark'>Bags</button></a>
                    </Link>
                </div>

            </Row>
            <Row>
                <Col md={3}>
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img  variant="top" src="/assets/images/oip (1).jpeg" style={{ width: "100%" ,height:"300px"}} />
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
                    <Card style={{ width: '100%' }}  className='img'>
                        <Card.Img variant="top" src="/assets/images/watch2.jpg" style={{ width: "100%",height:"300px" }} />
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
                    <Card style={{ width: '100%' }}  className='img'>
                        <Card.Img variant="top" src="/assets/images/watch3.jpeg" style={{ width: "100%",height:"300px" }} />
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
                    <Card style={{ width: '100%' }}  className='img'>
                        <Card.Img variant="top" src="/assets/images/watch4.jpeg" style={{ width: "100%",height:"300px" }} />
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
            <Row className='mt-5'>
                <Col md={3}>
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img variant="top" src="/assets/images/casual-shoes-white.webp" style={{ width: "100%" ,height:"300px"}} />
                        <Card.Body>
                            <Card.Title>casual white shoes</Card.Title>
                            <Card.Text>
                                $2.79
                            </Card.Text>
                            <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img variant="top" src="/assets/images/formal-shoes.jpeg" style={{ width: "100%",height:"300px" }} />
                        <Card.Body>
                            <Card.Title>Formal shoe</Card.Title>
                            <Card.Text>
                                $2.79
                            </Card.Text>
                            <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img variant="top" src="/assets/images/boots-shoes.jpeg" style={{ width: "100%",height:"300px" }} />
                        <Card.Body>
                            <Card.Title>Boots shoes</Card.Title>
                            <Card.Text>
                                $2.79
                            </Card.Text>
                            <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img variant="top" src="/assets/images/shorts-shoes.jpeg" style={{ width: "100%",height:"300px" }} />
                        <Card.Body>
                            <Card.Title>Shorts shoes</Card.Title>
                            <Card.Text>
                                $2.79
                            </Card.Text>
                            <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={3}>
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img variant="top" src="/assets/images/laptop-bag.webp" style={{ width: "100%" ,height:"300px"}} />
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
                    <Card style={{ width: '100%' }} className='img '>
                        <Card.Img variant="top" src="/assets/images/travel-bag.webp" style={{ width: "100%",height:"300px" }} />
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
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img variant="top" src="/assets/images/office-bag.webp" style={{ width: "100%",height:"300px" }} />
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
                    <Card style={{ width: '100%' }} className='img'>
                        <Card.Img variant="top" src="/assets/images/college-bag.webp" style={{ width: "100%",height:"300px" }} />
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
    )
}

export default Products