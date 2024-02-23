//Importar un Button en mayúsculas, en automático está referenciando a un estilo de materialUI
// Si se importa el botón como "@mui/material/Button", según el elemento cargaría mas rápido en fase de desarrollo

import { Box, Button, Container, Typography } from "@mui/material"

function App() {
  return (
    // En la etiqueta container se pueden definir breakpoints con el atributo maxWidth y el ancho de pantalla, pero se puede dejar como está. Importante ver la documentación de MUI
    // Importante recordar que estamos trabajando con un componente de react usando JS, por lo que las propiedades de estilos siempre van en camelCase. Ver la documentación de MUI.
    // Con el atributo "sx" se pueden definir propiedades de CSS:
    // pb = padding-button. 
    <Container sx={{border: 2, boxShadow: 3, pb: 2}}>
      <Typography 
        variant="h1" 
        gutterBottom >
          Título H1
      </Typography>

      <Typography 
        variant="h1" 
        gutterBottom 
        component="h2">
          Título H2 que se comporta como H1
      </Typography>

      <Typography 
        variant="h2" 
        gutterBottom 
        component="span">
          Título H2 que se comporta como un span
      </Typography>

      <Typography 
        variant="body1" 
        textAlign="center"
        //En este caso, el margin-top se multiplica por 8px que es el valor por defecto del tema:
        mt={5}>
          Otro Título con propiedad CSS
      </Typography>
    
      <Button variant="contained">Mi primer botón</Button>


      <Box 
        // p = padding
        sx={{
          border: 2, 
          p: 1.5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
          }}>
        Esto es un box
      </Box>

    </Container>
  )
}

export default App
