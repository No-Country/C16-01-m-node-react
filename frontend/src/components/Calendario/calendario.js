'use client'
import FullCalendar from '@fullcalendar/react'; 
import listPlugin from '@fullcalendar/list'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 

const Calendar = ({ events }) => {

  return (
   
    <div className='flex h-full w-full'> 
      <FullCalendar 
        plugins={[ listPlugin, dayGridPlugin ]}
        initialView='listWeek' // Mostrar la vista de lista por defecto
        weekends={false} // Opcional: Ocultar fines de semana
        events={events}
        />
    </div>
    
  );
};



export default Calendar;
