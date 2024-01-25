import React from 'react';
import { Link } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';
import './navbar.css';

export const NavBar = () => {
  return (
    <HStack spacing="4" align="center" justify="center" className="prueba">
      <Link to="/" className="custom-link">
        Home
      </Link>
      <Link to="/tareas" className="custom-link">
        Tareas
      </Link>
      <Link to="/sobre-nosotros" className="custom-link">
        Sobre Nosotros
      </Link>
    </HStack>
  );
};
