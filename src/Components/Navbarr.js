import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from 'react-router-dom'

function Navbarr() {
  return (
    <>
      <Navbar expand='lg' className='py-3' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='fs-4 fw-bold' href="#home">Flone.</Navbar.Brand>
          <Nav className="mx-auto fs-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
          </Nav>
          <div className='buttons'>
            <Link to={"/Login"}>
              <a href='' className='btn btn-outline-white border-white '>{<FaUserCircle  />}
                Login</a>
            </Link>
            {/* <Link to={"/signup"}>
              <a href='' className='btn btn-outline-white border-white ms-2 '><SiGnuprivacyguard />
                Signup </a>
            </Link> */}
          </div>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbarr;