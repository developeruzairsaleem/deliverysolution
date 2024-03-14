import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Customer from "../Customer/Customer.jsx";
import Delivery from "../Delivery/Delivery.jsx";
import Driver from "../Driver/Driver.jsx";
import Order from "../Order/Order.jsx";
import "./Main.css"
export default function Main() {
  return (
  	<div className="main"> 
	    <Routes>
	        <Route path="/driver" element={<Driver/>}/>
	        <Route path="/delivery" element={<Delivery/>}/>
	        <Route path="/order" element={<Order/>}/>
	        <Route path="/customer" element={<Customer/>}/>
	    </Routes>
  	</div>
  );
}




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Customer from "../Customer/Customer.jsx";
// import Delivery from "../Delivery/Delivery.jsx";
// import Driver from "../Driver/Driver.jsx";
// import Order from "../Order/Order.jsx";
// import "./Main.css";

// export default function Main() {
//   return (
//     <div className="main">
//       <h1>Main Component</h1>

//       <Router>
//         <Routes>
//           <Route path="/driver" element={<Driver />} />
//           <Route path="/delivery" element={<Delivery />} />
//           <Route path="/order" element={<Order />} />
//           <Route path="/customer" element={<Customer />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

