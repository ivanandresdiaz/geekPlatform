import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSalonData } from '../../reducers/salonReducer';
import { getFirestoreSalon } from '../../actions/classroomActions';
import CreateSprints from '../../components/CreateSprints/CreateSprints';
import ListarSprints from '../../uiComponents/ListarSprints/ListarSprints';

const Salon = (props) => {
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
    <div>
      <h1>
        Bienvenido al salon
        {' '}
        {salonData.salonName}
      </h1>

      <CreateSprints corteId={corteId} salonId={salon} />
      <ListarSprints corteId={corteId} salonId={salon} />
      <h1>AQUI VA LA AGENDA DE TUTORIAS EXTRAS</h1>
      <h1>AQUI VA LA CREACION DE GRUPOS CON DRAG AND DROP</h1>
    </div>
  );
};

export default Salon;
