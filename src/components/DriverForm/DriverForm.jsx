import React from "react";
import "./DriverForm.css"


import {useState} from "react"


export default function DriverForm (){

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

		<div className="form-container">
			<div className="form">
			<h3 className="form__heading">
				Register Driver
			</h3>

			<div className="row">
			<input type="text" placeholder="Driver Name..."/>
			<input type="email" placeholder="Driver Email..."/>
				
			</div>
			<div className="row">
			<input type="text" placeholder="Driver Phone Number..."/>
			<input type="text" placeholder="Driver Location..."/>
				
			</div>
			<div className="row">
			<input type="text" placeholder="Driver License Number..."/>
			<input type="text" placeholder="Vehicle Type..."/>
				
			</div>
			<div className="row">
				
			<input type="text" placeholder="Vehicle Plate Number..."/>
			</div>


			<button className="submit">Register</button>
		</div>


		</div>
		)

}

