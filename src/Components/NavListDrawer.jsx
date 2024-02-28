import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const NavListDrawer = () => {
    return (
        <Box 
            sx={{
                width: 500,
            }}
        >
            <nav>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItem>
                </List>
            </nav>

            <Divider />

            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton 
                            component="a"  // component = a es un ANCHOR!!!!
                            href="#trash"
                        >
                            <ListItemText>Trash</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>

                <ListItem disablePadding>
                        <ListItemButton 
                            component="a"  // component = a es un ANCHOR!!!!
                            href="#trash"
                        >
                            <ListItemText>Spam</ListItemText>
                        </ListItemButton>
                    </ListItem>
            </nav>
        </Box>
  )
}

export default NavListDrawer
