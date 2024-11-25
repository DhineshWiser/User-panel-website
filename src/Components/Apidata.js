import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import watchbanner from '../assets/watch-panner.jpg';
import watch1 from "../assets/OIP (1).jpeg";
import watch2 from "../assets/watch2.jpg";
import watch3 from "../assets/watch3.jpeg";
import watch4 from "../assets/watch4.jpeg";
import shoesbanner from "../assets/shoes-panner.jpg";
import shoes1 from "../assets/casual-shoes-white.webp";
import shoes2 from "../assets/formal-shoes.jpeg";
import shoes3 from "../assets/boots-shoes.jpeg";
import shoes4 from "../assets/shorts-shoes.jpeg";
import bagbanner from "../assets/bag-panner.jpg";
import bag1 from "../assets/Laptop-bag.webp";
import bag2 from "../assets/travel-bag.webp";
import bag3 from "../assets/office-bag.webp";
import bag4 from "../assets/college-bag.webp";
import { useNavigate, useParams } from 'react-router-dom';

const api ="https://673c4fb396b8dcd5f3f964ce.mockapi.io/adminProducts"

function Apidata() {
    const [banner, setBanner] = useState("")
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);

        const filterdata = api.filter(items => items.id == id)
        console.log(filterdata);

        setBanner(filterdata[0].banner)
        setName(filterdata[0].name)
        setProducts(filterdata[0].products)

        console.log(products);

    }, [])
    const Handleclick = (id) => {
        console.log(id);
        navigate(`/productsdetails/${id}`)

    }
    return (
        <div>
            <img class="card-img" src={banner} alt="Card image" height="645px" />
            <Container>
                <Row className='py-5'>
                    {products.map((a, index) => (
                        <Col md={3} onClick={() => Handleclick(index)}>
                            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }} className='img'>
                                <Card.Img variant="top" src={a.image} style={{ height: '254px' }} />
                                <Card.Body>
                                    <Card.Title className="fs-6">{a.name}</Card.Title>
                                    <Card.Text>{a.price}</Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
export default Apidata