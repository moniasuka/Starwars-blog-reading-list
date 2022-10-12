import { Link } from "react-router-dom";
import { Addfavorites } from "./addfavorites.js";
import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context); 
	return (
		
		
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
				<div className="container">
					<div className="row d-flex"></div>
						<div className="col">
							<Link to="/"> <img className="starwars" src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"></img></Link>
						</div>
						<div className="col collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
							<ul className="navbar-nav">	
							
								<li className="nav-item dropdown  btn btn-primary ">
								<a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites <span class="badge bg-secondary">{store.favorites.length}</span>
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								
									<Addfavorites/>
									
								</div>
								</li>
							
							</ul>
						</div>
				</div>		
		</nav>
	
		
	);
};
