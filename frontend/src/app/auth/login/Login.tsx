"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'; // Importa los iconos

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false); // Nuevo estado para mostrar/ocultar contraseña
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form className="max-w-sm w-full p-8 " onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-6 text-black">Login</h2>
      <input
        type="text"
        required
        name="email"
        placeholder="E-mail"
        value={email}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-black"
      />
      <div className="relative"> {/* Envuelve el input en un div relativo */}
        <input
          type={showPassword ? "text" : "password"} // Cambia el tipo de entrada basado en el estado showPassword
          placeholder="Contraseña"
          required
          name="password"
          value={password}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-black pr-10" // Añade padding a la derecha para el icono
        />
        <div 
          className="absolute top-3 right-0 pr-3 flex items-center cursor-pointer" // Posiciona el icono en la esquina superior derecha
          onClick={() => setShowPassword(!showPassword)} // Cambia el estado showPassword cuando se hace click en el icono
        >
          {/* {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeOffIcon className="h-5 w-5" />} Muestra el icono correcto basado en el estado showPassword */}
        </div>
      </div>
      <div className="gap-2">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors mb-2"
        >
          Iniciar sesión
        </button>
      </div>
      <button
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-full
          hover:bg-blue-600 transition-colors mb-2"
      >
        Crear Cuenta
      </button>
    </form>
  );
}
