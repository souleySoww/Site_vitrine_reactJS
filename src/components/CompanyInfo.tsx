import React, { useContext } from "react";
import { CompanyContainerLight, CompanyContainerNight } from "../styles/CompanyInfo.styled";
import ThemeContext from "../context/ThemeContext";

const CompanyInfo = () => {
    const themeContext = useContext(ThemeContext);

    const CompanyContainer = themeContext?.theme === 'night' ? CompanyContainerNight : CompanyContainerLight;
    
    return(
        <CompanyContainer>
            <h2>À Propos de La Maison Horrifique</h2>
            <p>La Maison Horrifique propose des sessions d'escape game immersives sur le thème de l’horreur. Notre mission est de 
            vous offrir une expérience inoubliable et terrifiante, où vous devrez résoudre des énigmes et surmonter des défis 
            pour échapper à nos scénarios effrayants.</p>
        </CompanyContainer>
    )
}
export default CompanyInfo;