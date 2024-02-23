//Importar un Button en mayúsculas, en automático está referenciando a un estilo de materialUI
// Si se importa el botón como "@mui/material/Button", según el elemento cargaría mas rápido en fase de desarrollo

import { Button, Container } from "@mui/material"

function App() {
  return (
    // En la etiqueta container se pueden definir breakpoints con el atributo maxWidth y el ancho de pantalla, pero se puede dejar como está. Importante ver la documentación de MUI
    // Importante recordar que estamos trabajando con un componente de react usando JS, por lo que las propiedades de estilos siempre van en camelCase. Ver la documentación de MUI.
    // Con el atributo "sx" se pueden definir propiedades de CSS:
    // pb = padding-button. 
    <Container sx={{border: 2, boxShadow: 3, pb: 2}}>
      <h1>App</h1>
      <Button variant="contained">Mi primer botón</Button>
    </Container>
  )
}

export default App
