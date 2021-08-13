import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsCorte } from '../../reducers/studentsReducer';
import { choseWeekStudent } from '../../actions/geekyPuntos';

const ListarStudentsToVote = () => {
  const dispatch = useDispatch();
  const [voteAvaliable, setVoteAvaliable] = useState(false);
  const studentsCorte = useSelector(getStudentsCorte);
  const handleChoseWeekStudent = (uid, fullName) => {
    dispatch(choseWeekStudent(uid, fullName));
    setVoteAvaliable(true);
  };
  return (
    <div>
      <h1>Estudiante</h1>
      <p> Solo se puede votar una vez por estudiante, si votas se desparecera la opcion</p>
      <div>
        {studentsCorte.length > 0 && studentsCorte.map((student) => (
          <div key={student.uid}>
            <button type='button' disabled={voteAvaliable} onClick={() => handleChoseWeekStudent(student.uid, student.fullName)}>
              Elijo
              {' '}
              {student.fullName}
              {' '}
              como estudiante semana
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ListarStudentsToVote;
