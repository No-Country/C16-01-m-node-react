import * as React from "react";
import IconComponent from "./IconComponent"; // Importa el componente IconComponent

export default function Page() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4">
      <a href="https://drive.google.com/" target="_blank" className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="driveIcon" />
      </a>
      <a href="https://www.figma.com/file/XJHH1FUaCE9bYmpivEzARz/IntraNoc-Copia-para-Frontend?type=design&node-id=0-1&mode=design&t=Vfzo70AwSCRtTwwh-0" target="_blank" className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="figmaIcon" />
      </a>
      <a href="https://trello.com/b/8IbkQS0o/no-country-app-gesti%C3%B3n-de-equipo" target="_blank" className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="trelloIcon" />
      </a>
      <a href="https://github.com/No-Country/C16-01-m-node-react" target="_blank" className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="githubIcon" />
      </a>
      <a href="https://code.visualstudio.com/" target="_blank" className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="visualStudioCodeIcon" />
      </a>
      <a href="https://getbootstrap.com/" target="_blank" className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="bootstrapIcon" />
      </a>
      {/* Repite estos divs para cada ubicación en la cuadrícula */}
    </div>
  );
}
