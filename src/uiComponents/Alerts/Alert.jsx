import React from 'react'
import { ContainerAlert } from './AlertStyles'

const Alert = () => {
    return (
        <>
            <ContainerAlert initial={{ x: 300 }} animate={{ x: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 50 }}>
                <div>
                    <p> Se ha activado la votación del estudiante de la semana</p>
                </div>

            </ContainerAlert>

        </>
    )
}

export default Alert
