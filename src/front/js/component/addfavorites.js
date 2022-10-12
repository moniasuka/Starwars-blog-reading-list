import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";

export const Addfavorites = () => {
    //me traigo store para poder almacenar lo que contiene dentro de la funcion
    const { store, actions } = useContext(Context); 
   
 
    return (
        <>
            {                  
                store.favorites.map((item,index) => {
                return (                  

                       <li className = "ms-1 me-1 text-primary" key={index}>{item} <i onClick = {() => {actions.removefavorites(index)}} class="fa fa-trash" aria-hidden="true"></i></li> 

                )
            })
            }
        </>
    )
}