import React, {useState} from "react";
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import Usernames from "../Usernames";

export default function Home({setUser}) {
	const [formContent, setFormContent] = useState({
		username: "",
		password: "",
	});
	const [invalidUser, setInvalidUser] = useState(false)
	function handleChange(event) {
		const {name, value} = event.target;
		setFormContent((prevFormContent) => {
			return {...prevFormContent, [name]: value};
		});
	}

	return (
		<main>
			<h1> AKPsi Fine Portal</h1>
			{invalidUser && <h1> invalid user :/</h1>}
			<img style = {{margin: "25px 0px 50px 0px"}} src = "https://upload.wikimedia.org/wikipedia/en/0/0d/Akpsi-coa.png"/>
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
					onSuccess={(credentialResponse) => {
						const decoded = jwtDecode(
							credentialResponse.credential
						);
						console.log(decoded);
						if (Usernames.includes(decoded.email)) {
							setUser(decoded.email);
						} else {
							alert("This email is not on our roster :/")
						}
					}}
					onError={() => {
						console.log("Login Failed");
					}}
				/>
		</main>
	);
}
