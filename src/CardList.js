import React from 'react'; 
import Card from './Card'

const CardList = ({Coral}) => {
	return (
			<div> 
		 	{
		 		Coral.map((Species, i) => {
		 			return (
			 		<Card 
				 		key = {Coral[i].id} 
				 		id = {Coral[i].id} 
				 		img = {Coral[i].img} 
				 		name = {Coral[i].name} 
				 		type = {Coral[i].type} 
				 		light = {Coral[i].light} 
				 		flow = {Coral[i].flow} 
				 		difficulty = {Coral[i].difficulty}/> 
		 		);
		 	})
		 }
			</div>
			);

}

export default CardList