import React from 'react'
import Logo from "../img/logo.jpg";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap';


{/* NavBar Component */ }
function NavbarComp() {

    const position = useLocation();
    const isCurrentURL = (url) => {
        return position.pathname.toLowerCase() === url.toLowerCase();
    }
    return (
        <div className="appHeader">
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={Logo}
                            width="35"
                            height="50"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navItems">
                            <ul>
                                <li> {!isCurrentURL('/') ? <NavItem>
                                    <Nav.Link href="/"> Home</Nav.Link>
                                </NavItem> : null}
                                </li>
                                <li>
                                    {!isCurrentURL('/Board') ? <NavItem>
                                        <Nav.Link href="/Currency" >  Chess Game</Nav.Link>
                                    </NavItem> : null}
                                </li>
                                <li>
                                    {!isCurrentURL('/AboutUs') ? <NavItem>
                                        <Nav.Link href="/AboutUs">  About The Game </Nav.Link>
                                    </NavItem> : null}
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavbarComp;
