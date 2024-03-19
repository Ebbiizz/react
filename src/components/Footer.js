import React from 'react';

class Footer extends React.Component{
	render(){
		return(
			<footer>
				<div className="footerContent">
					<div>
						<h2 className="foottitle">Kontakta oss</h2>
						<p className="foottext">0910-380 10<br />skelleftea@4sign.se<br />Spårgatan 6, 93142 Skellefteå</p>
					</div>
					<div className="social">
						<h2 className="foottitle">Sociala Medier</h2>
						<a href="https://www.instagram.com/4signskelleftea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="foottext">Instagram: @4signskelleftea</a>
						<br />
						<a href="https://www.facebook.com/profile.php?id=100063484993260" class="foottext">Facebook: 4Sign Skellefteå</a>
					</div>
					<div>
						<h2 className="foottitle">Öppettider</h2>
						<p className="foottext">Mån-Fre 8-17<br />Lunchstängt 12-13</p>
					</div>
				</div>
				<div id="copyright">
					<p>© 2024 4Sign AB, Spårgatan 6, 93142 Skellefteå</p>
				</div>
			</footer>
		)
	}
}

export default Footer;