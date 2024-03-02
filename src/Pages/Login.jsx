import React from 'react'
import { Button, Box, Grid } from '@mui/material'
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';

const Login = () => {
  return (
    <>
      <h1>Login</h1>

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
    </>
  )
}

export default Login
