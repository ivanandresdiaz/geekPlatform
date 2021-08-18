import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRankingStudentsGeekyPuntos } from '../../reducers/socialGeekReducer';
import { getFirestoreRankingStudentsGeekyPuntos } from '../../actions/geekyPuntos';

const RankingGeekyPuntos = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const rankingStudentsGeekyPuntos = useSelector(getRankingStudentsGeekyPuntos);
  useEffect(() => {
    if (!(rankingStudentsGeekyPuntos.length > 0)) {
      dispatch(getFirestoreRankingStudentsGeekyPuntos(corteId));
    }

  }, []);
  return (
    <div>
      <h4>
        RankingGeekyPuntos
      </h4>                                                            
      {rankingStudentsGeekyPuntos.length > 0 && rankingStudentsGeekyPuntos.map((student, index) => {
        return (
          <div key={student.uid}>
            <span>
              Posicion
              {index + 1}
            </span>
            <span>{student.fullName}</span>
            <span>Puntaje</span>
            <span>{student.geekyPuntos}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RankingGeekyPuntos;
