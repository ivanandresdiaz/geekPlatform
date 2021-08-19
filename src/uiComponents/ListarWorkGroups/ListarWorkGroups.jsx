/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkGroups } from '../../reducers/salonReducer';
import { getFirestoreWorkGroups } from '../../actions/classroomActions';
import Group from '../../components/Group/Group';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import Footer from '../../components/Structure/Footer';
import { DivCentrar } from './styledListarWorkgroups';

const ListarWorkGroups = (props) => {
  const { corteId, salonId } = props;
  const dispatch = useDispatch();
  const workGroups = useSelector(getWorkGroups);
  useEffect(() => {
    dispatch(getFirestoreWorkGroups(corteId, salonId));
  }, []);

  return (
    <>

      <h3 style={{ textAlign: 'center', color: '#662E9B' }}>Grupos de estudio</h3>
      {workGroups.length > 0 && workGroups.map((workGroup) => {
        const { columnOrder, columns, tasks, title, id } = workGroup;
        return (
          <DivCentrar key={workGroup.id}>
            <Group columnOrder={columnOrder} columns={columns} tasks={tasks} title={title} id={id} corteId={corteId} salonId={salonId} />
          </DivCentrar>

        );
      })}

    </>
  );
};

export default ListarWorkGroups;
