import React from "react";
import "./Sidebar.css"
import {useNavigate} from "react-router-dom"
import {useState} from "react";
import {Link, useLocation} from "react-router-dom"






export default function Sidebar(){

	const {pathname} =	useLocation()


	return (
		<div className="sidebar">
			<h3 className="main-heading">Dashboard</h3>
			<div className="sidebar__list">
				<Link to="/customer" className={`list__item ${pathname==="/customer"?"active" : ""}` }>Customers</Link>	
				<Link to="/delivery"  className={`list__item ${pathname==="/delivery"?"active" : ""}` }>Delivery</Link>	
				<Link to="/driver"  className={`list__item ${pathname==="/driver"?"active" : ""}` }>Drivers</Link>	
				<Link to="/order"  className={`list__item ${pathname==="/order"?"active" : ""}` }>Orders</Link>	
				
			</div>
		</div>
		)


}
