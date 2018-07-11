import React, {Component} from 'react'; 
import CardList from './CardList'
import SearchBox from './SearchBox'
import {Coral} from './coral'
import logo from './Coral-Finder.png'
import './App.css';
import 'tachyons'; 



class App extends Component {

	constructor() {
		super()
		this.state = {
			coral: Coral,
			searchfield: ''
		}
	}

onSearchChange = (event) => {
this.setState({searchfield: event.target.value}) 
}

render() {
	const filteredItems = this.state.coral.filter(coral => {
	return coral.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
	})

return (
		<div className = "tc">
			<img className = "pa4 imgWidth" alt = "Logo" src = {logo}/>
			<SearchBox searchChange = {this.onSearchChange}/>
			<CardList Coral = {filteredItems}/>
		</div>
	)
}

}

export default App;