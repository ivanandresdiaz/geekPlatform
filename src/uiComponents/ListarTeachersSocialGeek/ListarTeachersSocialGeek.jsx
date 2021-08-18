import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listarTeachers } from '../../actions/teachersActions';
import { getTeachers } from '../../reducers/teachersReducer';

const ListarTeachersSocialGeek = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const teachers = useSelector(getTeachers);
  useEffect(() => {
    if (!(teachers.length > 0)) {
      dispatch(listarTeachers());
    }
  }, []);
  return (
    <>
      <div>
        {teachers.length > 0 && teachers.map((teacher) => (
          <div key={teacher.uid}>
            <Link to={`/socialGeek/${corteId}/${teacher.uid}`}>
              {teacher.fullName}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListarTeachersSocialGeek ;
