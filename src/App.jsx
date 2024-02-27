//Importar un Button en mayúsculas, en automático está referenciando a un estilo de materialUI
// Si se importa el botón como "@mui/material/Button", según el elemento cargaría mas rápido en fase de desarrollo

import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';

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
        color="primary"
        variant="body1" 
        textAlign="center"
        //En este caso, el margin-top se multiplica por 8px que es el valor por defecto del tema:
        mt={5}>
          Otro Título con propiedad CSS
      </Typography>
    
      <Button variant="contained">Mi primer botón</Button>

      <Button variant="contained" color="error">Otro Botón</Button>

      <Button variant="contained" color="success">Otro Botón Más!</Button>

      <Button variant="outlined" color="success">Un Botón Outlined</Button>

      <Button variant="outlined" color="success" startIcon={<ExtensionRoundedIcon />}>Botón con Iconito!</Button>

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

      {/* Implementación de GRID: */}

      <Grid container spacing={5}>

          <Grid 
            item 
            xs={12}
            sm={6}
            md={4}
          >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe sed, mollitia architecto illo odio. Commodi, vitae? Vel quis dolor veniam, quibusdam deserunt nemo explicabo itaque omnis laboriosam odio perspiciatis.
              </p>
          </Grid>

          <Grid 
            item 
            xs={12}
            sm={6}
            md={4}
          >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe sed, mollitia architecto illo odio. Commodi, vitae? Vel quis dolor veniam, quibusdam deserunt nemo explicabo itaque omnis laboriosam odio perspiciatis.
              </p>
          </Grid>

          <Grid 
            item 
            xs={12}
            sm={6}
            md={4}
          >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe sed, mollitia architecto illo odio. Commodi, vitae? Vel quis dolor veniam, quibusdam deserunt nemo explicabo itaque omnis laboriosam odio perspiciatis.
              </p>
          </Grid>

      </Grid>

    </Container>
  )
}

export default App
