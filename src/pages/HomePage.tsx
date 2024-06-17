import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SessionList from "../components/SessionList";
import CompanyInfo from "../components/CompanyInfo";
import ContactInfo from "../components/ContactInfo";
import { Container } from "../styles/HomePage.styled";
const HomePage = () => {
    return(
        <div>
            <Header/>      
            <Container>
                <CompanyInfo/>
                <h2>Nos sessions d'escape game</h2>
                <SessionList/>
                <ContactInfo/>
            </Container>
            <Footer/>
        </div>
    )    
}
export default HomePage;