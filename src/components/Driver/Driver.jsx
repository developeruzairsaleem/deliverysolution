import "./Driver.css"
import Drivers from "../../drivers.json"

export default function Driver(){
	const drivers = Drivers.drivers;
	//  {
    //   "id": 1,
    //   "name": "John Doe",
    //   "license_number": "ABC123",
    //   "vehicle_type": "Truck",
    //   "vehicle_plate_number": "XYZ-456",
    //   "phone": "+1234567890",
    //   "email": "john@example.com",
    //   "location": "City A"
    // },
	return (
		<div className="driver">
			<h1 className="driver__heading">
				Drivers Data
			</h1>
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

					drivers.map((driver)=>{
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