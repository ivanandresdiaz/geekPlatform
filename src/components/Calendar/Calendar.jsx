import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Componente
import dayGridPlugin from '@fullcalendar/daygrid'; // plugins de dias...
import interactionPlugin from '@fullcalendar/interaction'; // Plugin de interacion
import esLocale from '@fullcalendar/core/locales/es'; // idioma
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreAllSprints } from '../../actions/classroomActions';
import { getAllSprints } from '../../reducers/salonReducer';
import { ContainerModal, ModalContent } from '../../uiComponents/Modal/ModalStyles';
import { MdClose } from 'react-icons/md';





const Calendar = (props) => {
  const ModalCalendario = ({ showModalCalendar, setShowModalCalendar }) => {
    return (
      <>
        {showModalCalendar ? (
          <Background>
            <ContainerModal showModalCalendar={showModalCalendar}>
              <ModalContent>
                <h4>Corte: ${el.event._def.extendedProps.corteId} </h4>
                <h4>Salon: ${el.event._def.extendedProps.salonId}</h4>
                <h4>Titulo: ${el.event.title}</h4>
                <h4> Descripcion: ${el.event._def.extendedProps.description}</h4>
                <h4> Link de Apoyo : ${el.event._def.extendedProps.supportLink1}</h4>
                <h4>Link de Entrega : ${el.event._def.extendedProps.deliveryLink}</h4>
                <h4>Corte: ${el.event._def.extendedProps.corteId}</h4>
                <h4>PDF:${el.event._def.extendedProps.resourcePDF}</h4>
                <CloseModalButton whileHover={{ scale: 1.1 }} aria-label='Close modal' onClick={() => setShowModalCalendar((prevCalendar) => !prevCalendar)}>
                  <MdClose style={{ alignItems: 'center' }} />
                </CloseModalButton>
              </ModalContent>
            </ContainerModal>
          </Background>
        ) : null}
      </>
    );
  };
  const [showModalCalendar, setShowModalCalendar] = useState(false);
  const OpenModalCalendar = () => { setShowModalCalendar((prevCalendar) => !prevCalendar); };

  const { corteId } = props;
  const allSprints = useSelector(getAllSprints);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!(allSprints.length > 0)) {
      dispatch(getFirestoreAllSprints(corteId));
    }
  }, []);

  /*  
   el.event.title  -> titulo del evento
   el.event._def.extendedProps.description ->descripcion 
   el.event._def.extendedProps.corteId -> Id de la corte "nombre"
   el.event._def.extendedProps.deliveryLink -> Link de entrega
   el.event._def.extendedProps.resourcePDF -> RecursoPdf
   el.event._def.extendedProps.salonId -> Id del salon "nombre"
   el.event._def.extendedProps.supportLink1 -> link de soporte
   */
  const handleEvent = (el) => {
    // `Corte: ${el.event._def.extendedProps.corteId}`)

    <ModalCalendario showModalCalendar={showModalCalendar} setShowModalCalendar={setShowModalCalendar} />
  };
  return (
    <div style={{ backgroundColor: 'ffffff', width: 550 }}>
      <h1 style={{ color: '#333333' }}>Calendario GeekPlatform</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // plugins
        weekends={true} // para mostrar los dias de fines de semana
        events={allSprints} // todos los eventos registrados
        eventClick={OpenModalCalendar, handleEvent} // darle click a un evento hacer una accion
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
