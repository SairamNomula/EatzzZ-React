import React from 'react'
import {
    FaAt,
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">EatzzZ by Sairam Nomula</SocialLogo>
                        <SocialIcons>
                        <SocialIconLink 
                            href="/" target="_blank" aria-label="Email" rel="noopener noreferrer">
                                <FaAt />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://www.instagram.com/sairam_nomula/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://github.com/SairamNomula" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://www.linkedin.com/in/sairam-nomula-8aa752192/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://www.twitter.com/in/Sairamnomula11?s=08" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;