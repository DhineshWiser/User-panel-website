import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from 'react-router-dom'

function Navbarr() {
  return (
    <>
      <Navbar expand='md' className='py-3' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='fs-4 fw-bold' href="/">Flone.</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/watch">Watches</NavDropdown.Item>
              <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="/bags">Bags</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='buttons'>
            <Link to={"/Login"}>
              <a href='' className='btn btn-outline-white border-white '>{<FaUserCircle />}
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