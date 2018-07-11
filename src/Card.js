import React from 'react';

const Card = ({name, type, light, img, flow, difficulty, id}) => {
	return(
			<div className ='bg-black-50 dib br3 pa3 ma3 grow bw2 shadow-3 tc'>
				<h1>{name}</h1>
				<img className = 'ba' alt = "coralImage" src = {img}/>
				
				<p><b>Type:</b> {type}</p>
				<p><b>Light:</b> {light}</p>
				<p><b>Flow:</b> {flow}</p>
				<p><b>Care:</b> {difficulty}</p>
			</div>
		)
}

export default Card

