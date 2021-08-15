import React from 'react';
import { MdClose } from 'react-icons/md';
import AddAdmin from '../../components/AddAdmin/AddAdmin';
import AddStudents from '../../components/AddStudents/AddStudents';
import AddTeachers from '../../components/AddTeachers/AddTeachers';
import CreateCorte from '../../components/CreateCorte/CreateCorte';
import AssignedStandardSprints from '../../components/AssignedStandardSprints/AssignedStandardSprints'
import CreateSprints from '../../components/CreateSprints/CreateSprints';
import { Background, CloseModalButton, ContainerModal, ModalContent } from './ModalStyles';

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ContainerModal showModal={showModal}>
            <ModalContent>
              <AddAdmin />
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModal((prev) => !prev)}>
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
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalT((prevT) => !prevT)}>
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

export const ModalEstudiantes = ({ showModalE, setShowModalE, corteId }) => {
  return (
    <>
      {showModalE ? (
        <Background>
          <ContainerModal showModalE={showModalE}>
            <ModalContent>
              <AddStudents corteId={corteId} />
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

export const ModalSprints = ({ showModalSprints, setShowModalSprints, corteId, salon }) => {

  return (
    <>
      {showModalSprints ? (
        <Background>
          <ContainerModal style={{ width: '800px' }} showModalSprints={showModalSprints}>
            <ModalContent>
              <CreateSprints corteId={corteId} salonId={salon} />
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalSprints((prevSprints) => !prevSprints)}>
                <MdClose style={{ alignItems: 'center' }} />
              </CloseModalButton>
            </ModalContent>
          </ContainerModal>
        </Background>
      ) : null}
    </>
  );
};

export const ModalSprintStandard = ({ showModalSprintStandard, setShowModalSprintStandard, corteId, salon }) => {

  return (
    <>
      {showModalSprintStandard ? (
        <Background>
          <ContainerModal style={{ width: '800px' }} showModalSprintStandard={showModalSprintStandard}>
            <ModalContent>
              <AssignedStandardSprints corteId={corteId} salonId={salon} />
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalSprintStandard((prevSprintStandard) => !prevSprintStandard)}>
                <MdClose style={{ alignItems: 'center' }} />
              </CloseModalButton>
            </ModalContent>
          </ContainerModal>
        </Background>
      ) : null}
    </>
  );
};


