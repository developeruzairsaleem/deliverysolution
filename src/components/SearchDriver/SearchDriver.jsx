import React from "react"
import "./SearchDriver.css"


const SearchDriver =({name,handleNameChange})=>{

	return (
		<input className="search-driver" type="text" placeholder="Search Driver Name..." value={name} onChange={handleNameChange} />
		)


}


export default SearchDriver;