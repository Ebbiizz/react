import React from "react";
import {Link} from "react-router-dom";
import { Provider, LikeButton } from "@lyket/react";

import dekaler from "../images/dekaler.png";
import fordonsdekor from "../images/fordonsdekor.png";
import massprodukter from "../images/massprodukter.png";
import skyltar from "../images/skyltar.png";
import jocke from "../images/bildJocke.png";

console.log(dekaler);
console.log(fordonsdekor);
console.log(massprodukter);
console.log(skyltar);
console.log(jocke);


class Home extends React.Component{
	render(){
		return(
			<body>
				<div id="slideshow-container">
					<div className="mySlides fade">
						<img className="mainPic" src={jocke} alt="Bild på Jocke som arbetar" />
					</div>	
				</div>
				<div id="text">
					<p id = "bordtext">4Sign Skellefteå är ditt lokala proffs på skyltar och profilprodukter. Ditt varumärke är din största tillgång! Vi på 4Sign Skellefteå skapar lösningarna som får ditt varumärke att lyfta.</p>
					<div id="slogan">
						<p>“Proffs på profilering lokalt i hela Sverige”</p>
					</div>
				</div>	
				<div id="ourServiceTitle">
					<p>Våra tjänster</p>
				</div>
				<div id="ourService">
					<div>
						<Link to="/skyltar"><img className="servicePic" src={skyltar} alt="Bild på en skylt" /></Link>
						<br />
						<Link className="serviceText" to="/skyltar">Skyltar</Link>
					</div>
					<div>
						<Link to="/fordonsdekor"><img className="servicePic" src={fordonsdekor} alt="Bild på fordonsdekor" /></Link>
						<br />
						<Link className="serviceText" to="/fordonsdekor">Fordonsdekor</Link>
					</div>
					<div>
						<Link to="/uc"><img className="servicePic" src={massprodukter} alt="Bild på mässprodukter" /></Link>
						<br />
						<Link className="serviceText" to="/uc">Mässprodukter</Link>
					</div>
					<div>
						<Link to="/uc"><img className="servicePic" src={dekaler} alt="Bild på dekaler" /></Link>
						<br />
						<Link className="serviceText" to="/uc">Dekaler</Link>
					</div>
				</div>
				<div id="like">
					<Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa" theme={{colors: {primary: "rgba(4, 74, 123, 0.6)",}
}}>
						<LikeButton
							namespace="my-blog-post"
							id="how-to-beat-me-at-chess"
						/>
					</Provider>
				</div>
			</body>
		);
	}
}

export default Home;