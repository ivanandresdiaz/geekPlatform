import React from 'react';
import logo from '../../images/brand/logo.png';
import { FooterIcon, SocialLogo } from '../../styles/FooterStyles';
import { ContainerCardAbout, ContImg } from './AboutStyles';
import Andres from "../../images/brand/andres.jpg";
import Jorge from "../../images/brand/jorge.png";
import Juan from "../../images/brand/juan.jpg";
import imgR from "../../images/brand/react.png";
import imgRedux from "../../images/brand/redux.png"
import imgFirebase from "../../images/brand/firebase.png"
import imgStyled from "../../images/brand/styled.png"
import imgux from "../../images/brand/ux.png"
import { motion } from 'framer-motion';


const AcercaDeProgramadores = () => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 20 }}
          transition={{ delay: 0.020, type: 'spring', stiffness: 50 }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '200px', placeContent: 'center' }}>
            <SocialLogo style={{ color: '#000000', fontSize: '78px' }}>
              <FooterIcon style={{ width: '135px', height: '60px', }} src={logo} />
              Geek Platform
            </SocialLogo>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 20 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 50 }}
        >
          <h2 style={{ color: '#B25327', textAlign: 'center' }}>"Queremos ser el referente de la educacion hibrida, integrando la educacion, la virtualidad y las relaciones humanas."</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'row', placeContent: 'center', marginTop: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', marginRight: '30px', marginLeft: '30px' }}>

            {/* Andrés */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.01, type: 'spring', stiffness: 50 }}
            >
              <ContainerCardAbout>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <ContImg>
                    <img src={Andres} alt="Iván Andrés Diaz" />
                  </ContImg>
                  <h3 style={{ textAlign: 'center', fontWeight: '700' }}>Iván Andrés Diaz</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgR} alt="React" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgRedux} alt="Redux" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgFirebase} alt="Firebase" />
                  </div>
                </div>
              </ContainerCardAbout>
            </motion.div>


            {/* Juan */}

            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 20 }}
              transition={{ delay: 0.01, type: 'spring', stiffness: 50 }}
            >
              <ContainerCardAbout style={{ margin: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <ContImg>
                    <img src={Juan} alt="Juan Camilo Velásquez" />
                  </ContImg>
                  <h3 style={{ textAlign: 'center', fontWeight: '700' }}>Juan Camilo Velásquez Amarillo</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgux} alt="UX Designer" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgR} alt="React Js" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgStyled} alt="Styled Components" />
                  </div>
                </div>
              </ContainerCardAbout>
            </motion.div>

            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.01, type: 'spring', stiffness: 50 }}
            >
              {/* Jorge */}
              <ContainerCardAbout>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <ContImg>
                    <img src={Jorge} alt="Jorge Quintero" />
                  </ContImg>
                  <h3 style={{ textAlign: 'center', fontWeight: '700', marginTop: '10px' }}>Jorge Quintero</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgR} alt="UX Designer" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <img style={{ width: '70px' }} src={imgRedux} alt="React Js" />
                  </div>
                </div>
              </ContainerCardAbout>
            </motion.div>

          </div>
        </div>
      </div >
    </>
  );
};

export default AcercaDeProgramadores;
