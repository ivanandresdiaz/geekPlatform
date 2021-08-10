import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { scoreResourceFirestore } from '../../actions/bancoRecursosActions';
import './StarsRating.scss';

const StarsRating = (props) => {
  const dispatch = useDispatch();
  const [averageScore, setAverageScore] = useState(0);
  const { score, id } = props;

  useEffect(() => {
    if (score.length > 0) {
      const updatedScore = Math.round(score.reduce((acc, el) => acc + el, 0) / score.length);
      setAverageScore(updatedScore);
    }
  }, []);

  const handleScoreResource = (newScore) => {
    if (score.length > 0) {
      const newUpdatedScore = [...score, newScore];
      const updatedScore = Math.round(newUpdatedScore.reduce((acc, el) => acc + el, 0) / score.length);
      setAverageScore(updatedScore);
    } else {
      setAverageScore(newScore);
    }
    dispatch(scoreResourceFirestore(id, newScore, score));
  };
  return (
    <div>
      <div className='wrapper'>
        <div className='rating-holder'>
          <div className='c-rating c-rating--small' data-rating-value={averageScore}>
            <button type='button' onClick={() => handleScoreResource(1)}>1</button>
            <button type='button' onClick={() => handleScoreResource(2)}>2</button>
            <button type='button' onClick={() => handleScoreResource(3)}>3</button>
            <button type='button' onClick={() => handleScoreResource(4)}>4</button>
            <button type='button' onClick={() => handleScoreResource(5)}>5</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarsRating;
