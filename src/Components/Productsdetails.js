import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

function Productsdetails() {
    const giturl = "https://raw.githubusercontent.com/DhineshWiser/User-panel-website/refs/heads/main/src/assets/"

    const [data, setData] = useState([]);
    const { id } = useParams()

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
    const filterdata = data.filter(items => items.id == id)
    console.log(filterdata);

    return (
        <div>
            <Container>
                <Row className='py-5'>
                    {filterdata.map((items) => (
                        <>
                            <Col md={6}>
                                <img src={giturl + items.image} style={{ height: '300px' }} />
                            </Col>
                            <Col md={6} className='d-flex flex-column justify-content-center'>
                                <div>Name: {items.name}</div>
                                <div>Price: {items.price}</div>
                            </Col>
                        </>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Productsdetails