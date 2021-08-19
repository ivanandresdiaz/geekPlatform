import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRole } from '../../reducers/authReducer';
import { getSalonData } from '../../reducers/salonReducer';
import { getFirestoreSalon } from '../../actions/classroomActions';
import ListarSprints from '../../uiComponents/ListarSprints/ListarSprints';
import ListarWorkGroups from '../../uiComponents/ListarWorkGroups/ListarWorkGroups';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import NavbarStudent from '../../components/Structure/NavbarStudent';
import Footer from '../../components/Structure/Footer';
import { ContainerMainSalon, ContainerRowSprint, ContainerTitleGreet } from './SalonStyles';
import { ModalSprints, ModalSprintStandard } from '../../uiComponents/Modal/Modal';
import { Button6 } from '../../globalStyles';

const Salon = (props) => {
  const role = useSelector(getRole);
  const { match: { params: { salon, corteId } } } = props;
  const [showModalSprints, setShowModalSprints] = useState(false);
  const [showModalSprintStandard, setShowModalSprintStandard] = useState(false);
  const OpenModalSprintStandard = () => { setShowModalSprintStandard((prevSprintStandard) => !prevSprintStandard); };
  const OpenModalSprints = () => { setShowModalSprints((prevSprints) => !prevSprints); };
  const salonData = useSelector(getSalonData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFirestoreSalon(corteId, salon));
  }, []);
  if (salonData.length > 0) {
    const sprintsArray = Object.keys(salonData.sprints);
    console.log(sprintsArray);
  }
  return (
    <>
      {role === 'teacher' && (
        <NavbarTeacher />
      )}
      {role === 'admin' && (
        <NavbarAdmin />
      )}
      {role === 'student' && (
        <NavbarStudent />
      )}
      <ContainerMainSalon>
        <ContainerTitleGreet>
          <h1>
            Bienvenido al salon
            {' '}
            {salonData.salonName}
          </h1>
        </ContainerTitleGreet>
        <ContainerTitleGreet style={{ textAlign: 'center' }}>
          {role === 'teacher' && (
            <Button6 primary onClick={OpenModalSprints}>
              Añadir sprint
            </Button6>
          )}
          {role === 'teacher' && (
            <Button6 primary onClick={OpenModalSprintStandard}>
              Añadir sprint standard
            </Button6>
          )}
          {role === 'teacher' && (
            <Link to={`/corte/${corteId}/${salon}/createGroups`}>
              <Button6 primary>
                Crear grupos de estudio
              </Button6>
            </Link>
          )}
          <ModalSprintStandard showModalSprintStandard={showModalSprintStandard} setShowModalSprintStandard={setShowModalSprintStandard} corteId={corteId} salonId={salon} />
          <ModalSprints showModalSprints={showModalSprints} setShowModalSprints={setShowModalSprints} corteId={corteId} salonId={salon} />
        </ContainerTitleGreet>
      </ContainerMainSalon>
      <ContainerMainSalon>
        <ContainerRowSprint>
          <ListarSprints corteId={corteId} salonId={salon} role={role} />
        </ContainerRowSprint>
      </ContainerMainSalon>
      <ContainerMainSalon>
        <ListarWorkGroups corteId={corteId} salonId={salon} />

      </ContainerMainSalon>
      <Footer />
    </>
  );
};

export default Salon;
