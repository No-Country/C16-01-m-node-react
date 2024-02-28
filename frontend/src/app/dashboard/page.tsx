import * as React from 'react';
import { IconComponent } from './components/IconComponent.client'; // Importa el componente IconComponent

export default function Page() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mx-2 mt-5">
      <div className="bg-custom-color p-4" style={{width: '380px', height: '318px', top: '161px', left: '398px', borderRadius: '28px', margin: '20px' }}>
        <div style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 700, lineHeight: '28px', letterSpacing: '0em', textAlign: 'left' }}>Comunicaciones</div>
      </div>
      <div className="bg-gray-400 p-4" style={{width: '410px',height: '480px',top: '161px',left: '913px',borderRadius: '28px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <div style={{ fontFamily: 'Calibri', fontSize: '24px', lineHeight: '28px', letterSpacing: '0em', textAlign: 'left' }}>Calendario</div>
      </div>
      <div className="bg-custom-color p-4" style={{ width: '400px', height: '244px', top: '516px', left: '398px', borderRadius: '28px', margin: '20px' }}>
        <div style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 700, lineHeight: '28px', letterSpacing: '0em', textAlign: 'left' }}>Plataformas de trabajo</div>
        <IconComponent />
      </div>
      <div className="bg-custom-color p-4" style={{ width: '410px', height: '220px', top: '516px', left: '398px', borderRadius: '28px' }}>
        <div style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 700, lineHeight: '28px', letterSpacing: '0em', textAlign: 'left' }}>Reuniones</div>
        <hr className="my-2 border-b-2 border-gray-800" />
        <p className="text-sm text-left text-gray-800">No hay reuniones programadas</p>
      </div>
    </main>
  );
}
