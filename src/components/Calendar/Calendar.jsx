import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreAllSprints } from '../../actions/classroomActions';
import { getAllSprints } from '../../reducers/salonReducer';

const prueba = [
  { title: 'event 1', date: '2021-08-07' },
  { title: 'event 1', date: '2021-08-09' },
  { title: 'event 1', date: '2021-08-12' },
  { title: 'event 1', date: '2021-08-17' },
  { title: 'event 2', date: '2021-08-08' },
];

const Calendar = (props) => {
  const { corteId } = props;
  const allSprints = useSelector(getAllSprints);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!(allSprints.length > 0)) {
      dispatch(getFirestoreAllSprints(corteId));
    }
  }, []);

  return (
    <div>
      <h1>Calendar GeekPlatform</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={allSprints}
      />
    </div>
  );
};

export default Calendar;
