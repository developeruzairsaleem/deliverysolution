import {Routes,Route} from "react-router-dom"
import "./Dashboard.css"
import Main from "../Main/Main.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx"
export default function Dashboard(){

	return(
		<div className="dashboard">
			<Sidebar/>
			<Main/>
		</div>
		)

}
