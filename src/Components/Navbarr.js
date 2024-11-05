import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { IoMdLogIn } from "react-icons/io";



function Navbarr() {
  return (
    <>
      <Navbar className='py-3' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='fs-4 fw-bold' href="#home">Flone.</Navbar.Brand>
          <Nav className="mx-auto fs-5">
            <Nav.Link href="#panner">Banner</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
          </Nav>
          <div className='buttons'>
            <a href='' className='btn btn-outline-white border-white '>{<IoMdLogIn />}
                login</a>
          </div>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbarr;