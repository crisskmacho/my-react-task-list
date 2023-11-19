import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import TaskList from './components/TaskList';
import { BotonA, BotonB } from './components/Buttons';
import Text from './components/Text';



const tasks = [
  { id: 1, name: 'Hacer la compra', completed: false },
  { id: 2, name: 'Pasear al perro', completed: true },
  { id: 3, name: 'Hacer oficio', completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Text/> 
    <TaskList tasks={tasks}/>
    <BotonB/> 
  </React.StrictMode>,
)
