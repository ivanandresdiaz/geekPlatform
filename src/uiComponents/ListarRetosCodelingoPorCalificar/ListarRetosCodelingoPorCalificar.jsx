import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCodelingoChallengesToScore, getFirestoreAllCodelingoChallenges } from '../../actions/codelingoActions';
import { getChallengesToScore, getCodelingoAllChallenges } from '../../reducers/codelinogReducer';
import { ContainerRetosCalChallenge, DivContainerList } from './styledListarRetosCodelingoCalificar';

import RowCalificar from './RowCalificar';

const ListarRetosCodelingoPorCalificar = () => {
  const dispatch = useDispatch();
  const allCodelingoChallenges = useSelector(getCodelingoAllChallenges);
  const challengesToScore = useSelector(getChallengesToScore);
  useEffect(() => {
    if (!(allCodelingoChallenges.length > 0)) {
      dispatch(getFirestoreAllCodelingoChallenges());
    }
    dispatch(getCodelingoChallengesToScore());
  }, []);
  return (
    <>
      <ContainerRetosCalChallenge>
        <DivContainerList>
          {challengesToScore.length > 0 && challengesToScore.map((dataChallengeToScore, index) => {
            const challenge = allCodelingoChallenges.filter((item) => item.id === dataChallengeToScore.challengeId);
            if (challenge.length > 0) {
              return (
                <RowCalificar key={dataChallengeToScore.id} challenge={challenge[0]} dataChallengeToScore={dataChallengeToScore} />
              );
            }
          })}
        </DivContainerList>
      </ContainerRetosCalChallenge>

    </>
  );
};

export default ListarRetosCodelingoPorCalificar;
