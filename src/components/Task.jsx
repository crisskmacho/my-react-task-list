import React, { useState } from 'react';


// Definición del componente de función Task que recibe props específicas
export default function Task ({task, index, deleteTask, updateTask })  {
  // Extracción de datos de la tarea y establecimiento de estados para la edición
  const { title, description, state } = task;
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [completed, setCompleted] = useState(state);


  // Maneja el evento de actualización o edición de la tarea
  const handleUpdateClick = () => {
    if(editing) {
      updateTask(index, { title: editedTitle, description: editedDescription, state: completed });
      setEditing(false); // Finaliza el modo de edición
    } else {
      setEditedTitle(title); // Establece el título de la tarea en los estados de edición
      setEditedDescription(description); // Establece la descripción de la tarea en los estados de edición
      setCompleted(state); // Establece el estado completado de la tarea en el estado de edición
      setEditing(true); // Activa el modo de edición
    }
  };

  // Maneja el evento de cancelar la edición y restaurar los valores originales
  const handleCancelClick = () => {
    setEditedTitle(title); // Restaura el título original
    setEditedDescription(description); // Restaura la descripción original
    setEditing(false); // Finaliza el modo de edición
  }

  //Maneja el cambio en el checkbox de completado
  const handleCheckboxChange = () => {
    setCompleted(!completed); // Cambia el estado completado
    updateTask(index, { title: editedTitle, description: editedDescription, state: !completed });
    // Actualiza la tarea con el estado opuesto del completado al índice dado
  };


  return (
    
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {/* Checkbox para marcar/desmarcar la tarea como completada */}
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
          readOnly // El checkbox es de solo lectura para controlarlo desde el estado
        />
        {editing ? (
          <div>
            {/* código que maneja la visualización y edición de la tarea */}
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <h3>{title}</h3> {/* Muestra el título editado o original */}
            <p>{description}</p> {/* Muestra la descripción editada o original */}
            <p>Estado: {completed ? 'Completada' : 'Pendiente'}</p> {/* Muestra el estado de la tarea */}
          </div>
        )}
        <button onClick={handleUpdateClick}>
          {editing ? 'Guardar' : 'Actualizar'}   {/* Cambia el texto del botón dependiendo del modo de edición */}
        </button>
        <button onClick={() => deleteTask(index)}>Eliminar</button> {/* Elimina la tarea */}
        {editing && <button onClick={handleCancelClick}>Cancelar</button>} {/* Muestra el botón de cancelar solo en modo de edición */}
      </div>
    
  );
}

