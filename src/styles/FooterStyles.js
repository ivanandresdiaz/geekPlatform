import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  background-color: #b25327;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  margin-top: 60px;
`;

const FooterSubscription = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24;
  align-items: start;
  color: #fff;
`;

const FooterHeading = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-end;
  text-align: center;
  margin-bottom: 24px;
  padding: 24;
  align-items: start;
  color: #fff;
  align-items: center;
  margin-right: 80px;
`;

const FooterSubHeading = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  margin-right: 80px;
`;

const FooterAliances = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  margin-right: 80px;
  display: flex;
  flex-wrap: wrap;
`;

const FooterSubText = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
`;

const ListAliance = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  padding: 0px 20px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0px;
  text-decoration: none;
  color: #fff;

  a{
    color: #fff;
  }
`;

const SocialMedia = styled.section`
  max-width: 1400px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-family: "Vibur", cursive;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const FooterIcon = styled.img`
  width: 100px;
  height: 45px;
  border: none;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export {
  FooterContainer,
  FooterSubscription,
  FooterHeading,
  FooterSubHeading,
  FooterAliances,
  FooterSubText,
  SocialMedia,
  WebsiteRights,
  FooterIcon,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  SocialMediaWrap,
  List,
  ListAliance,
  ListItem,
};
