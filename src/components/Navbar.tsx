import React, { useContext, useEffect, useState } from 'react';
import { NavLight, NavNight, NavLinkLight, NavLinkNight, NavMenu, NavSwitch, NavCheckbox, NavSlider, NavLabelLight, NavLabelNight, NavToggleTheme } from '../styles/Navbar.styled';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {
    const themeContext = useContext(ThemeContext)
    const [checked, setChecked] = useState<boolean>(false)

    const Nav = themeContext?.theme === 'night' ? NavNight : NavLight;
    const NavLink = themeContext?.theme === 'night' ? NavLinkNight : NavLinkLight;
    const NavLabel = themeContext?.theme === 'night' ? NavLabelNight : NavLabelLight;

    useEffect(() => {
        if (themeContext?.theme === 'night') {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }, [themeContext])

    return (
        <Nav>
            <NavMenu>
                <NavLink to = "/" >
                    Accueil
                </NavLink>
                <NavLink to = "/reservation">
                    Reservation
                </NavLink>
                <NavLink to = "/contact">
                    Contact
                </NavLink>
                <NavLink to = "/employees">
                    Employees
                </NavLink>
                <NavLink to = "/sessions">
                    Sessions
                </NavLink>
            </NavMenu>
            <NavToggleTheme>
                <NavLabel>Night</NavLabel>
                <NavSwitch>
                    <NavCheckbox type="checkbox" checked={checked} onChange={themeContext?.toggleTheme} />
                    <NavSlider />
                </NavSwitch>
                <NavLabel>Light</NavLabel>
            </NavToggleTheme>
        </Nav>
    )
} 
export default Navbar;
