import React from "react";
import Skyltar1 from "../images/skyltar1.png";
import Skyltar2 from "../images/skyltar2.png";

console.log(Skyltar1);
console.log(Skyltar2);
class Skyltar extends React.Component{
	render(){
		return(
			<body>
				<div id="sfTitle">
					<h1>Skyltar</h1>
				</div>
				<div id="sfText">
					<p>Skylten visar dig i rätt riktning. Den synliggör också ditt varumärke och får dig att sticka ut ur mängden. Vi erbjuder flera olika typer av skyltar och hjälper dig att hitta den lösning som passar ditt företag bäst. Hör av dig med dina önskemål så räknar vi fram ett pris.</p>
				</div>
				<div id="skyltarPic">
					<img id = "skyltarPic1" src={Skyltar1} alt="bild på skylt för skellefteå aik" />
					<img  id = "skyltarPic2" src={Skyltar2} alt="bild på skylt för skellefteå kraft arena" />
				</div>	
			</body>
		)
	}
}

export default Skyltar;