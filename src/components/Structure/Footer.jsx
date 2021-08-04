import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterHeading,
  FooterSubHeading,
  FooterAliances,
  FooterSubText,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterIcon,
  List,
  ListAliance,
  ListItem,
} from '../../styles/FooterStyles';
import logo from '../../images/brand/logo.png';
import aliance1 from '../../images/other/landing-1.png';
import aliance2 from '../../images/other/landing-2.png';
import aliance3 from '../../images/other/landing-3.png';
import aliance4 from '../../images/other/landing-4.png';

const Footer = () => {

  return (
    <>
      <FooterContainer>
        <FooterHeading>
          <FooterSubHeading>
            <SocialLogo to='/inicio'>
              <FooterIcon src={logo} />
              Geek Platform
            </SocialLogo>
            <FooterSubText>
              Síguenos en
            </FooterSubText>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/Academia-Geek-107886901581361/?ref=page_internal' target='blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/geek_colombia' target='blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/laacademiageek/?hl=es' target='blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/academia-geek-bootcamp/' target='blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </FooterSubHeading>
        </FooterHeading>
        <FooterSubscription>
          <FooterSubHeading>
            <FooterSubText>
              Acerca de
              <List>
                <ListItem href='https://academiageek.co/inicio/' target='blank' aria-label='Compañia'>Compañia</ListItem>
                <ListItem href='https://academiageek.co/admisiones/' target='blank' aria-label='Admisiones'>Admisiones</ListItem>
                <ListItem href='https://academiageek.co/becas/' target='blank' aria-label='Becas'>Becas</ListItem>
                <ListItem href='https://academiageek.co/para-empresas/' target='blank' aria-label='Para empresas'>Para empresas</ListItem>
                <ListItem href='https://academiageek.co/contacto/' target='blank' aria-label='Compañia'>Contacto</ListItem>
                <ListItem href='https://academiageek.co/entrenamientos/' target='blank' aria-label='Compañia'>Entrenamientos</ListItem>
              </List>
            </FooterSubText>
          </FooterSubHeading>
          <FooterSubHeading>
            <FooterSubText>
              Terminos y condiciones
              <List>
                <ListItem>Términos y condiciones</ListItem>
                <ListItem>Políticas de privacidad</ListItem>
                <ListItem>Políticas de inclusión</ListItem>
              </List>
            </FooterSubText>
          </FooterSubHeading>
          <FooterAliances>
            <FooterSubText>
              Nuestros socios
              <ListAliance>
                <ListItem>
                  <div href='https://agileinnova.org/' target='blank' aria-label='AgileInnova'>
                    <img src={aliance1} alt='' />
                  </div>
                </ListItem>
                <ListItem>
                  <div href='https://academiageek.co/' target='blank' aria-label='Academia Geek'>
                    <img src={aliance2} alt='' />
                  </div>
                </ListItem>
                <ListItem>
                  <div href='https://e-volution.co/es/' target='blank' aria-label='E_volution'>
                    <img src={aliance3} alt='' />
                  </div>
                </ListItem>
                <ListItem>
                  <div href='https://makaia.org/' target='blank' aria-label='Makaia'>
                    <img src={aliance4} alt='' />
                  </div>
                </ListItem>
              </ListAliance>
            </FooterSubText>
          </FooterAliances>
        </FooterSubscription>
        <SocialMedia>
          <WebsiteRights>Copyright @ 2021, Equipo Dinamita, todos los derechos reservados. </WebsiteRights>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
