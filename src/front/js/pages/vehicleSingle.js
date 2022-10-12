import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Vehiclesingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log("Se abre el componente Vehiclesingle")
		console.log(params.uid)
		actions.getSingleVehicle(params.uid)

		return () => {
			console.log("Se cerró el componente VehicleSingle")
		}
	}, [])
	return (
        <div className="container spacing mb-5">
		<div className="row">
            <div  className="col"><img src="https://via.placeholder.com/400x200" /></div>
            <div  className="col">
                <div><h1 className="display-4">{store.vehicle.properties ? store.vehicle.properties.name : "Loading..."} </h1></div>
                <div><p className="fs-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p></div>
            </div>            
        </div>	

        <hr className="my-4 text-danger" />
        
        <div className="row mb-5 text-danger fs-5 fw-normal">
            <div  className="col"> <p className="fw-bold">Model</p>{store.vehicle.properties ? store.vehicle.properties.model : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Vehicle Class </p>{store.vehicle.properties ? store.vehicle.properties.vehicle_class : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Manufacturer </p>{store.vehicle.properties ? store.vehicle.properties.manufacturer : "Loading..."} </div>
            <div  className="col"> <p className="fw-bold">Cost in credits </p> {store.vehicle.properties ? store.vehicle.properties.cost_in_credits : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Crew </p>{store.vehicle.properties ? store.vehicle.properties.crew : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Passengers </p>{store.vehicle.properties ? store.vehicle.properties.passengers : "Loading..."}</div>
            <div  className="col"> <p className="fw-bold">Max atmosphering speed </p>{store.vehicle.properties ? store.vehicle.properties.max_atmosphering_speed : "Loading..."} </div>
			<div  className="col"> <p className="fw-bold">Cargo capacity </p>{store.vehicle.properties ? store.vehicle.properties.cargo_capacity : "Loading..."} </div>
            <div  className="col"> <p className="fw-bold">Consumables </p>{store.vehicle.properties ? store.vehicle.properties.consumables : "Loading..."} </div>
            
        </div>	         

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Return to home
				</span>
			</Link>
		</div>
	);
};
