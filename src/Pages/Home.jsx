import React from 'react'
import { Container, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <h1>Home</h1>

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
