import './App.css';
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import {BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";

function App() {




  return (

  <div>
    <Router>
      <Dashboard/>
    </Router>
  </div>

  );
}

export default App;
