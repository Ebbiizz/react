import React from 'react';
import {NavLink} from "react-router-dom";

class Nav extends React.Component{
	render(){
		return(
			<nav>
				<div className="menu">
					<div className="dropdown">
						<button id="services">Våra Tjänster</button>
						<div className="dropdown-content">
							<NavLink className="option" to="/skyltar">Skyltar</NavLink>
							<NavLink className="option" to="/fordonsdekor">Fordonsdekor</NavLink>
							<NavLink className="option" to="/uc">Mässprodukter</NavLink>
							<NavLink className="option" to="/uc">Dekaler</NavLink>
						</div>
					</div>
					<NavLink className="option" to="/about" id="aboutpage">Om 4Sign</NavLink>
					<NavLink className="option" to="/contact" id="contactpage">Kontakta oss</NavLink>
				</div>
			</nav>
		);
	}
}
export default Nav;