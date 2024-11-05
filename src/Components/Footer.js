import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <div className='bg-light mt-5 py-5' id="footer">
            <Container>
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
            </Container>
        </div>

    )
}

export default Footer