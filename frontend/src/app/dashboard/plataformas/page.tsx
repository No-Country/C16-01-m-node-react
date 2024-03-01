import * as React from "react";
import IconComponent from "./IconComponent"; // Importa el componente IconComponent

export default function Page() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4">
      <div className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="driveIcon" />
      </div>
      <div className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="figmaIcon" />
      </div>
      <div className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="trelloIcon" />
      </div>
      <div className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="githubIcon" />
      </div>
      <div className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="visualStudioCodeIcon" />
      </div>
      <div className="w-56 h-56 bg-stone-100 bg-opacity-40 rounded-3xl backdrop-blur-3xl">
        <IconComponent icon="bootstrapIcon" />
      </div>
      {/* Repite estos divs para cada ubicación en la cuadrícula */}
    </div>
  );
}
