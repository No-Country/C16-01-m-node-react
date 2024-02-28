import React, { useState } from 'react';

function GridComponent() {
  const [items, setItems] = useState([1, 2, 3, 4]); // Estado para almacenar los elementos en la cuadrícula

  const addItem = () => {
    setItems([...items, items.length + 1]); // Agregar un nuevo elemento a la cuadrícula
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map(item => (
        <div key={item} className="bg-gray-200 p-4">
          Elemento {item}
        </div>
      ))}
      <div className="col-span-4">
        <button onClick={addItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar Elemento
        </button>
      </div>
    </div>
  );
}