import * as React from 'react';

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Comunicaciones</h1>
      {/* Div principal */}
      <div className="w-full bg-stone-100 rounded p-4 flex justify-between items-center">
        {/* Div con el texto */}
        <div>
          <p>Daniel Perez se unió al equipo No Country S 16</p>
        </div>
        {/* Horario y fecha */}
        <div className="flex items-center">
          <p>14:50</p>
          <p className="ml-10">16/02/2024</p>
        </div>
      </div>

      <div className="w-full bg-stone-100 rounded p-4 flex justify-between items-center mt-4">
        <div>
          <p>María agregó “Crear Onboarding” en “Backlog”</p>
        </div>
        <div className="flex items-center">
          <p>14:00</p>
          <p className="ml-10">16/02/2024</p>
        </div>
      </div>

      <div className="w-full bg-stone-100 rounded p-4 flex justify-between items-center mt-4">
        <div>
          <p>Leandro modificó su email</p>
        </div>
        <div className="flex items-center">
          <p>11:50</p>
          <p className="ml-10">16/02/2024</p>
        </div>
      </div>

      <div className="w-full bg-stone-100 rounded p-4 flex justify-between items-center mt-4">
        <div>
          <p>Sandra Rodriguez movió “Diseño del logo” de “En proceso” a “Hecho”</p>
        </div>
        <div className="flex items-center">
          <p>09:50</p>
          <p className="ml-10">15/02/2024</p>
        </div>
      </div>
    </div>
  );
}
