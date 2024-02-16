import Login from "./login/login.component";

export default function Home({ id }: propsType): any {
  return (
    <main>
      <Login />
      <h1>Hola Mundo</h1>
    </main>
  );
}
