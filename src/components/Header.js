import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/4sign_logo_shadow.png';


console.log(logo);

class Header extends React.Component{
	render(){
		return(
			<header>
				<div id="logo">
					<Link to="/"><img src={logo} alt="4Sign loggan" /></Link>
				</div>

			</header>
		)
	}
}
export default Header;