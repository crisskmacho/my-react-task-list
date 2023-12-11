import React, { useState, useEffect } from 'react';
import "./task.css";

// Definición del componente de función Task que recibe props específicas
export default function Task({ task, index, deleteTask, updateTask }) {
  const { title: originalTitle, description: originalDescription, state: originalState } = task;
  const [editing, setEditing] = useState(false);

  const [editedTask, setEditedTask] = useState({
    title: originalTitle,
    description: originalDescription,
    state: originalState,
  });

  useEffect(() => {
    setEditedTask({
      title: originalTitle,
      description: originalDescription,
      state: originalState,
    });
  }, [originalTitle, originalDescription, originalState]);


  const handleUpdateClick = () => {
    if (editing) {
      if (editedTask.title.trim() === '' || editedTask.description.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
      }
      updateTask(index, editedTask);
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  const handleCancelClick = () => {
    setEditedTask({
      title: originalTitle,
      description: originalDescription,
      state: originalState,
    });
    setEditing(false);
  };

  const handleCheckboxChange = () => {
    const updatedState = !editedTask.state;
    setEditedTask({ ...editedTask, state: updatedState });
    updateTask(index, { ...editedTask, state: updatedState });
  };

  const handleInputChange = (e, field) => {
    setEditedTask({ ...editedTask, [field]: e.target.value });
  };

  return (
    <div className='task-container' style={{ textDecoration: editedTask.state ? 'line-through' : 'none' }}>
      <span></span>
      {/* Checkbox para marcar/desmarcar la tarea como completada */}
      <input
        className='checkCaja'
        type="checkbox"
        checked={editedTask.state}
        onChange={handleCheckboxChange}
        readOnly // El checkbox es de solo lectura para controlarlo desde el estado
      />

      {editing ? (
        <div className='task-edit-container'>
          {/* código que maneja la visualización y edición de la tarea */}
          <input
            className='editedTitleInput'
            type="text"
            value={editedTask.title}
            onChange={(e) => handleInputChange(e, 'title')}
          />
          <input
            className='editedDescriptionInput'
            type="text"
            value={editedTask.description}
            onChange={(e) => handleInputChange(e, 'description')}
          />
        </div>
      ) : (
        <div className="task-details">
          <h3>{editedTask.title}</h3> {/* Muestra el título editado o original */}
          <p>{editedTask.description}</p> {/* Muestra la descripción editada o original */}
          <p>Estado: {editedTask.state ? 'Completada' : 'Pendiente'}</p> {/* Muestra el estado de la tarea */}
        </div>
      )}

      <div className="update-button-container">
        <button className={editing ? 'save-button' : 'update-button'} onClick={handleUpdateClick}>
          {editing ? 'Guardar' : 'Editar'} {/* Cambia el texto del botón dependiendo del modo de edición */}
        </button>
      </div>

      <div className="delete-button-container"> {/* Elimina la tarea */}
        <button className={editing ? 'delete-button-edit-mode' : 'delete-button'} onClick={() => deleteTask(index)}>
          Eliminar
        </button>
      </div>

      <div className="cancel-button-container"> {/* Muestra el botón de cancelar solo en modo de edición */}
        {editing && (
          <button className="cancel-button" onClick={handleCancelClick}>
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
}