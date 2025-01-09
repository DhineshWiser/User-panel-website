import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Productsdetails() {
    const giturl = "https://raw.githubusercontent.com/DhineshWiser/User-panel-website/refs/heads/main/src/assets/"

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        GetData();
    }, []);

    const GetData = () => {
        axios.get("https://673c4fb396b8dcd5f3f964ce.mockapi.io/adminProducts")
            .then(response => setData(response.data))
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const filterdata = data.filter(items => items.id == id);

    return (
        <div>
            <Container>
                <Row className='py-5'>
                    {filterdata.map((item) => (
                        <React.Fragment key={item.id}>
                            <Col md={6}>
                                <img src={giturl + item.image} alt={item.name} style={{ height: '300px', objectFit: 'cover' }}  className='rounded-3'/>
                            </Col>
                            <Col md={6} className='d-flex flex-column justify-content-center'>
                                <div className='text-start fw-bold fs-5'>Name: {item.name}</div>
                                <div className='text-start fw-bold fs-5'>Price: {item.price}</div>
                                <div className='text-start mt-3'>
                                    Welcome to Flone, your ultimate online shopping destination where you can discover a wide range of high-quality products across various categories, including fashion, electronics, home essentials, accessories, and more. Enjoy exclusive deals, secure payment options, and fast, reliable shipping, all while browsing a collection from trusted brands. Whether you're upgrading your wardrobe, finding the latest gadgets, or searching for unique gifts, we’ve got everything you need to shop with ease and confidence—all in one place.
                                </div>
                                <div className='mt-4 text-start'>
                                    <Button className='me-2 btn btn-success'>Add to Cart</Button>
                                    <Button>Buy Now</Button>
                                </div>
                            </Col>
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Productsdetails;
