import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

export default function SobreNosotros() {
  return (
    <Box className='app-description' color="white" padding="5% 15%" fontSize="larger">
      <Text textAlign="center" marginBottom="15px" fontSize="2xl" fontWeight="bold">Sobre Nosotros</Text>
      <Text>
        Esta aplicación de gestión de tareas fue desarrollada con el objetivo de ayudar a los usuarios a organizar sus actividades diarias de manera eficiente.
        Permite agregar, editar, eliminar y marcar como completadas las tareas.
      </Text>
      <Text as="h3" fontSize="xl">Funcionalidades Principales:</Text>
      <UnorderedList>
        <ListItem>Creación de tareas con título y descripción.</ListItem>
        <ListItem>Edición de tareas existentes.</ListItem>
        <ListItem>Eliminación de tareas.</ListItem>
        <ListItem>Marca de tareas como completadas.</ListItem>
      </UnorderedList>
      <Text as="h3" fontSize="xl">Tecnologías Utilizadas:</Text>
      <UnorderedList>
        <ListItem>React.js: Biblioteca de JavaScript para la construcción de interfaces de usuario.</ListItem>
        <ListItem>React Router: Para el enrutamiento dentro de la aplicación.</ListItem>
        <ListItem>HTML y CSS: Para la estructura y el diseño de la interfaz.</ListItem>
      </UnorderedList>
    </Box>
  );
}
