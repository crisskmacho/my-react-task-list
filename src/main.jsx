import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // Importa ChakraProvider
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/navbar/NavBar';
import './main.css';

// Importa los componentes específicos de Chakra UI
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
});

const Home = React.lazy(() => import('./components/pages/Home'));
const Tareas = React.lazy(() => import('./components/pages/Tareas'));
const SobreNosotros = React.lazy(() => import('./components/pages/SobreNosotros'));

const Loading = () => (
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
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> 
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='tareas' element={<Tareas />} />
            <Route path='/sobre-nosotros' element={<SobreNosotros />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
