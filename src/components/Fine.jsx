import React from "react";

export default function Fine({ name, amount, expanded, toggleExpand, details, reducedRequirements }) {
	let detailContent;
	let eventName;
	switch (name) {
		case "Brotherhood Meetings":
			eventName = "brotherhoods";
			break;
		case "Rituals":
			eventName = "rituals";
			break;
		case "Rush Events":
			eventName = "rush events";
			break;
		case "Checkpoints":
			eventName = "checkpoints";
			break;
		case "Requirement Fines":
			eventName = "requirements";
			break;
	}

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
						You have {details.requirements["Total Points"]} total points. You
						need {reducedRequirements ? 6 : 9} !
					</p>
					<ul>
						<li>
							You have {details.requirements.Brotherhood}{" "}
							Brotherhood points
						</li>
						<li>
							You have {details.requirements.Professional}{" "}
							Professional points
						</li>
						<li>You have {details.requirements.DEI} DEI points</li>
						<li>You have {details.requirements["Community Service"]} Community Service points</li>
						<li>You have {details.requirements.Fundraising}  Fundraising points</li>
					</ul>
				</div>
			);
		} else if (details.creditHours){
			detailContent = (
				<div>
					{" "}
					<p>You have {details.creditHours} credit hours</p>
					<p> Each credit hour is worth $5</p>
				</div>
			);
		}
	}
	return (
		<>
			<div className="fine">
				<button
					className="expandButton"
					onClick={details ? toggleExpand : () => { }}
					style={
						details && {
							cursor: "pointer"
						}
					}
				>
					<p className="fine-category">
						{name}:{" "}
						<span
							style={{
								color: name !== "Fine Reduction Amount" ? "red" : "green",
							}}
						>
							{amount}
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
