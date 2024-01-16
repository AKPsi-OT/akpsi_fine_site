import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { auth, googleProvider } from "../firebase-config";
import { GoogleAuthProvider, signInWithCredential,setPersistence, browserSessionPersistence } from 'firebase/auth';


export default function Home({setUser,dbData}) {
	// const [formContent, setFormContent] = useState({
	// 	username: "",
	// 	password: "",
	// });

	const [invalidUser, setInvalidUser] = useState(false);
	function handleChange(event) {
		const {name, value} = event.target;
		setFormContent((prevFormContent) => {
			return {...prevFormContent, [name]: value};
		});
	}

	

	const signInWithGoogleOAuth = async (googleResponse) => {
		await setPersistence(auth, browserSessionPersistence); // Set persistent session
    
		const credential = GoogleAuthProvider.credential(googleResponse.credential);
        try {
            const userCredential = await signInWithCredential(auth, credential);
            const decoded = jwtDecode(googleResponse.credential);
			const formattedEmail = decoded.email.replace(".","_")
            if ((formattedEmail in dbData)) {
                setUser({
					data: dbData[formattedEmail],
					email: formattedEmail,
				  });
				  localStorage.setItem('userData', JSON.stringify(dbData[formattedEmail]));
            } else {
                alert("This email is not on our roster :/");
				
            }
        } catch (error) {
            console.error("Error signing in with Google OAuth:", error.message);
        }
    };

	return (
		<main>
			<h1> AKPsi Fine Portal</h1>
			{invalidUser && <h1> invalid user :/</h1>}
			<img
				style={{margin: "25px 0px 50px 0px"}}
				src="https://upload.wikimedia.org/wikipedia/en/0/0d/Akpsi-coa.png"
			/>
			{/* <form>
				<input
					type="text"
					name="username"
					value={formContent.username}
					onChange={handleChange}
					placeholder="username"
				/>
				<input
					type="text"
					name="password"
					value={formContent.password}
					onChange={handleChange}
					placeholder="password"
				/>
				<button className="sign-in-button">SIGN IN</button>
				
			</form> */}
			<GoogleLogin
				onSuccess={signInWithGoogleOAuth}
				onError={() => {
					console.log("Login Failed");
				}}
			/>
		</main>
	);
}
