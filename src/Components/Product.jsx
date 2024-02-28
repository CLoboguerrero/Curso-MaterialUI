import styled from '@emotion/styled'
import { Paper, Typography, Box, Button } from '@mui/material'
import React from 'react'

const Product = () => {

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    })

    return (
        <Paper
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                mt: 5,
            }}
        >
            <Img 
                src="https://via.placeholder.com/200"
                alt="Imagen de placeholder"
            />

            <Box sx={{ flexGrow:1, display: "grid", gap: 4 }}>
                <Typography variant='h4'>Product Name</Typography>
                <Typography variant='body1'>Description</Typography>
                <Button variant='contained'>Add to Cart</Button>
            </Box>

            <Box 
                sx={{ mr: 2 }}
                component="p"
            >
                $19.99
            </Box>

        </Paper>
  )
}

export default Product
