import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';

const ListarStudentsSocialGeek = (props) => {
  const { corteId } = props;
  const studentsCorte = useSelector(getStudentsCorte);
  useEffect(() => {
    if (!(studentsCorte.length > 0)) {
      dispatch(getFirestoreStudentsCorte(corteId));
    }
  }, []);
  console.log(studentsCorte);
  return (
    <div />
  );
};

export default ListarStudentsSocialGeek;

