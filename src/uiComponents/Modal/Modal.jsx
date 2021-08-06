import React from 'react'
import AddAdmin from '../../components/AddAdmin/AddAdmin';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import CreateCorte from '../../components/CreateCorte/CreateCorte'
import { Background, CloseModalButton, ContainerModal, ModalContent } from './ModalStyles'

export const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal ? (
                <Background>
                    <ContainerModal showModal={showModal}>
                        <ModalContent>
                            <AddAdmin />
                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                        </ModalContent>
                    </ContainerModal>
                </Background>
            ) : null
            }
        </>
    )
};

export const ModalTeacher = ({ showModalT, setShowModalT }) => {
    return (
        <>
            {showModalT ? (
                <Background>
                    <ContainerModal showModalT={showModalT}>
                        <ModalContent>
                            <AddTeachers />
                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModalT(prevT => !prevT)} />
                        </ModalContent>
                    </ContainerModal>
                </Background>
            ) : null
            }
        </>
    )
};

export const ModalCortes = ({ showModalC, setShowModalC }) => {
    return (
        <>
            {showModalC ? (
                <Background>
                    <ContainerModal showModalC={showModalC}>
                        <ModalContent>
                            <CreateCorte />
                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModalC(prevC => !prevC)} />
                        </ModalContent>
                    </ContainerModal>
                </Background>
            ) : null
            }
        </>
    )
};
