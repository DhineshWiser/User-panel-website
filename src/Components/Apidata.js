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
import { useParams } from 'react-router-dom';
import Footer from './Footer'
import Navbarr from './Navbarr'




const api = [
    {
        "name": "watch",
        "banner": watchbanner,
        "id": "1",
        "products": [
            {
                "image": watch1,
                "name": "metalic watch",
                "price": " $2.79"
            },
            {
                "image": watch2,
                "name": "Leather watch",
                "price": " $2.79"
            },
            {
                "image": watch3,
                "name": "Digital watch",
                "price": " $2.79"
            },
            {
                "image": watch4,
                "name": "Smart watch",
                "price": " $2.79"
            }
        ]
    },
    {
        "name":"shoes",
        "banner":shoesbanner,
        "id": "2",
        "products": [
            {
                "image": shoes1,
                "name": "casual shoes",
                "price": " $2.79"
            },
            {
                "image": shoes2,
                "name": "formal shoes",
                "price": " $2.79"
            },
            {
                "image": shoes3,
                "name": "boots shoes",
                "price": " $2.79"
            },
            {
                "image": shoes4,
                "name": "shorts shoes",
                "price": " $2.79"
            }
        ]
    },
    {
        "name": "shoes",
        "banner": bagbanner,
        "id": "3",
        "products": [
            {
                "image": bag1,
                "name": "laptop bag",
                "price": " $2.79"
            },
            {
                "image": bag2,
                "name": "travel bag",
                "price": " $2.79"
            },
            {
                "image": bag3,
                "name": "office bag",
                "price": " $2.79"
            },
            {
                "image": bag4,
                "name": "college bag",
                "price": " $2.79"
            }
        ]
    }
]

function Apidata() {
    const [banner, setBanner] = useState("")
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const { id } = useParams()

    useEffect(() => {
        console.log(id);

        const watch = api.filter(items => items.id == id)
        console.log(watch);

        setBanner(watch[0].banner)
        setName(watch[0].name)
        setProducts(watch[0].products)

        console.log(products);

    }, [])

    return (
        <div>
            <Navbarr />
            <img class="card-img" src={banner} alt="Card image" height="645px" />
            
            <Container>
                <Row className='py-5'>
                    {products.map((a) => (
                        <Col md={3} >
                            <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }} className='img'>
                                <Card.Img  variant="top" src={a.image} style={{ height: '254px' }} />
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
            <Footer />

        </div>
    )
}

export default Apidata