import React from "react";
import {Link} from "react-router-dom";

class UC extends React.Component{
	render(){
		return(
			<body>
					<h1>Under konstruktion</h1>
					<p>Denna sida är inte skapad än tryck på länken för att komma tillbaka till start</p>
					<Link to="/">Startsida</Link>
			</body>
		)
	}
}

export default UC;