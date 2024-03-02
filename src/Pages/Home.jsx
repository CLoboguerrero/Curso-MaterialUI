import React, { useState } from 'react';
import { Alert, AlertTitle, Container, Typography, Box, Button, Collapse, Snackbar } from '@mui/material';
import AddAlertIcon from '@mui/icons-material/AddAlert';

const Home = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>

      {/* Recordar que BOX nos permite trabajar con CSS */}

      <Box sx={{ display: "grid", gap: "1rem" }}>

        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert.
        </Alert>

        {/* Añadir un custom icon a la alerta: */}
        <Alert severity="info" icon={<AddAlertIcon />} variant='outlined'>This is an info Alert.</Alert>

        <Alert 
          severity="warning" 
          action={<Button color='inherit'>Delete</Button>}
          variant='filled'
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

        <Button variant='contained' onClick={() => {setOpen(true)}}>OPEN</Button>

        <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success Alert.
          </Alert>
        </Snackbar>
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
