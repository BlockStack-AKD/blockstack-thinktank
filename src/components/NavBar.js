import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import blockstackLogo from "../assets/blockstack-logo.png"

import "../styles/Navbar.css"

const NavBar = props => {

    return (
        <>
            <Navbar style={{color: '#FCFCFD'}}>
                <NavbarBrand style={{padding: "0", margin: '0'}}><img src={blockstackLogo} className="navbar-image" alt=""/></NavbarBrand>
                <Nav>
                    <NavItem className="navbar-hover">
                        <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem className="navbar-hover">
                        <NavLink>About</NavLink>
                    </NavItem>
                    <NavItem className="navbar-hover">
                        <NavLink>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar