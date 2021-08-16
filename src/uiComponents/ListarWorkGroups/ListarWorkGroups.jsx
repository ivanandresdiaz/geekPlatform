/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkGroups } from '../../reducers/salonReducer';
import { getFirestoreWorkGroups } from '../../actions/classroomActions';
import Group from '../../components/Group/Group';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import Footer from '../../components/Structure/Footer';

const ListarWorkGroups = (props) => {
  const { corteId, salonId } = props;
  const dispatch = useDispatch();
  const workGroups = useSelector(getWorkGroups);
  useEffect(() => {
    dispatch(getFirestoreWorkGroups(corteId, salonId));
  }, []);

  return (
    <>

      <h3>Listar grupos de estudio</h3>
      {workGroups.length > 0 && workGroups.map((workGroup) => {
        const { columnOrder, columns, tasks, title, id } = workGroup;
        return <Group key={workGroup.id} columnOrder={columnOrder} columns={columns} tasks={tasks} title={title} id={id} corteId={corteId} salonId={salonId} />;
      })}

    </>
  );
};

export default ListarWorkGroups;
