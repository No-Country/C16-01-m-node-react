import * as React from "react";
import { IconComponent } from "./components/IconComponent.client"; // Importa el componente IconComponent
import Calendario from "./calendario";
import Calendar from "@/components/Calendario/calendario";
import { INITIAL_EVENTS } from "./event-utils";
export default function Page() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mx-2 mt-5">
      <div
        className="bg-custom-color p-4"
        style={{
          width: "355px",
          height: "300px",
          top: "161px",
          left: "398px",
          borderRadius: "28px",
          margin: "20px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            fontFamily: "Calibri",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Comunicaciones
          <div className="relative mt-8">
            {/* Div blanco dentro del div principal */}
            <div className="absolute w-80 h-20 bg-white rounded-2xl flex items-center justify-between">
              {/* Div azul con texto "ux/ui" */}
              <div className="absolute top-3 left-4 bg-blue-500 text-white w-14 h-14 rounded-lg flex items-center justify-center">
                <p className="text-sm font-bold text-black">UX/UI</p>
              </div>
              <p className="text-sm text-gray-800 font-bold ml-20">Daniel, nuevo miembro en el equipo</p>
            </div>
          </div>
        </div>
        
        {/* Segundo conjunto de elementos */}
        <div
          style={{
            fontFamily: "Calibri",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Comunicaciones
          <div className="relative mt-20">
            {/* Div blanco dentro del div principal */}
            <div className="absolute w-80 h-20 bg-white rounded-2xl flex items-center justify-between">
              {/* Div azul con texto "ux/ui" */}
              <div className="absolute top-3 left-4 bg-blue-500 text-white w-14 h-14 rounded-lg flex items-center justify-center">
                <p className="text-sm font-bold text-black">FD</p>
              </div>
              <p className="text-sm text-gray-800 font-bold ml-20">María, nueva miembro en el equipo</p>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="bg-custom-color p-4"
        style={{
          width: "600px",
          height: "380px",
          top: "161px",
          left: "913px",
          borderRadius: "28px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Calendario />
      </div>
      <div
        className="bg-custom-color p-4"
        style={{
          width: "400px",
          height: "244px",
          top: "516px",
          left: "398px",
          borderRadius: "28px",
          margin: "20px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            fontFamily: "Calibri",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Plataformas de trabajo
        </div>
        <IconComponent />
      </div>
      <div
        className="bg-custom-color p-4 flex"
        style={{
          width: "410px",
          height: "220px",
          top: "516px",
          left: "398px",
          borderRadius: "28px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            fontFamily: "Calibri",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Reuniones
        </div>
        <hr className="my-2 border-b-2 border-gray-800" />
        <p className="text-sm text-left text-gray-800">
          <Calendar events={INITIAL_EVENTS} />
        </p>
      </div>
    </main>
  );
}
