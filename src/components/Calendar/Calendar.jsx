import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Componente
import dayGridPlugin from '@fullcalendar/daygrid'; // plugins de dias...
import interactionPlugin from '@fullcalendar/interaction'; // Plugin de interacion
import listPlugin from '@fullcalendar/list'; // plugin de agenda
import esLocale from '@fullcalendar/core/locales/es'; // idioma
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { getFirestoreAllSprints } from '../../actions/classroomActions';
import { getAllSprints } from '../../reducers/salonReducer';
import { ContainerModal, ModalContent, CloseModalButton, Background, FormModal } from '../../uiComponents/Modal/ModalStyles';
import { Button4 } from '../../globalStyles';

const Calendar = (props) => {
  const [showModalCalendar, setShowModalCalendar] = useState(false);
  const [eventData, setEventData] = useState({});

  const { corteId } = props;
  const allSprints = useSelector(getAllSprints);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!(allSprints.length > 0)) {
      dispatch(getFirestoreAllSprints(corteId));
    }
  }, []);
  const ModalTrue = () => {
    return (
      <Background>
        <ContainerModal showModalCalendar={showModalCalendar}>
          <ModalContent>
            <FormModal style={{ margin: '25px' }}>
              <h1>{eventData.title}</h1>
              <h4> Cohorte: {eventData.corteId}</h4>
              <h4>Salón: {eventData.salonId}</h4>
              <hr />
              <h4>Descripción</h4>
              <p style={{ textAlign: 'center' }}>{eventData.description}</p>
              <br />
              <Button4>
                <a href={eventData.deliveryLink}>Enlace de entrega</a>
              </Button4>
              <Button4>
                <a href={eventData.supportLink1}>Enlace de apoyo</a>
              </Button4>
              <Button4>
                <a href={eventData.resourcePDF}>PDF</a>
              </Button4>
              <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalCalendar(false)}>
                <MdClose style={{ alignItems: 'center' }} />
              </CloseModalButton>
            </FormModal>
          </ModalContent>
        </ContainerModal>
      </Background>
    );
  };
  const handleEvent = (el) => {
    const data = {
      title: el.event.title,
      description: el.event._def.extendedProps.description,
      corteId: el.event._def.extendedProps.corteId,
      deliveryLink: el.event._def.extendedProps.deliveryLink,
      resourcePDF: el.event._def.extendedProps.resourcePDF,
      salonId: el.event._def.extendedProps.salonId,
      supportLink1: el.event._def.extendedProps.supportLink1,
    };
    setEventData(data);
    setShowModalCalendar(true);
  };
  console.log(eventData);
  return (
    <div style={{ backgroundColor: 'ffffff', width: 550 }}>
      <h1 style={{ color: '#333333' }}>Calendario GeekPlatform</h1>
      <FullCalendar
        headerToolbar={{
          center: 'dayGridMonth,listWeek,today',
          left: 'title',
          right: 'prev,next',
        }}
        titleFormat={{ year: 'numeric', month: 'short', day: 'numeric' }}
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]} // plugins
        weekends={true} // para mostrar los dias de fines de semana
        events={allSprints} // todos los eventos registrados
        eventClick={handleEvent} // darle click a un evento hacer una accion
        editable={true} //para moverlo
        locales={esLocale} //idioma pack
        locale='es' // agregar idioma
        selectable={true} // nos servira para calcular y dibujar un conjunto de fechas
        unselectAuto={true}
      />
      {showModalCalendar ? <ModalTrue /> : console.log('modalfalse')}
    </div>
  );
};

export default Calendar;
