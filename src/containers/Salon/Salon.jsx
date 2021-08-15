import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRole } from '../../reducers/authReducer';
import { getSalonData } from '../../reducers/salonReducer';
import { getFirestoreSalon } from '../../actions/classroomActions';
import CreateSprints from '../../components/CreateSprints/CreateSprints';
import ListarSprints from '../../uiComponents/ListarSprints/ListarSprints';
import ListarWorkGroups from '../../uiComponents/ListarWorkGroups/ListarWorkGroups';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import Footer from '../../components/Structure/Footer';
import { ContainerMainSalon, ContainerRowSprint, ContainerTitleGreet } from './SalonStyles';
import AssignedStandardSprints from '../../components/AssignedStandardSprints/AssignedStandardSprints';
import { ModalSprints } from '../../uiComponents/Modal/Modal';
import { Button } from '../../globalStyles';

const Salon = (props) => {
  const role = useSelector(getRole);
  const [showModalSprints, setShowModalSprints] = useState(false);
  const OpenModalSprints = () => { setShowModalSprints((prevSprints) => !prevSprints); };
  const { match: { params: { salon, corteId } } } = props;
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
      <div style={{ background: 'rgb(242, 242, 242)' }}>
        <NavbarAdmin />
        <ContainerMainSalon>
          <ContainerTitleGreet>
            <h1>
              Bienvenido al salon
              {' '}
              {salonData.salonName}
            </h1>
          </ContainerTitleGreet>
          <ContainerTitleGreet>
            {role === 'teacher' && (
              <Button onClick={OpenModalSprints}>
                Crear sprint
              </Button>
            )}
            <ModalSprints showModalSprints={showModalSprints} setShowModalSprints={setShowModalSprints} />
          </ContainerTitleGreet>
        </ContainerMainSalon>
        <ContainerMainSalon>
          <ContainerRowSprint>
            <ListarSprints corteId={corteId} salonId={salon} role={role} />
          </ContainerRowSprint>

        </ContainerMainSalon>
        <ListarWorkGroups corteId={corteId} salonId={salon} />
        {/* 
        {role === 'teacher' && (
          <CreateSprints corteId={corteId} salonId={salon} />
        )}
        {role === 'teacher' && (
          <AssignedStandardSprints corteId={corteId} salonId={salon} />
        )}

        <ListarSprints corteId={corteId} salonId={salon} role={role} />
        <h1>AQUI VA LA AGENDA DE TUTORIAS EXTRAS</h1>
        {role === 'teacher' && (
          <Link to={`/corte/${corteId}/${salon}/createGroups`}>
            Crear Nuevos grupos de trabajo LINK !!! SOLO PROFESOR
          </Link>
        )} */}

        <Footer />
      </div>
    </>
  );
};

export default Salon;
