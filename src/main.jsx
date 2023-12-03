import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './components/TaskList';
import { BotonA, BotonB } from './components/Buttons';
import TitleApp from './components/title/TitleApp';
import Header from './components/header/Header';


/*
const tasks = [
  { id: 1, name: 'Hacer la compra', completed: false },
  { id: 2, name: 'Pasear al perro', completed: true },
  { id: 3, name: 'Hacer oficio', completed: false },
];*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <TitleApp/>
    <TaskList/>
    
  </React.StrictMode>,
)
