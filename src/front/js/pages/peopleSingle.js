import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Peoplesingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log("Se abre el componente Peoplesingle")
		console.log(params.uid)
		actions.getSinglePeople(params.uid)

		return () => {
			console.log("Se cerró el componente PeopleSingle")
		}
	}, [])
	return (
        <div className="container mt-5 mb-5">
		<div className="row">
            <div  className="col"><img src="https://via.placeholder.com/400x200" /></div>
            <div  className="col">
                <div><h1 className="display-4">{store.people.properties ? store.people.properties.name : "no ha cargado"} </h1></div>
                <div><p className="fs-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p></div>
            </div>            
        </div>	

        <hr className="my-4 text-danger" />
        
        <div className="row mb-5 text-danger fs-5 fw-normal">
            <div  className="col"> <p className="fw-bold">Height</p>{store.people.properties ? store.people.properties.height : "no ha cargado"}</div>
            <div  className="col"> <p className="fw-bold">Mass </p>{store.people.properties ? store.people.properties.mass : "no ha cargado"}</div>
            <div  className="col"> <p className="fw-bold">Hair color </p>{store.people.properties ? store.people.properties.hair_color : "no ha cargado"} </div>
            <div  className="col"> <p className="fw-bold">Skin color </p> {store.people.properties ? store.people.properties.skin_color : "no ha cargado"}</div>
            <div  className="col"> <p className="fw-bold">Eye color </p>{store.people.properties ? store.people.properties.eye_color : "no ha cargado"}</div>
            <div  className="col"> <p className="fw-bold">Birth year </p>{store.people.properties ? store.people.properties.birth_year : "no ha cargado"}</div>
            <div  className="col"> <p className="fw-bold">Gender </p>{store.people.properties ? store.people.properties.gender : "no ha cargado"} </div>
            
        </div>	         

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Return to home
				</span>
			</Link>
		</div>

	);
};

