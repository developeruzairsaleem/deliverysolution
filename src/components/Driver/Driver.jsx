import "./Driver.css"
import Drivers from "../../drivers.json"
import {useState} from "react";
import SearchDriver from "../SearchDriver/SearchDriver.jsx"

export default function Driver(){
	const drivers = Drivers.drivers;
	
	const [name,setName] = useState("")
	const handleNameChange=(e)=> setName(e.target.value)

	return (
		<div className="driver">
			<h1 className="driver__heading">
				Drivers Data
			</h1>


			<SearchDriver name={name} handleNameChange={handleNameChange} />
			<table className="driver__table">
				<thead>
					<th>Name</th>
					<th>License Number</th>
					<th>Vehicle Type</th>
					<th>Vehicle Plate Number</th>
					<th>Phone</th>
					<th>Email</th>
					<th>Location</th>

				</thead>

				<tbody>
				{

					drivers.filter((driver)=>{
						return driver.name.toLowerCase().includes(name.toLowerCase())
					}).map((driver)=>{

					 return(<tr key= {driver.id}>
						
					<td>{driver.name}</td>
					<td>{driver.license_number}</td>
					<td>{driver.vehicle_type}</td>
					<td>{driver.vehicle_plate_number}</td>
					<td>{driver.phone}</td>
					<td>{driver.email}</td>
					<td>{driver.location}</td>
					</tr>
					)

					})
				}

				</tbody>
			</table>



		</div>
		)

}