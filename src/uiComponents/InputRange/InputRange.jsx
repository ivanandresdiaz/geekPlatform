import React, { useRef, useState } from 'react';
import './inputRange.scss';

const InputRange = (props) => {
  const { handleInputRangeChangeFather, name } = props;
  const [rangePercent, setRangePercent] = useState(0);
  const h4 = useRef(null);
  const spanH4 = useRef(null);
  const inputRange = useRef(null);
  const handleInputRangeChange = (evento) => {
    const rangePercentage = inputRange.current.value;
    setRangePercent(rangePercentage);
    h4.current.innerHTML = `${rangePercentage}<span></span>`;
    handleInputRangeChangeFather(evento.target.name, evento.target.value);
    // // $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
  };

  return (
    <div className='containerInputRange'>
      <input type='range' value={rangePercent} onChange={handleInputRangeChange} ref={inputRange} style={{ filter: `hue-rotate(-${rangePercent}deg)` }} name={name} />
      <div id='h4-container'>
        <div id='h4-subcontainer'>
          <h4 ref={h4} style={{ transform: `translateX(-50%) scale(${1 + (rangePercent / 100)})`, left: `${rangePercent}%`, filter: `hue-rotate(-${rangePercent}deg)` }}>
            0
            <span ref={spanH4} />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InputRange;
