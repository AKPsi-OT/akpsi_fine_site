import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="151974152748-9j40vpkhoearm72vj17qv7kir79om716.apps.googleusercontent.com">
			<App />
		</GoogleOAuthProvider>
	</React.StrictMode>
);
