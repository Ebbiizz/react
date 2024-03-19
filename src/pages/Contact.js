import React from "react";
import Map from "../images/karta.png";
import Phone from "../images/phone-call.png";
import Mail from "../images/email.png";
import Location from "../images/location-pin.png";
import Mattias from "../images/mattias.png";
import Putte from "../images/putte.png";
import Eva from "../images/eva.png";
import Rickard from "../images/rickard.png";
import Ludvig from "../images/ludvig.png";
      
console.log(Map);
console.log(Phone);
console.log(Mail);
console.log(Location);
console.log(Mattias);
console.log(Putte);
console.log(Eva);
console.log(Rickard);
console.log(Ludvig);

class Contact extends React.Component{
	render(){
		return(
			<body>
				<div id="contactMap">
					<div>
						<h1>Kontakta oss</h1>
						<div id="phone">
							<img className="contactPic" src={Phone} alt="Telefon ikon" />
							<p className="contactText">0910-380 10</p>
						</div>
						<div id="mail">
							<img className="contactPic" src={Mail} alt="Melj ikon" />
							<p className="contactText">skelleftea@4sign.se</p>
						</div>
						<div id="location">
							<img className="contactPic" src={Location} alt="Plats ikon" />
							<p className="contactText">Spårgatan 6, 93142 Skellefteå</p>
						</div>
					</div>
					<img id="map" src={Map} alt="" />
				</div>
				<div id="personal">
					<div>
						<img className="personPic" src={Mattias} alt="Bild på Mattias" />
						<h4 className="personTitle">Mattias Högdahl</h4>
						<p className="personText">Platschef/Projektledare<br />070-647 00 48<br />mattias.hogdahl@4sign.se</p>
					</div>
					<div>
						<img className="personPic" src={Putte} alt="Bild på Patrick" />
						<h4 className="personTitle">Patrik Hamberg</h4>
						<p className="personText">Försäljning/Projektledare<br />070-33 49 115<br />patrick.hamberg@4sign.se</p>
					</div>
					<div>
						<img className="personPic" src={Eva} alt="Bild på Eva" />
						<h4 className="personTitle">Eva Persson</h4>
						<p className="personText">Försäljning/Skylt & Dekor<br />0910-380 10<br />eva.persson@4sign.se</p>
					</div>
					<div>
						<img className="personPic" src={Rickard} alt="Bild på Rickard" />
						<h4 className="personTitle">Rickard Avander</h4>
						<p className="personText">Verkstad/Montage<br />0910-380 10<br />rickard.avander@4sign.se</p>
					</div>
					<div>
						<img className="personPic" src={Ludvig} alt="Bild på Ludvig" />
						<h4 className="personTitle">Ludvig Mikaelsson</h4>
						<p className="personText">Skylt & Dekor<br />0910-380 10<br />ludvig.mikaelsson@4sign.se</p>
					</div>
				</div>
			</body>
		)
	}
}

export default Contact;