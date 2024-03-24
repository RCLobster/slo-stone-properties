import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Auth from '../utils/auth';

const AppNavbar = () => {

  return (
    <>
      <Navbar expand="lg" className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-center">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/documents">Documents</Nav.Link>
            <Nav.Link href="/application">Apply Now</Nav.Link>
            <NavDropdown title="Properties" id="basic-nav-dropdown">
              <NavDropdown.Item href="/patricia214">
                214 Patricia
              </NavDropdown.Item>
              <NavDropdown.Item href="/patricia226">
                226 Patricia
              </NavDropdown.Item>
              <NavDropdown.Item href="/craig205">
                205 Craig
              </NavDropdown.Item>
              <NavDropdown.Item href="/patricia242">
                242 Patricia
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            {Auth.loggedIn() ? (
              <Nav.Link href="/admin">Admin</Nav.Link>
            ) : (
              <></>
            )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNavbar;
