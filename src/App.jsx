import {useState, useEffect} from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";

import {ref, onValue, off} from "firebase/database";
import {database, auth} from "./firebase-config";

function App() {
	const [user, setUser] = useState(null); // Initialize as null
	const [dbData, setDbData] = useState(null);

	useEffect(() => {
		const dbRef = ref(database, "/users/");

		const unsubscribe = onValue(dbRef, (snapshot) => {
			setDbData(snapshot.val());
		});

		return () => off(dbRef, "value", unsubscribe);
	}, []);

	
	useEffect(() => {
		// Use Firebase Authentication's onAuthStateChanged to listen for user state changes
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				const storedUserData = JSON.parse(localStorage.getItem('userData'));
				if (storedUserData) {
					setUser({
						email: authUser.email.replace(".", "_"),
						data: storedUserData
					});
				}
			} else {
				// User is signed out
				setUser(null); // Set user to null
			}
		});

		return () => {
			// Unsubscribe the listener on cleanup to prevent memory leaks
			unsubscribe();
		};
	}, []);

	const signOut = async () => {
		try {
			
		  await auth.signOut(); // Sign out the user
		  localStorage.removeItem('userData');
		  
		} catch (error) {
		  console.error("Error signing out:", error.message);
		}
	  };

	
	return (
		<>
			{!user && <Home setUser={setUser} dbData={dbData} />}
			{user && dbData && <Profile userData={user.data} signOut = {signOut}/>}
		</>
	);
}

export default App;
