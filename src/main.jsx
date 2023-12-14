import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './components/TaskList';
import { BotonA, BotonB } from './components/buttons/Buttons';
import TitleApp from './components/title/TitleApp';
import Header from './components/header/Header';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <TitleApp/>
    <TaskList/>
  </React.StrictMode>,
)
