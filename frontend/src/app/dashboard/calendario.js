'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import './calendario.css'

export default function Home() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full h-full">
      
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "event 1", date: "2024-02-28" },
            { title: "event 2", date: "2024-02-29" },
          ]}
          headerToolbar={{
            left: "prev next today",
            center: "title",
            right: "dayGridMonth dayGridWeek dayGridDay",
          }}
          
          nowIndicator={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          dateClick={handleDateClick}
          // drop={}
          // eventClick={}

       
        />
    
    </div>
  );
}