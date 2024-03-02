import Product from "../Components/Product";
import BlueCard from "../Components/BlueCard";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

const Register = () => {

  const {enqueueSnackbar} = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('Un mensajito por aquí!!!', {
      variant: "success",
    })
  }

  return (
    <>
      <h1>Register</h1>
      <Product />
      <BlueCard />
      <Button variant="contained" onClick={handleClick}>Open</Button>
    </>
  )
}

export default Register
