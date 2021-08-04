import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listarTeachers } from '../../actions/teachersActions';
import { getTeachers } from '../../reducers/teachersReducer';

const ListarTeachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(getTeachers);
  useEffect(() => {
    if (teachers.length > 0) {
    } else {
      dispatch(listarTeachers());
    }
  }, []);
  console.log(teachers);
  return (
    <div>
      <h1>Profesores</h1>
      <div>
        {teachers.length > 0 && teachers.map((teacher) => <p key={teacher.uid}>{teacher.fullName}</p>)}
      </div>

    </div>
  );
};

export default ListarTeachers;
