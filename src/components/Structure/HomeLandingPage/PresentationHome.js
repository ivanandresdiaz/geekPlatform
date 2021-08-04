import React from 'react';
import {  homeObjOne } from './Data';
import Presentation from './Presentation.jsx';


const PresentationHome = () => {
    return (
        <>
            <Presentation {...homeObjOne} />          
        </>
    );
};

export default PresentationHome;
