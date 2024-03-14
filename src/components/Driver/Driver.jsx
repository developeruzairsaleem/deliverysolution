import "./Driver.css"
import Drivers from "../../drivers.json"
import {useState} from "react";
import SearchDriver from "../SearchDriver/SearchDriver.jsx"
import DriverForm from "../DriverForm/DriverForm.jsx"

export default function Driver(){
	const [driver, setDriver]= useState({
		name:"",
		email:"",
		phone:"",
		location:"",
		vehicle_type:"",
		license_number:"",
		vehicle_plate_number:""
	})
	const[formActive,setFormActive]= useState(false)
	const [name,setName] = useState("")
	const [drivers, setDrivers] = useState(Drivers.drivers);

	// const driverData ={
	// 	name,
	// 	email,
	// 	phone,
	// 	location,
	// 	vehicle,
	// 	licenseNumber,
	// 	vehicleNumber
	// }
	const handleFormActive=(val)=> _=>{
		setFormActive(val)
		setDriver({
		name:"",
		email:"",
		phone:"",
		location:"",
		vehicle_type:"",
		license_number:"",
		vehicle_plate_number:""
	})

	}
	const handleDriverChange=(data)=>(e)=>setDriver({...driver,[data]:e.target.value});


	const addDriver=()=>{
		setDrivers([driver,...drivers]);
		handleFormActive(false)()
	}
	const handleNameChange=(e)=> setName(e.target.value)

	return (
		<div className="driver">

			<h1 className="driver__heading">
				Drivers Data
			</h1>
			<button onClick={handleFormActive(true)} className="add-driver">
				Add Driver
			</button>
			<DriverForm handleFormActive={handleFormActive} 
				formActive={formActive}
				addDriver={addDriver} 
				handleDriverChange={handleDriverChange} 
				driver={driver}
			/>


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