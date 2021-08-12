import React from 'react';
import { Container } from '../../../globalStyles';
import { Link } from 'react-router-dom';
import {
    InfoColumn,
    PresentationSec,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    FooterBtnLink
} from '../../../styles/PresentationStyles';
import img from "../../../images/other/landing-5.png"
import { Button2 } from "../../../globalStyles"

const Presentation = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    description,
    headline,
    lightText,
    topLine,
    alt,
    start
}) => {
    return (
        <>
            <PresentationSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading initial={{ x: -300 }} animate={{ x: 0 }}
                                    transition={{ delay: 0.1, type: 'spring', stiffness: 40 }} lightText={lightText}>{headline}</Heading>
                                <Subtitle initial={{ x: -300 }} animate={{ x: 0 }}
                                    transition={{ delay: 0.08, type: 'spring', stiffness: 40 }} lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/auth/login'>
                                    <FooterBtnLink to="/auth/login">
                                        <Button2 fontBig primary>¡Entra ahora!</Button2>
                                    </FooterBtnLink>
                                </Link>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper initial={{ x: 300 }} animate={{ x: 0 }}
                                transition={{ delay: 0.1, type: 'spring', stiffness: 40 }} start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </PresentationSec>
        </>
    );
};

export default Presentation;
