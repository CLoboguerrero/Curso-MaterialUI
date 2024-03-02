import React, { useState } from 'react';
import { Alert, AlertTitle, Container, Typography, Box, Button, Collapse } from '@mui/material';

const Home = () => {

  const [open, setOpen] = useState(true);

  return (
    <>
      <h1>Home</h1>

      {/* Recordar que BOX nos permite trabajar con CSS */}

      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert.
        </Alert>

        <Alert severity="info">This is an info Alert.</Alert>

        <Alert 
          severity="warning" 
          action={<Button color='inherit'>Delete</Button>}
        >
          <AlertTitle>Warning</AlertTitle>
          This is a warning Alert.
        </Alert>

        <Collapse in={open}>
          <Alert 
            severity="error"
            onClose={() => {setOpen(false)}}
          >
            This is an error Alert.
          </Alert>
        </Collapse>

      </Box>


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
    </>
  )
}

export default Home
