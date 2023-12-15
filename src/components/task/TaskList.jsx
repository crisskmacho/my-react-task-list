import React, { useState } from 'react';
import Task from './Task';

import "./tasklist.css";
import { BotonA } from '../buttons/Buttons';
import { useTaskManager } from '../hooks/useTaskManage';
import { useCarousel } from '../hooks/useCarousel';

// Definición del componente de función TaskList que no recibe props
export default function TaskList ({ }) {
  // Estados para almacenar la lista de tareas, el título y la descripción de una nueva tarea
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();//  hook personalizado

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {carouselStyle, handleNextButtonClick, handlePrevButtonClick } = useCarousel(0, 300, tasks.length);
  
  

  // Maneja el cambio en el input del título de la tarea
  const handleTitleChange = (e) => {
    setTitle(e.target.value); 
  }

  // Maneja el cambio en el input de la descripción de la tarea
  const handleDrescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Maneja el envío del formulario para agregar una nueva tarea
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
  
    if (title.length >= 3) {
      // Verifica si el título tiene al menos 3 caracteres
      if (description.trim() !== '') {
        // Verifica si la descripción no está vacía (quitando espacios en blanco)
        createTask(title, description); // Crea la tarea con el título y la descripción
        setTitle(''); // Limpia el input del título
        setDescription(''); // Limpia el input de la descripción
      } else {
        alert('La descripción no puede estar vacía.'); // Muestra una alerta si la descripción está vacía
      }
    } else {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.'); // Muestra una alerta si el título es demasiado corto
    }
  };

  // Función para eliminar una tarea según su índice
  const handleDeleteTask = (index) => {
    deleteTask(index); // Utiliza la función deleteTask del hook
  };

  // Función para actualizar una tarea según su índice con la tarea actualizada
  const handleUpdateTask = (index, updatedTask) => {
    updateTask(index, updatedTask); // Utiliza la función updateTask del hook
  };

  return (
    <div className='task-manager-container'>
      <div className='TotalTask'>
          Total de tareas: {tasks.length}
      </div>{/* Muestra el número total de tareas */}

      {/* Campos de entrada para el título y la descripción de la nueva tarea */}
      <div className="whole-container"> 
        <div className='task-form-container'>
          <form className='form-container' onSubmit={handleFormSubmit}>
            <div className='title-input-container'>
              <input
                className='TituloTarea'
                type="text"
                placeholder="Título de la tarea"
                value={title}
                onChange={handleTitleChange}
              />
            </div> 
            <div className='description-input-container'>
              <input
                className='DescTarea'
                type="text"
                placeholder="Descripción de la tarea"
                value={description}
                onChange={handleDrescriptionChange}
              />
            </div>  
            <div className='add-task-button-container'>        
              <button className='addtask' type="submit">Agregar Tarea</button>
            </div>  
          </form>
        </div>
      </div>

      <div className='carousel-container'>
        <span></span>
        <div className='carousel' style={carouselStyle}>
          {tasks.map((task, index) => (
            <div className='card' key={index}>
              <Task
                task={task}
                index={index}
                deleteTask={handleDeleteTask}
                updateTask={handleUpdateTask}
              />
            </div>
          ))}
        </div>
        <button className='prev-button' onClick={handlePrevButtonClick}>
          &#10094;
        </button>
        <button className='next-button' onClick={handleNextButtonClick}>
          &#10095;
        </button>
      </div> 

    </div>
  );
}
