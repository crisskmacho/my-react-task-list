import React from 'react';
import { BotonC, BotonD } from './Buttons';


// componente de función llamado Task que recibe dos propiedades: 'name' y 'completed'
export default function Task ({ name, completed })  {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={completed} readOnly />    {/* Un input tipo checkbox para marcar la tarea como completada o no */}
      <span>{name}</span>   {/* Un span que muestra el nombre de la tarea */}
      <BotonC />
      <BotonD />
    </li>
  );
};

