import { useState } from "react"


export const useTaskManager = () => {
    const [ tasks, setTasks] = useState([]); //Array de tareas vacio

    const createTask = (title, description) => {
        if(title && description){
            const newArray = [...tasks]
            newArray.unshift({title, description, state: false})
            setTasks([...newArray]);
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

    return{
        tasks,
        createTask,
        deleteTask,
        updateTask,
    }
}