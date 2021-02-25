import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import Header from './components/Header'
import AppBar from './components/AppBar'
import Pokedex from './Screens/Pokedex'
import Pokemon from './Screens/Pokemon'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/:pokemonId' component={Pokemon} exact />
				<Route path='/' render={props => <Pokedex {...props} />} />
			</Switch>
		</Router>
	)
}

export default App
