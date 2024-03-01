import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const NavListDrawer = ({ navLinks, NavLink, setOpen }) => {
	return (
	<Box 
		sx={{
				width: 250,
		}}
	>

		{
			navLinks.map(item => (
				<ListItem disablePadding key={item.title}>
					<ListItemButton 
            //OJO para cuando se usa React-Router-DOM no se una un ancla!
						//component="a"  // component = a es un ANCHOR!!!!
            //href={item.path}
            component={NavLink}
						to={item.path}
            onClick={() => setOpen(false)}
						>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText>{item.title}</ListItemText>
					</ListItemButton>
				</ListItem>
			))
		}

			{/* <nav>
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

			<Divider /> */}

			{/* <nav>
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
			</nav> */}
		</Box>
  )
}

export default NavListDrawer
