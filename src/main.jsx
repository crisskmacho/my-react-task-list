import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'
import './main.css'

const Home = React.lazy(() => import('./components/pages/Home'));
const Tareas = React.lazy(() => import('./components/pages/Tareas'));
const SobreNosotros = React.lazy(() => import('./components/pages/SobreNosotros'));

const Loading = () => 
  <div className="terminal-loader">
    <div className="terminal-header">
      <div className="terminal-title">Status</div>
      <div className="terminal-controls">
        <div className="control close"></div>
        <div className="control minimize"></div>
        <div className="control maximize"></div>
      </div>
    </div>
      <div>Cargando...</div>
  </div>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <NavBar/>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='tareas' Component={Tareas}/>
          <Route path='/sobre-nosotros' Component={SobreNosotros}/>
        </Routes>
      </Suspense>
    </BrowserRouter>

  </React.StrictMode>,
)
