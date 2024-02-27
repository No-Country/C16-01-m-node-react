export default function Page() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mx-2 mt-5">
      <div className="bg-custom-color p-4" style={{width: '462px', height: '318px', top: '161px', left: '398px', borderRadius: '28px'}}>
        <div style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 700, lineHeight: '28px', letterSpacing: '0em', textAlign: 'left' }}>Comunicaciones</div>
      </div>
      <div className="bg-gray-400 p-4" style={{width: '462px',height: '508px',top: '161px',left: '913px',borderRadius: '28px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
        Calendario
      </div>
      <div className="bg-custom-color p-4" style={{ width: '462px', height: '244px', top: '516px', left: '398px', borderRadius: '28px' }}>
        <div style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 700, lineHeight: '28px', letterSpacing: '0em', textAlign: 'left' }}>Plataformas de trabajo</div>
      </div>
      <div className="bg-gray-200 p-4">Reuniones</div>
    </main>
  );
}
