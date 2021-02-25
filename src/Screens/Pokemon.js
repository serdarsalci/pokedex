import React, { useState } from 'react'
import { Typography, Grid, Link, Divider } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'

import mockData from '../mockData'
import { toFirstCharUppercase } from '../utils'

const useStyles = makeStyles(() => ({
	heading: {
		marginTop: '30px',
		overflow: 'hidden',
		fontFamily: 'Monaco',
		fontWeight: '600',
		color: '#274472',
		textShadow: '1px 1px 0.5rem #fff',
	},
	col: {
		marginTop: '30px',
		marginRight: '30px',
		// fontFamily: 'Monaco',
		'& h3 , & h4': {
			textShadow: '0px 1px 0.1rem #fff',
			color: '#0C2D48',
			fontFamily: 'Monaco',
			fontWeight: '600',
			lineHeight: '4rem',
		},
	},
}))

const Pokemon = props => {
	const { match, params } = props
	const { pokemonId } = match.params

	const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`])
	const classes = useStyles()

	const generatePokemon = () => {
		const { name, id, species, height, weight, types, sprites } = pokemon
		const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
		const { front_default } = sprites

		return (
			<Grid
				fluid
				container
				spacing={3}
				alignItems='center'
				justify='center'
				direction='column'>
				<Typography className={classes.heading} variant='h1' xs={12} fluid>
					{toFirstCharUppercase(name)}
				</Typography>
				{/* <Typography variant='h1'>
					<img src={front_default} />
				</Typography> */}
				<Grid container item justify='space-evenly' spacing={3}>
					<Grid item className={classes.col}>
						<img style={{ width: '400px' }} src={fullImageUrl} />
					</Grid>
					<Grid item className={classes.col}>
						<Typography variant='h3'>Pokemon Info</Typography>
						<Divider />
						<Typography variant='h4'>
							{'Species: '}
							<Link href={species.url}>{species.name}</Link>
						</Typography>
						<Typography variant='h4'>
							{'Height: '}
							{height}
						</Typography>
						<Typography variant='h4'>
							{'Weight: '}
							{weight}
						</Typography>
						<Typography variant='h4'>
							{'Types: '}
							<Typography variant='h4' style={{ display: 'inline-block' }}>
								{types.map(t => `${toFirstCharUppercase(t.type.name)} `)}
							</Typography>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		)
	}

	return <>{generatePokemon(pokemonId)}</>
}

export default Pokemon
