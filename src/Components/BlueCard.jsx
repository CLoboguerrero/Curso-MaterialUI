import { Card, CardActions, CardContent, CardMedia, Typography, Button, CardActionArea } from '@mui/material'
import React from 'react'

const BlueCard = () => {
	return (
		<Card sx={{
			mt: 3
		}}>

			<CardActionArea>
				<CardMedia 
					component="img" 
					image="https://via.placeholder.com/1000x200"
					height="200"
					alt="Una descripción"
					sx={{
						transition: "0.3s",
						"&:hover": {
							transform: "scale(1.05)"
						}
					}}
				/>
			</CardActionArea>


			<CardContent>
				<Typography variant='h5'>
					Card Title
				</Typography>

				<Typography
					component="p"
					variant="body2"
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ad alias voluptatum debitis, molestiae, sit, reiciendis id architecto deleniti ducimus voluptatem repellendus voluptate. Magni accusantium fugiat consequuntur tempore excepturi placeat.
				</Typography>
			</CardContent>

			<CardActions>
				<Button variant="contained">Add</Button>
				<Button color="error">Remove</Button>
			</CardActions>

		</Card>
  )
}

export default BlueCard
