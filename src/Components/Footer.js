import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <div className='bg-secondary mt-5 py-5' id="footer">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <h3 className="display-5 fw-bold text-light">Flone.</h3>
                        <p className="text-light">© 2024 Flone.<br />All Rights Reserved</p>
                    </Col>

                    <Col xs={12} sm={6} md={2}>
                        <a href="" className="text-decoration-none text-light">
                            <h5 className="text-light">ABOUT US</h5>
                            <div>About us</div>
                            <div>Store location</div>
                            <div>Contact</div>
                            <div>Orders tracking</div>
                        </a>
                    </Col>

                    <Col xs={12} sm={6} md={2}>
                        <a href="" className="text-decoration-none text-light">
                            <h5 className="text-light">USEFUL LINKS</h5>
                            <div>Returns</div>
                            <div>Support Policy</div>
                            <div>Size guide</div>
                            <div>FAQs</div>
                        </a>
                    </Col>

                    <Col xs={12} sm={6} md={2}>
                        <a href="" className="text-decoration-none text-light">
                            <h5 className="text-light">FOLLOW US</h5>
                            <div>Facebook</div>
                            <div>Twitter</div>
                            <div>Instagram</div>
                            <div>Youtube</div>
                        </a>
                    </Col>

                    <Col xs={12} sm={6} md={3}>
                        <h5 className="text-light">SUBSCRIBE</h5>
                        <div className="text-light">Get E-mail updates about our latest shop and special offers.</div>
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="py-1 mt-2 w-100" 
                        />
                        <a href="" className="btn btn-primary mt-2 d-block text-center">SUBSCRIBE</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
