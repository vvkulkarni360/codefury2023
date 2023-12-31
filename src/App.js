import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Notifications } from 'react-push-notification';



function App() {
  

  return (
    <Router>
      <div className="App">
      <Notifications/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


