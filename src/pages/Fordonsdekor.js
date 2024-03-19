import React from "react";
import Fordon1 from "../images/fordon1.png";
import Fordon2 from "../images/fordon2.png";

console.log(Fordon1);
console.log(Fordon2);

class Fordonsdekor extends React.Component{
	render(){
		return(
			<body>
				<div id="sfTitle">
					<h1>Fodornsdekor</h1>
				</div>
				<div id="sfText">
					<p>Din rörliga reklampelare. De anställda är viktiga ambassadörer för ditt varumärke. Med fordonsdekor på firmabilen marknadsför de även varumärket fysiskt. Vi erbjuder fordonsdekor till de flesta fordonen. Hör av dig med dina önskemål så räknar vi fram ett pris.</p>
				</div>
				<div id="fordon1">
					<img className="fordonPic" src={Fordon1} alt="Bild på bil med fordonsdekal" />
				</div>
				<div id="fordon2">	
					<img className="fordonPic" src={Fordon2} alt="Bild på lastbil med fordonsdekal" />
				</div>
			</body>
		)
	}
}

export default Fordonsdekor;