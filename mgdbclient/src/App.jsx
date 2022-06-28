// import "./App.css";
import React from "react";
 import Form from "./Form";
/* /import Login from "./Login";*/
import Data from "./Data"; 
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Link to="Form">
          <button>Add data</button>
        </Link>
        <br />
        <Link to="Data">
          <button>home</button>
        </Link>
        {/* <Switch> */}
        <Routes>
          <Route path="/Form" element={<Form/>} />
          {/* <Route path="/login" element={<Login />} />  */}
          <Route path="/Data" element={<Data />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}