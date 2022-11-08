// IMPORT REACT
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import 'bootstrap-icons/font/bootstrap-icons.css';




// CREATE COMPONENT
const NavBar = ({ setShow, user, setUser, getMovies }) => {
    // Create a function responsible for logging the user out
    const handleLogOut = () => {
        // Call the logout function
        userService.logOut();

        // Set the user back to null
        setUser(null);
    };

    // console.log(user);
    return (
        <Navbar sticky="top" bg="dark" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home" >CoLab</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home" eventKey="link-1">Home</Nav.Link>
                        <Nav.Link as={Link} to="/forum" eventKey="link-2">Forum</Nav.Link>
                        <Nav.Link as={Link} to="/events" eventKey="link-3">Events</Nav.Link>
                    </Nav>
                    
                    <Nav className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {user.newUser.name}
                        </Navbar.Text>
                        <Button className='invisible' variant="danger">take up space</Button>

                        <Button variant="outline-secondary" as={Link} onClick={() => {
                            return handleLogOut()
                        }} to="">Log Out
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// EXPORT COMPONENT
export default NavBar;
