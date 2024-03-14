import React from "react";
import "./DriverForm.css"


import {useState} from "react"


export default function DriverForm ({driver,handleDriverChange,addDriver,formActive, handleFormActive}){

	// const driverData ={
	// 	name,
	// 	email,
	// 	phone,
	// 	location,
	// 	vehicle,
	// 	licenseNumber,
	// 	vehicleNumber
	// }


	return(

		<div onClick={handleFormActive(false)} className="form-container" style={formActive?{display:"block"}:{display:"none"}}>
			<div className="form" onClick={e=>e.stopPropagation()}>
			<h3 className="form__heading">
				Register Driver
			</h3>

			<div className="row">
			<input type="text" onChange={handleDriverChange("name")} placeholder="Driver Name..." value={driver.name}/>
			<input type="email" onChange={handleDriverChange("email")}  placeholder="Driver Email..." value={driver.email}/>
				
			</div>
			<div className="row">
			<input type="text" onChange={handleDriverChange("phone")}  placeholder="Driver Phone Number..." value={driver.phone}/>
			<input type="text" onChange={handleDriverChange("location")}  placeholder="Driver Location..." value={driver.location}/>
				
			</div>
			<div className="row">
			<input type="text" onChange={handleDriverChange("license_number")}  placeholder="Driver License Number..." value={driver.license_number}/>
			<input type="text" onChange={handleDriverChange("vehicle_type")}  placeholder="Vehicle Type..." value={driver.vehicle_type}/>
				
			</div>
			<div className="row">
				
			<input type="text" onChange={handleDriverChange("vehicle_plate_number")}  placeholder="Vehicle Plate Number..." value={driver.vehicle_plate_number}/>
			</div>


			<button onClick={addDriver} className="submit">Register</button>
		</div>


		</div>
		)

}

