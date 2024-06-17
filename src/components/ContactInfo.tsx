import React from "react";
import { ContactContainer } from "../styles/ContactInfo.styled";


const ContactInfo = () => {
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