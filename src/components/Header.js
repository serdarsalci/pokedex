import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'

const Header = () => {
	return (
		<>
			<AppBar
				position=''
				style={{
					margin: '0',
					padding: 0,
					width: '100vw',
					// #3f51b5
					background: 'linear-gradient(to right, #274472, #5885AF)',
				}}
				xs={6}>
				<Toolbar />
			</AppBar>
		</>
	)
}

export default Header
