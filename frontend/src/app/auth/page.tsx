import Login from "./login/Login";

export default function Page() {
  return (
    <div className="flex h-screen bg-white overflow-x-hidden">
      <div
        className="flex-1 bg-cover bg-center text-white flex justify-center items-center"
        style={{ backgroundImage: "url('/Group.png')" }}
      >
        <div className=" text-black">
          <h1 className="text-blue-500 font-bold font-roboto text-4xl">
            IntraNoc
          </h1>
          <p>Optimiza tu trabajo en equipo</p>
          <p>Forma parte de nuestra app</p>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}
