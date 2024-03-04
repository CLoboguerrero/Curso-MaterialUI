import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";


const Contact = () => {
  
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return regex.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      if (validateEmail(email)) {
        setError({
          error: false,
          message: "",
        });
        console.log("Email Correcto");
      } else {
        setError ({
          error:true,
          message: "Formato de email Incorrecto",
        });
    } 
  }


  return (
    <>
      <h1>Contact</h1>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          error={error.error}
          helperText={error.message}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>Register</Button>
      </Box>
    </>
  )
}

export default Contact
