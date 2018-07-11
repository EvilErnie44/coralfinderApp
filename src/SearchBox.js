import React from 'react'; 

const SearchBox = ({searchfield, searchChange}) => {
return (
	<div >
	<input className = "pa3 ba b--green bg-lightest-blue mb5 mt3" type = 'Search' 
	placeholder = 'Search Coral' onChange = {searchChange}
	/>
	</div>
	);
}

export default SearchBox; 
