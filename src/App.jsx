import {useState, useEffect} from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";

function App() {

	const [user, setUser] = useState()
	return (
		<>
			{!user && <Home setUser = {setUser}/>}
			{user &&  <Profile user = {user}/>}
		</>
	);
}

export default App;
