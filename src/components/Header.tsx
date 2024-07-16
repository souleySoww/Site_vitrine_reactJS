import React, { useContext } from "react";
import { HeaderContainerNight, HeaderContainerLight } from "../styles/Header.styled";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const themeContext = useContext(ThemeContext);

    const HeaderContainer = themeContext?.theme === 'night' ? HeaderContainerNight : HeaderContainerLight;

    return(
    <HeaderContainer>
        <h1>La Maison Horrifique</h1>
    </HeaderContainer>
    );
}
export default Header;