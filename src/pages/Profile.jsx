import React, {useState} from "react";
import Fine from "../components/Fine.jsx";
import {auth} from "../firebase-config";

export default function Profile({userData, signOut}) {
	// list logic from fine data
	// const [fineData, setFineData] = useState(
	// 	FineData.map((fineObject) => {
	// 		// state for the fine data, initalized to the local fine data, with expanded false
	// 		return {
	// 			...fineObject,
	// 			expanded: false,
	// 		};
	// 	})
	// );

	const events = [
		"Brotherhood Meetings",
		"Checkpoints",
		"Rituals",
		"Rush Events",
	]; // everything that isn't requirements, or reductions
	// fine elements from userData
	console.log(userData);
	const [fineData, setFineData] = useState(
		Object.keys(userData)
			.filter((key) => key != "name" && key != "Fines")
			.sort((a, b) => {
				console.log(a, b);
				let val = 0;
				if (a === "Fine Reduction Amount") return 2;
				if (b === "Fine Reduction Amount") return -1;
				if (a === "Requirements") return 1; // don't have to worry about b being fine reduction, because if that were the case we already returne -1
				if (b === "Requirements") return -1;
				return val;
			})
			.map((UserKey) => {
				const fineObject = {
					name: UserKey,
					amount: userData["Fines"][UserKey],
					reducedRequirements: userData["Fines"].RR === "TRUE",
				};
				if (UserKey === "Fine Reduction Amount") {
					// if its fine reduction
					return {
						...fineObject,
						details: {
							creditHours: userData[UserKey]["Credit Hours"],
						},
					};
				} else if (events.includes(UserKey)) {
					return {
						...fineObject,
						details: {
							events: userData[UserKey].events,
						},
					};
				} else if (UserKey === "Requirements") {
					return {
						...fineObject,
						details: {
							requirements: userData[UserKey],
						},
					};
				}
			})
	);

	const fineElements = fineData
		.filter((fineObject) => parseInt(fineObject.amount.substring(1)) > 0)
		.map((fineObject) => {
			// maps fine data to elements
			return (
				<Fine
					name={fineObject.name}
					amount={fineObject.amount}
					expanded={fineObject.expanded}
					details={fineObject.details}
					toggleExpand={() => toggleExpand(fineObject.name)}
					reducedRequirements={fineObject.reducedRequirements}
				/>
			);
		});
	function toggleExpand(name) {
		// toggles the expanded for each
		setFineData((prevFineData) => {
			return prevFineData.map((fineObject) => {
				if (fineObject.name === name) {
					return {...fineObject, expanded: !fineObject.expanded};
				}
				return fineObject;
			});
		});
	}

	function formatName(name) {
		const splitName = name.split(",");
		return (
			splitName[1][1].toUpperCase() +
			splitName[1].substring(2) +
			" " +
			splitName[0][0].toUpperCase() +
			splitName[0].substring(1)
		);
	}
	return (
		<>
			<main>
				<h1 className="greeting">
					What's good {formatName(userData.name)}
				</h1>
				{parseInt(userData.Fines["Final fine"].substring[1]) > 0 ? (
					<h2>You have no fines :)</h2>
				) : (
					<>
						{" "}
						<h2> You have fines :) </h2>
						<div className="total-fine-card">
							<h1 className="fine-amount">
								{" "}
								{userData.Fines["Final fine"]}
							</h1>
							{fineData.reducedRequirements && (
								<p className="reduced-tag">
									reduced requirements
								</p>
							)}
						</div>
						<div className="fine-container">{fineElements}</div>
						<button className="sign-out" onClick={signOut}>
							Sign Out
						</button>
					</>
				)}
			</main>
		</>
	);
}
