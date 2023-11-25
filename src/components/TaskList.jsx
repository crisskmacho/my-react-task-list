import React, { useState } from 'react';
import Task from './Task';

// Definición del componente de función TaskList que no recibe props
export default function TaskList ({ }) {
  // Estados para almacenar la lista de tareas, el título y la descripción de una nueva tarea
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  // Función para agregar una nueva tarea a la lista de tareas
  const addTask = () => {
    if (title && description) {
      // Crea una nueva tarea con el título, descripción y estado predeterminado
      setTasks([...tasks, { title, description, state: false }]);
      setTitle(''); // Limpia el estado del título
      setDescription(''); // Limpia el estado de la descripción
    }
  };

  // Función para eliminar una tarea según su índice
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filtra las tareas, excluyendo la tarea con el índice dado
    setTasks(newTasks); // Actualiza la lista de tareas
  };

  // Función para actualizar una tarea según su índice con la tarea actualizada
  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task)); // Actualiza la tarea en el índice dado
    setTasks(updatedTasks); // Actualiza la lista de tareas
  };

  return (
    <div>
      <div>Total de tareas: {tasks.length}</div>{/* Muestra el número total de tareas */}
      {/* Campos de entrada para el título y la descripción de la nueva tarea */}
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Agregar Tarea</button>
      <ul>
        {tasks.map((task, index) => (
          // Renderiza el componente Task para cada tarea en la lista
          <Task
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask} // Proporciona la función de eliminación de tarea
            updateTask={(updatedTask) => updateTask(index, updatedTask)} // Proporciona la función de actualización de tarea
          />
        ))}
      </ul>
    </div>
  );
}
