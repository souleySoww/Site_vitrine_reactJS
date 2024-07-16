import React, { useContext } from "react";
import { DivLogo, DivSpan, DivText, DivTextContext, FooterContainerLight, FooterContainerNight, LinkTextLight, LinkTextNight } from "../styles/Footer.styled";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
    const themeContext = useContext(ThemeContext)

    const FooterContainer = themeContext?.theme === 'night' ? FooterContainerNight : FooterContainerLight;
    const LinkText = themeContext?.theme === 'night' ? LinkTextNight : LinkTextLight;

    return (
    <FooterContainer>
        <div style={{display: "flex",justifyContent:"space-between"}}>
            <DivSpan></DivSpan>
            <DivTextContext>
                <DivText>
                    <LinkText href="/sessions/">Session</LinkText>
                </DivText>
                <DivText>
                    <LinkText href="/legal/">Mentions légales</LinkText>
                </DivText>
                <DivText>
                    <LinkText href="/contact/">Contact</LinkText>
                </DivText>
            </DivTextContext>
            <DivLogo>
                <div>
                    <img src="icon-facebook.png"></img>
                </div>
                <div>
                    <img src="icon-instagram.png"></img>
                </div>
                <div>
                    <img src="icon-twitterx.png"></img>
                </div>
                <div>
                    <img src="icon-tiktok.png"></img>
                </div>
            </DivLogo>
        </div>
        <p>&copy; 2024 La Maison Horrifique. Tous droits réservés.</p>
    </FooterContainer>
    )
}

export default Footer;