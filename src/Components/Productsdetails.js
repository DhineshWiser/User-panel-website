import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom';
import watch1 from "../assets/OIP (1).jpeg";
import watch2 from "../assets/watch2.jpg";
import watch3 from "../assets/watch3.jpeg";
import watch4 from "../assets/watch4.jpeg";
import { MdDescription } from 'react-icons/md';

const apidata = [
    {
        id: "0",
        image: watch1,
        name: "metalic watch",
        price: "₹499"
    },
    {
        id: "1",
        image: watch2,
        name: "Leather watch",
        price: " ₹299"
    },
    {
        id: "2",
        image: watch3,
        name: "Digital watch",
        price: " ₹399"
    },
    {
        id: "3",
        image: watch4,
        name: "Smart watch",
        price: " ₹999"
    }
]

function Productsdetails() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const filterdata = apidata.filter(items => items.id == id)
        console.log(filterdata);

        setData(filterdata);

    }, [])


    return (
        <div>
            <Container>
                <Row className='py-5'>
                    {data.map((items) => (
                        <>
                            <Col md={6}>
                                <img src={items.image} style={{ height: '300px'}} />
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