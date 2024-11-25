import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

const shoesbanner = "https://raw.githubusercontent.com/DhineshWiser/User-panel-website/refs/heads/main/src/assets/shoes-panner.jpg"

function Shoes() {
    const giturl = "https://raw.githubusercontent.com/DhineshWiser/User-panel-website/refs/heads/main/src/assets/"

    const [data, setData] = useState([]);
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
        axios.get("https://673c4fb396b8dcd5f3f964ce.mockapi.io/adminProducts")
            .then(response => setData(response.data))
            .catch(error => {
                console.error("Error fetching data:", error);

            });
    };

    const filterdata = data.filter(items => items.listingType == "shoes")
    console.log(filterdata);


    return (
        <div>
            <div>
                <img class="card-img" src={shoesbanner} alt="Card image" height="645px" />
                <Container>
                    <Row className='py-5'>
                        <h2>shoes..</h2>
                        <hr />
                        {filterdata.map((a) => (
                            <Col md={3} onClick={() => Handleclick(a.id)}>
                                <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }} className='img'>
                                    <Card.Img variant="top" src={giturl + a.image} style={{ height: '254px' }} />
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
        </div>
    )
}

export default Shoes