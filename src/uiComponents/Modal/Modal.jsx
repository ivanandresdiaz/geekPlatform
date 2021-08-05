import React from 'react'
import AddAdmin from '../../components/AddAdmin/AddAdmin';
import { Background, CloseModalButton, ContainerModal, ModalContent } from './ModalStyles'

export const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal ? (
                <Background>
                    <ContainerModal showModal={showModal}>
                        <ModalContent>
                            <AddAdmin />
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                    </ContainerModal>
                </Background>
            ) : null}
        </>
    )
};
