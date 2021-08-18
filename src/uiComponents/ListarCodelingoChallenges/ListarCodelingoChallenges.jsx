import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCodelingoAllChallenges } from '../../reducers/codelinogReducer';
import { getFirestoreAllCodelingoChallenges } from '../../actions/codelingoActions';
import Row from './Row';
import { getRole } from '../../reducers/authReducer';
import { DivContainerList } from './styledListarCodelingoChallenges';

const ListarCodelingoChallenges = () => {

  const dispatch = useDispatch();
  const role = useSelector(getRole);
  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);
  const userDataLogged = useSelector((state) => state.auth);
  const allCodelingoChallenges = useSelector(getCodelingoAllChallenges);
  useEffect(() => {
    if (role === 'teacher') {
      setTeacher(true);
    } if (role === 'student') {
      setStudent(true);
    }
    if (!(allCodelingoChallenges.length > 0)) {
      dispatch(getFirestoreAllCodelingoChallenges());
    }
  }, []);
  return (
    <div>
      <DivContainerList>
        {allCodelingoChallenges.length > 0 && allCodelingoChallenges.map((challenge, index) => {
          const isDone = userDataLogged.codelingoChallengesDone.includes(challenge.id);
          const isPending = userDataLogged.codelingoChallengesToScore.includes(challenge.id);
          return (
            <Row key={challenge.id} isDone={isDone} isPending={isPending} challenge={challenge} teacher={teacher} student={student} />
          );
        })}
      </DivContainerList>
    </div>
  );
};

export default ListarCodelingoChallenges;
