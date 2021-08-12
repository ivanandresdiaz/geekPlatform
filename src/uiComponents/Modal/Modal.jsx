import React from 'react';
import { MdClose } from 'react-icons/md';
import AddAdmin from '../../components/AddAdmin/AddAdmin';
import AddStudents from '../../components/AddStudents/AddStudents';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import CreateCorte from '../../components/CreateCorte/CreateCorte';
import { Background, CloseModalButton, ContainerModal, ModalContent } from './ModalStyles';

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ContainerModal showModal={showModal}>
            <ModalContent>
              <AddAdmin />
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModal((prev) => !prev)} >
                <MdClose style={{ alignItems: 'center' }} />
              </CloseModalButton>
            </ModalContent>
          </ContainerModal>
        </Background>
      ) : null}
    </>
  );
};

export const ModalTeacher = ({ showModalT, setShowModalT }) => {
  return (
    <>
      {showModalT ? (
        <Background>
          <ContainerModal showModalT={showModalT}>
            <ModalContent>
              <AddTeachers />
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalT((prevT) => !prevT)} >
                <MdClose style={{ alignItems: 'center' }} />
              </CloseModalButton>
            </ModalContent>
          </ContainerModal>
        </Background>
      ) : null}
    </>
  );
};

export const ModalCortes = ({ showModalC, setShowModalC }) => {
  return (
    <>
      {showModalC ? (
        <Background>
          <ContainerModal showModalC={showModalC}>
            <ModalContent>
              <CreateCorte />
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalC((prevC) => !prevC)}>
                <MdClose style={{ alignItems: 'center' }} />
              </CloseModalButton>
            </ModalContent>
          </ContainerModal>
        </Background>
      ) : null}
    </>
  );
};

export const ModalEstudiantes = ({ showModalE, setShowModalE }) => {
  return (
    <>
      {showModalE ? (
        <Background>
          <ContainerModal showModalE={showModalE}>
            <ModalContent>
              <AddStudents />
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalE((prevE) => !prevE)}>
                <MdClose style={{ alignItems: 'center' }} />
              </CloseModalButton>
            </ModalContent>
          </ContainerModal>
        </Background>
      ) : null}
    </>
  );
};
