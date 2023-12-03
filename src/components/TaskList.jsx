import React, { useState } from 'react';
import Task from './Task';

import "./tasklist.css";
import { BotonA } from './Buttons';
import { useTaskManager } from './hooks/useTaskManage';

// Definición del componente de función TaskList que no recibe props
export default function TaskList ({ }) {
  // Estados para almacenar la lista de tareas, el título y la descripción de una nueva tarea
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();//  hook personalizado

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  // Función para agregar una nueva tarea a la lista de tareas
  const addTask = () => {
      // Crea una nueva tarea con el título, descripción y estado predeterminado
      createTask(title, description); //función createTask del hook
      setTitle(''); // Limpia el estado del título
      setDescription(''); // Limpia el estado de la descripción
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
    <div>
      <div className='TotalTask'>
          Total de tareas: {tasks.length}
      </div>{/* Muestra el número total de tareas */}

      {/* Campos de entrada para el título y la descripción de la nueva tarea */}
      <input className='TituloTarea'
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className='DescTarea'
        type="text"
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className='addtask' onClick={addTask}>Agregar Tarea</button>

      <ul className='mapTask'>
        {tasks.map((task, index) => (
          // Renderiza el componente Task para cada tarea en la lista
          <Task
            key={index}
            task={task}
            index={index}
            deleteTask={handleDeleteTask} // Proporciona la función de eliminación de tarea
            updateTask={handleUpdateTask} // Proporciona la función de actualización de tarea
          />
        ))}
      </ul>

      
    </div>
  );
}
