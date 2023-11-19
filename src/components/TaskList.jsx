import React from 'react';
import Task from './Task';

export default function TaskList ({ tasks }) {
  return (
    <div>
      <ul>
        {/* método map para iterar sobre el array 'tasks' */}
        {tasks.map((task) => (    
          <Task key={task.id} name={task.name} completed={task.completed} />    
        ))}
        {/* Para cada tarea en 'tasks', se renderiza un componente Task */}
      </ul>
    </div>
  );
};

