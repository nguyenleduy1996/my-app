import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation, NavLink  } from 'react-router-dom';

const Header = (props) =>{
    let location = useLocation();
    return (<>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" activeKey={location.pathname}>
                    <NavLink to="/" className="nav-link">Home </NavLink>
                    <NavLink to="/User" className="nav-link">User Manage </NavLink>
                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                   
                        <NavLink to="/Login" className="nav-link">Log Out </NavLink>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}
export default Header