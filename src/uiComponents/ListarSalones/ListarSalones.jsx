import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreSalones } from '../../actions/adminActions';
import { getSalones } from '../../reducers/adminReducer';
import { ContainerClasses } from '../../containers/Corte/CorteStyles';

const ListarSalones = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const salones = useSelector(getSalones);
  useEffect(() => {
    dispatch(getFirestoreSalones(corteId));
  }, []);

  // const color={
  //   background: ;
  // }

  return (
    <>
      <>
        {salones.length > 0 && salones.map((salon) => (
          <ContainerClasses key={salon.salonId}>
            <Link to={`/corte/${corteId}/${salon.salonId}`}>
              <>
                <p>{salon.salonName}</p>
                <img src={salon.salonImg} />
              </>
            </Link>
          </ContainerClasses>

        ))}
      </>

    </>
  );
};

export default ListarSalones;
