import {useState, useEffect} from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";

import {ref, get, off} from "firebase/database";
import {database, auth} from "./firebase-config";

function App() {
	const [user, setUser] = useState(null); // Initialize as null
	const [loading, setLoading] = useState(true);
	const [dbData, setDbData] = useState(null);
	useEffect(() => {
		// Use Firebase Authentication's onAuthStateChanged to listen for user state changes
		const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
			if (authUser) {
				try {
					const dbRef = ref(database, "/users/");
					const snapshot = await get(dbRef);
					setDbData(snapshot.val());
					const formattedEmail = authUser.email.replace(/\./g, "_");
					if (formattedEmail in snapshot.val()) {
						setUser(formattedEmail);
					}
				} catch (error) {
					console.error("Error updating dbData:", error);
				}
			} else {
				// User is signed out
				setUser(null); // Set user to null
			}
		});

		return () => {
			// Unsubscribe the listener on cleanup to prevent memory leaks
			setUser(null); // Set user to null
			unsubscribe();
		};
	}, []);

	useEffect(()=>{
		setLoading(false)
	},[dbData,user])
	async function updateDbData() {
		try {
			const dbRef = ref(database, "/users/");
			const snapshot = await get(dbRef);
			setDbData(snapshot.val());
		} catch (error) {
			console.error("Error updating dbData:", error);
		}
	}

	const signOut = async () => {
		try {
			await auth.signOut(); // Sign out the user
			localStorage.removeItem("dbData");
		} catch (error) {
			console.error("Error signing out:", error.message);
		}
	};

	return (
		<>
		  {loading ? <p>loading </p>: (
			<>
			  {!user && (
				<Home setUser={setUser} updateDbData={updateDbData} dbData={dbData} />
			  )}
			  {user && <Profile userData={dbData[user]} signOut={signOut} />}
			</>
		  )}
		</>
	  );
}

export default App;
