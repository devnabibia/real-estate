import React from "react";
import "../styles.css"; // Import your CSS styles
import "./profileItem.css"
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import { Paper, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

const ProfileItem = ({ name, matches, location, id, status, price, description }) => {
	let hello = {
		paper: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			verticalAlign: "middle",
			boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
			borderRadius: "25px",
		},
	}
	return (
		<Paper elevation={6} sx={{ maxWidth: 550, borderRadius: 5, justifyContent: "center" }} className="profileItemContainer">
			<div className="floatingEco">
				<span className="matchesTextProfileItem">
					<EnergySavingsLeafIcon color="green" /> {matches}%Eco
				</span>
			</div>
			<div className="profileItemFirst">
				<div><b><h2>{"Devnabibia"}</h2></b></div>
				<div>{"Nairobi, Kenya"}</div>
			</div>
			<div className="profileItemSecond">
				<div className="info">
					<span className="bullet">					</span>
					<span className="infoContent">{"1 Bedroom, 1 Bath"}</span>
				</div>

				<div className="info">
					<span className="bullet">					</span>
					<span className="infoContent">{"Greater than 600 sq ft"}</span>
				</div>

				<div className="info">
					<span className="bullet">					</span>
					<span className="infoContent">{"Less than $1,200/month"}</span>
				</div>

				<div className="info">
					<span className="bullet">					</span>
					<span className="infoContent">{"Eco-Score 50%"}</span>
				</div>
			</div>
		</Paper>
		// <div className="containerProfileItem">
		//   <div className="matchesProfileItem">
		//     <span className="matchesTextProfileItem">
		//       <EnergySavingsLeafIcon color='green'/> {matches}%Eco
		//     </span>
		//   </div>

		//   <span className="name">{name}</span>

		//   <span className="descriptionProfileItem">
		//     {age} - {location}
		//   </span>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="user" />
		//     </span>
		//     <span className="infoContent">{info1}</span>
		//   </div>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="circle" />
		//     </span>
		//     <span className="infoContent">{info2}</span>
		//   </div>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="hashtag" />
		//     </span>
		//     <span className="infoContent">{info3}</span>
		//   </div>

		//   <div className="info">
		//     <span className="iconProfile">
		//       <Icon name="calendar" />
		//     </span>
		//     <span className="infoContent">{info4}</span>
		//   </div>
		// </div>
	);
};

export default ProfileItem;
