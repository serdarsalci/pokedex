import React from 'react'
import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	Paper,
} from '@material-ui/core'
import { toFirstCharUppercase } from '../utils'

import { useHistory } from 'react-router-dom'
import axios from 'axios'

const PokemonItem = ({ poke }) => {
	let histroy = useHistory()
	// console.log(poke)
	const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`

	const { name, id, sprites } = poke
	// const res = await axios.get(sprite)
	const { front_default } = sprites

	// console.log(res)
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Paper elevation={3}>
				<Card
					onClick={() => histroy.push(`/${poke.id}`)}
					style={{ fontFamily: 'Monaco' }}>
					<CardHeader
						style={{ fontFamily: 'Monaco' }}
						title={toFirstCharUppercase(name)}
						subheader={poke.types.map(t => `${t.type.name} `)}
					/>
					<CardContent>
						<img
							src={front_default}
							style={{ width: '50%', border: 'red 1px solid' }}
						/>
					</CardContent>
				</Card>
			</Paper>
		</Grid>
	)
}

export default PokemonItem
