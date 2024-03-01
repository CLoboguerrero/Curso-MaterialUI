import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu"
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const NavBar = ({ navLinks }) => {

  const [open, setOpen] = useState(false);
    
    // const navLinks = [
    //   {
    //     title: "Home", 
    //     path: "#", 
    //     icon: <InboxIcon />
    //   },
    //   {
    //     title: "Login", 
    //     path: "#login", 
    //     icon: <DraftsIcon />
    //   },
    //   {
    //     title: "Register", 
    //     path: "#register", 
    //     icon: <AddCircleOutlineIcon />
    //   }
    // ]

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <IconButton 
            color="inherit" 
            size="large" 
            onClick={() => setOpen(true)}
            sx={{ display: {xs:"flex", sm:"none"} }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" sx={{flexGrow: 1}}>Menu</Typography> */}

          <Box sx={{ display: {xs:"none", sm:"block"} }}>
            {
              navLinks.map(item => (
                <Button 
                  color="inherit" 
                  key={item.title}
                  //OJO: Cuando tenemos otras rutas (y no anclas), los atributos component y href cambian respecto a la dependencia de react-router-dom 
                  // component="a"
                  // href={item.path}
                  component={NavLink}
                  to={item.path}
                >
                  {item.title}
                </Button>
              ))
            }
          </Box>

        </Toolbar>
      </AppBar>

      {/* <Button sx={{mt:2}} variant="contained" onClick={() => setOpen(true)}>Open Drawer</Button> */}

      <Drawer 
        open={open} 
        anchor="left" 
        onClose={() => setOpen(false)}
        sx={{ display: {xs:"flex", sm:"none"} }}
      >
        <NavListDrawer 
          navLinks={navLinks} 
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  ) 
}

export default NavBar
