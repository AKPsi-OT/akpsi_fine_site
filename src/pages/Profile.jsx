import React, {useState} from "react";
import Fine from "../components/Fine.jsx";
import FineData from "../FineData.jsx";

export default function Profile() {
	// list logic
	const [fineData, setFineData] = useState(
		FineData.map((fineObject) => {
			// state for the fine data, initalized to the local fine data, with expanded false
			return {
				...fineObject,
				expanded: false,
			};
		})
	);
	const fineElements = fineData.map((fineObject) => {
		// maps fine data to elements
		return (
			<Fine
				name={fineObject.name}
				amount={fineObject.amount}
				expanded={fineObject.expanded}
				details={fineObject.detail}
				toggleExpand={() => toggleExpand(fineObject.name)}
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
	return (
		<>
			<main>
				<h1 className="greeting">What's good [yourname]</h1>
				<h2> You have fines :) </h2>
				<div className="total-fine-card">
					<h1 className="fine-amount"> $10</h1>
				</div>
				<div className="fine-container">{fineElements}</div>
			</main>
		</>
	);
}
