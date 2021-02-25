import React, { useState } from 'react'
import { Grid, Container, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PokemonItem from '../components/PokemonItem'
import mockData from '../mockData'
import axios from 'axios'

const useStyles = makeStyles({
	pokedexContainer: {
		padding: '20px 50px',
	},
})

const Pokedex = () => {
	const classes = useStyles()
	const [pokemonData, setPokemonData] = useState(mockData)
	const pokemons = { ...mockData }
	console.log(pokemons)
	return (
		<>
			<Container>
				<Grid container spacing={2} className={classes.pokedexContainer}>
					{Object.entries(mockData).map(([key, value]) => (
						<PokemonItem key={key} poke={value} />
					))}

					{/* {!pokemonData ? (
						<CircularProgress />
					) : (
						Objects.keys(pokemonData).map(pokemonId => (
							<PokemonItem key={pokemonId} />
						))
					)} */}
				</Grid>
			</Container>
		</>
	)
}

export default Pokedex
