import React from 'react'
import './pages.css'

export default function SobreNosotros() {
  return (
    <div className='app-description'>
      <h1 data-text="Sobre Nosotros">Sobre Nosotros</h1>
      <p>
        Esta aplicación de gestión de tareas fue desarrollada con el objetivo de ayudar a los usuarios a organizar sus actividades diarias de manera eficiente.
        Permite agregar, editar, eliminar y marcar como completadas las tareas.
      </p>
      <h3>Funcionalidades Principales:</h3>
      <ul>
        <li>Creación de tareas con título y descripción.</li>
        <li>Edición de tareas existentes.</li>
        <li>Eliminación de tareas.</li>
        <li>Marca de tareas como completadas.</li>
      </ul>
      <h3>Tecnologías Utilizadas:</h3>
      <ul>
        <li>React.js: Biblioteca de JavaScript para la construcción de interfaces de usuario.</li>
        <li>React Router: Para el enrutamiento dentro de la aplicación.</li>
        <li>HTML y CSS: Para la estructura y el diseño de la interfaz.</li>
      </ul>
    </div>
  );
};
