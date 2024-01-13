import React from "react";

export default function Fine({name, amount, expanded, toggleExpand, details}) {
	let detailContent;
	let eventName;
	switch (name) {
		case "Brotherhood":
			eventName = "brotherhoods";
			break;
		case "Ritual":
			eventName = "rituals";
			break;
		case "Rush":
			eventName = "rush events";
			break;
		case "Checkpoint":
			eventName = "checkpoints";
			break;
		case "Requirement":
			eventName = "requirements";
			break;
	}

	console.log(details);
	if (details) {
		if (details.events) {
			detailContent = (
				<div>
					{" "}
					<p>You have missed these {eventName} :(</p>
					{details.events.join(", ")}
				</div>
			);
		} else if (details.requirements) {
			detailContent = (
				<div>
					<p>
						You have {details.requirements.count} total points. You
						need 9 !
					</p>
					<ul>
						<li>
							You have {details.requirements.brotherhood}{" "}
							brotherhood points
						</li>
						<li>
							You have {details.requirements.professional}{" "}
							professional points
						</li>
						<li>You have {details.requirements.dei} dei points</li>
						<li>You have {details.requirements.cs} cs points</li>
					</ul>
				</div>
			);
		}
	}
	return (
		<>
			<div className="fine">
				<button
					className="expandButton"
					onClick={details ? toggleExpand : () => {}}
				>
					<p className="fine-category">
						{name}:{" "}
						<span
							style={{
								color: name !== "Reduction" ? "red" : "green",
							}}
						>
							${amount}
						</span>
					</p>
					{details && (
						<span
							style={{
								padding: "5px",
								transform: expanded
									? "rotate(0deg)"
									: "rotate(90deg)",
							}}
							className="material-icons"
						>
							expand_more
						</span>
					)}
				</button>

				{expanded && (
					<div className="detail-container">{detailContent}</div>
				)}
			</div>
		</>
	);
}
