import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import  axios  from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import watchcat from "../assets/watchcat.jpeg";
import shoescat from "../assets/shoescat.webp";
import bagcat from "../assets/bagcat.jpg";
import { useNavigate, useParams } from 'react-router-dom';


function Products() {
    const giturl="https://raw.githubusercontent.com/DhineshWiser/User-panel-website/refs/heads/main/src/assets/"
    
    const [image, setImage] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        GetData();
    }, []);

    const Handleclick = (id) => {
        console.log(id);
        navigate(`/productsdetails/${id}`)
    }

    const GetData = () => {
        axios
            .get("https://673c4fb396b8dcd5f3f964ce.mockapi.io/adminProducts")
            .then((response) => {

                const watch1 = response.data.filter((a) => a.id === "1");
                const watch2 = response.data.filter((a) => a.id === "2");
                const watch3 = response.data.filter((a) => a.id === "3");
                const watch4 = response.data.filter((a) => a.id === "4");
                const shoes1 = response.data.filter((a) => a.id === "5");
                const shoes2 = response.data.filter((a) => a.id === "6");
                const shoes3 = response.data.filter((a) => a.id === "7");
                const shoes4 = response.data.filter((a) => a.id === "8");
                const bag1 = response.data.filter((a) => a.id === "9");
                const bag2 = response.data.filter((a) => a.id === "10");
                const bag3 = response.data.filter((a) => a.id === "11");
                const bag4 = response.data.filter((a) => a.id === "12");


                setImage([...watch1, ...watch2, ...watch3, ...watch4, ...shoes1, ...shoes2, ...shoes3, ...shoes4,...bag1,...bag2,...bag3,...bag4]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <Container >
            <Row>
                <div className='py-5'>
                    <h1 className=' fw-bold '>Categories</h1>
                    <hr />
                </div>

                <div className=' d-flex justify-content-center mb-5 pb-5 gap-3'>
                    
                    <Col md={3} >
                        <Link to={"/watch"} className='text-decoration-none text-dark' >
                            <img src={watchcat} alt="Card image" style={{ width: "100%", height: "200px" }} />
                            <h5 >Watches</h5>
                        </Link>
                    </Col>
                    <Col md={3} >
                        <Link to={"/shoes"} className='text-decoration-none text-dark'>
                            <img src={shoescat} alt="Card image" style={{ width: "100%", height: "200px" }} />
                            <h5 >Shoes</h5>
                        </Link>
                    </Col>
                    <Col md={3} >
                        <Link to={"/bags"} className='text-decoration-none text-dark'>
                            <img src={bagcat} alt="Card image" style={{ width: "100%", height: "200px" }} />
                            <h5>Bags</h5>
                        </Link>
                    </Col>
                </div>
            </Row>

            <Row>
            <div className='mb-5'>
                    <h1 className='fw-bold'>Products List</h1>
                    <hr />
                </div>
                {image.map((items) => (
                    <Col xs={12} sm={6} md={3} key={items.id} className='mt-5'>
                        <Card onClick={() => Handleclick(items.id)} className='h-100'>
                            <Card.Img
                                variant="top"
                                src={giturl + items.image}
                                style={{ objectFit: 'cover', width: '100%', height: '300px' }}
                            />
                        <Card.Body>
                                <Card.Title>{items.name}</Card.Title>
                                <Card.Text>
                                    {items.price}
                                </Card.Text>
                                <Button className='btn btn-outline-dark py-1 px-1' variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products