import React from "react";
import { Link } from "react-router-dom";
import { Addfavorites } from "./addfavorites.js";

export const Navbar = () => {
	return (
		<div className="container">
		<div className="row d-flex">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="col">
				<Link to="/"> <img className="starwars" src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"></img></Link>
			</div>
			<div className="col collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<ul className="navbar-nav">	
				
					<li className="nav-item dropdown  btn btn-primary ">
					<a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<Addfavorites/>
						
					</div>
					</li>
				
				</ul>
			</div>	
		
		</nav>
		</div>
		</div>
	);
};
