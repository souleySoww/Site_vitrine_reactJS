import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink, NavMenu } from '../styles/Navbar.styled';

const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to = "/" >
                    Accueil
                </NavLink>
                <NavLink to = "/session/:id">
                    Session
                </NavLink>
                <NavLink to = "/reservation">
                    Reservation
                </NavLink>
                <NavLink to = "/contact">
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
    )
} 
export default Navbar;
