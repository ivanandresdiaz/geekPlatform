import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // Componente
import dayGridPlugin from '@fullcalendar/daygrid'; // plugins de dias...
import interactionPlugin from '@fullcalendar/interaction'; // Plugin de interacion
import esLocale from '@fullcalendar/core/locales/es'; // idioma
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreAllSprints } from '../../actions/classroomActions';
import { getAllSprints } from '../../reducers/salonReducer';

const Calendar = (props) => {
  const { corteId } = props;
  const allSprints = useSelector(getAllSprints);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!(allSprints.length > 0)) {
      dispatch(getFirestoreAllSprints(corteId));
    }
  }, []);

  const handleEvent = (el) => {
    el.event.url === '' ?
      alert('Evento sin establecer') :
      alert('Deseas ir el evento'); // logica para hacer si existe una url
  };
  return (
    <div style={{ backgroundColor: 'ffffff', width: 550 }}>
      <h1 style={{ color: '#333333' }}>Calendario GeekPlatform</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // plugins
        weekends={true} // para mostrar los dias de fines de semana
        events={allSprints} // todos los eventos registrados
        eventClick={handleEvent} // darle click a un evento hacer una accion
        editable={true} //para moverlo
        locales={esLocale} //idioma pack
        locale='es' // agregar idioma
        selectable={true} // nos servira para calcular y dibujar un conjunto de fechas
        unselectAuto={true}
      />
    </div>
  );
};

export default Calendar;
