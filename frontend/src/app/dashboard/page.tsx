export default function Page() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mx-2 mt-5">
      <div className="bg-gray-200 p-4">Columna 1 - Fila 1</div>
      <div className="bg-gray-400 p-4">Columna 2 - Fila 1</div>
      <div className="bg-gray-400 p-4">Columna 1 - Fila 2</div>
      <div className="bg-gray-200 p-4">Columna 2 - Fila 2</div>
    </main>
  );
}
