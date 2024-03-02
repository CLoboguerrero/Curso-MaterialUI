//Importar un Button en mayúsculas, en automático está referenciando a un estilo de materialUI
// Si se importa el botón como "@mui/material/Button", según el elemento cargaría mas rápido en fase de desarrollo

import { Box, Button, Container, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import Product from "./Components/Product";
import BlueCard from "./Components/BlueCard";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function App() {

  const navLinks = [
    {
      title: "Home", 
      path: "/", 
      icon: <InboxIcon />
    },
    {
      title: "Login", 
      path: "/login", 
      icon: <DraftsIcon />
    },
    {
      title: "Register", 
      path: "/register", 
      icon: <AddCircleOutlineIcon />
    }
  ]

  return (
    // En la etiqueta container se pueden definir breakpoints con el atributo maxWidth y el ancho de pantalla, pero se puede dejar como está. Importante ver la documentación de MUI
    // Importante recordar que estamos trabajando con un componente de react usando JS, por lo que las propiedades de estilos siempre van en camelCase. Ver la documentación de MUI.
    // Con el atributo "sx" se pueden definir propiedades de CSS:
    // pb = padding-button. 

    <>
      <NavBar navLinks={navLinks} />

      <Container sx={{border: 2, boxShadow: 3, pb: 2}}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    
      </Container>
    </>

  )
}

export default App
