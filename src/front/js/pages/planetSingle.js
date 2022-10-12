import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Planetsingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log("Se abre el componente Planetsingle")
		console.log(params.uid)
		actions.getSinglePlanet(params.uid)

		return () => {
			console.log("Se cerró el componente PlanetSingle")
		}
	}, [])
	return (
		<div className="container spacing mb-5">
		<div className="row">
            <div  className="col"><img src="https://via.placeholder.com/400x200" /></div>
            <div  className="col">
                <div><h1 className="display-4">{store.planet.properties ? store.planet.properties.name : "Loading..."} </h1></div>
                <div><p className="fs-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p></div>
            </div>            
        </div>	

        <hr className="my-4 text-danger" />
        
        <div className="row mb-5 text-danger fs-5 fw-normal">
            <div  className="col"> <p className="fw-bold">Diameter</p>{store.planet.properties ? store.planet.properties.diameter : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Rotation Period </p>{store.planet.properties ? store.planet.properties.rotation_period : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Orbital Period </p>{store.planet.properties ? store.planet.properties.orbital_period : "Loading..."} </div>
            <div  className="col"> <p className="fw-bold">Gravity </p> {store.planet.properties ? store.planet.properties.gravity : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Population </p>{store.planet.properties ? store.planet.properties.population : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Climate </p>{store.planet.properties ? store.planet.properties.climate : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Terrain </p>{store.planet.properties ? store.planet.properties.terrain : "Loading..."} </div>
			<div  className="col"> <p className="fw-bold">Surface Water </p>{store.planet.properties ? store.planet.properties.surface_water : "Loading..."} </div>
            
        </div>	         

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Return to home
				</span>
			</Link>
		</div>
	);
};

