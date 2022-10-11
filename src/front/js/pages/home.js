import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="text-danger mt-3">Characters</h1>
      <div className="d-flex flex-row flex-nowrap mt-3 mb-3" style={{ overflowX: "scroll" }}>
				{store.peoples.map((item, index) => {
					return (
						<div key={index} className="col mx-1 px-1">
						<div className="card" style={{ width: "18rem" }}>
						  <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
						  <div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p>Uid: {item.uid}</p>
							<p>Url: {item.url}</p>
						  </div>

						  <div className="d-flex justify-content-between mx-2 my-2"> 
							<div>
								<Link to={`/people/${item.uid}`} className="btn btn-outline-primary">
								Learn more!
								</Link>
							</div>
							<div> 
								<button onClick ={(e) => {actions.addfavorites(item.name)}} className="btn btn-outline-warning"><i className="fas fa-heart"></i></button>
								
							</div>
							</div>						  
						</div>
					  </div>
					);
				})}
		
      </div>

      <h1 className="text-danger">Planets</h1>
      <div className="d-flex flex-row flex-nowrap mt-3 mb-3" style={{ overflowX: "scroll" }}>
        {store.planets.map((item, index) => {
          return (
            <div key={index} className="col mx-1 px-1">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p>Uid: {item.uid}</p>
                  <p>Url: {item.url}</p>
                </div>
                <div className="card-body">
                  <Link to={`/planet/${item.uid}`} className="card-link">
                    Learn more!
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="text-danger">Vehicles</h1>
      <div className="container">
        <div
          className="d-flex flex-row flex-nowrap mt-3 mb-3"
          style={{ overflowX: "scroll" }}
        >
          {store.vehicles.map((item, index) => {
            return (
              <div  key={index} className="col mx-1 px-1">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>Uid: {item.uid}</p>
                    <p>Url: {item.url}</p>
                  </div>
                  <div className="card-body">
                    <Link to={`/vehicle/${item.uid}`} className="card-link">
                      Learn more!
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
