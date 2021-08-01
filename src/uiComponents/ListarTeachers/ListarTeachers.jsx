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
  return (
    <div>
      <h1>Profesores</h1>
      <div>
        {teachers.length > 0 && teachers.map((teacher) => <p key={teacher.username}>{teacher.name}</p>)}
      </div>

    </div>
  );
};

export default ListarTeachers;
