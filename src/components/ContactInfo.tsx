import React, { useContext } from "react";
import { ContactContainerLight, ContactContainerNight } from "../styles/ContactInfo.styled";
import ThemeContext from "../context/ThemeContext";


const ContactInfo = () => {
    const themeContext = useContext(ThemeContext);

    const ContactContainer = themeContext?.theme === 'night' ? ContactContainerNight : ContactContainerLight;

    return(
        <ContactContainer>
            <h2>Contactez-nous</h2>
            <p>Email: contact@maison-horrifique.com</p>
            <p>Telephone: +33 1 23 45 67 89</p>
            <p>Adresse: 123 Rue de la Paix, 75000 Paris, France</p>
        </ContactContainer>
    )
}
export default ContactInfo;