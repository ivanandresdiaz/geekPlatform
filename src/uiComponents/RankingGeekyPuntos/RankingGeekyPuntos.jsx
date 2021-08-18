import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRankingStudentsGeekyPuntos } from '../../reducers/socialGeekReducer';
import { getFirestoreRankingStudentsGeekyPuntos } from '../../actions/geekyPuntos';
import { ContainerRanking, RankingContent } from './RankingStyles';

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
    <>
      <div style={{ background: '#FF3B53', marginTop: '20px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px', borderRadius: '12px' }}>
        <ContainerRanking>
          <div style={{ padding: '20px' }}>
            <h4 style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>
              Ranking Geeky Puntos
            </h4>
            {rankingStudentsGeekyPuntos.length > 0 && rankingStudentsGeekyPuntos.map((student, index) => {
              return (
                <RankingContent key={student.uid}>
                  <span style={{ color: 'white', alignSelf: 'center', marginRight: '10px' }}>
                    {index + 1}
                  </span>
                  <img src="" alt="" />
                  <span style={{ color: 'white', marginRight: 'auto' }}> {student.fullName}</span>
                  <span style={{ color: 'white' }}> {student.geekyPuntos}</span>
                </RankingContent>
              );
            })}
          </div>
        </ContainerRanking>
      </div >

    </>
  );
};

export default RankingGeekyPuntos;
