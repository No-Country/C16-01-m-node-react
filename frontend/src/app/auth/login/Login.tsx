"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
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
      <input
        type="password"
        placeholder="Contraseña"
        required
        name="password"
        value={password}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-black"
      />
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
