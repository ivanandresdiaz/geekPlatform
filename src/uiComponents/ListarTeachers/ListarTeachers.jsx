import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listarTeachers } from '../../actions/listarActions';
import { getListTeachers } from '../../reducers/storageTeachersReducer';

const ListarTeachers = () => {
  const dispatch = useDispatch();
  const listTeachers = useSelector(getListTeachers);
  useEffect(() => {
    if (listTeachers.length > 0) {
    } else {
      dispatch(listarTeachers());
    }
  }, []);
  return (
    <div>
      <h1>Profesores</h1>
      <div>
        {listTeachers.length > 0 && listTeachers.map((teacher) => <p key={teacher.username}>{teacher.name}</p>)}
      </div>

    </div>
  );
};

export default ListarTeachers;
