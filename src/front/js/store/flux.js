import { peopleStore, peopleActions } from "./peoples.js";
import { planetStore, planetActions } from "./planetas.js";
import { vehicleStore, vehicleActions } from "./vehicles.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
					ruta: "uno",
					indice: 0
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
					ruta: "dos",
					indice: 1
				}
			],
			...peopleStore,
			...planetStore,
			...vehicleStore,
			favorites: []
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the local store
				setStore({ ...store, demo: demo });
			},
			...peopleActions(getStore, getActions, setStore),
			...planetActions(getStore, getActions, setStore),
			...vehicleActions(getStore, getActions, setStore),
			//function to add the item the user likes onto the favorites list
			addfavorites: (aux) => { 
				const store = getStore();
				let auxArray = store.favorites.slice()
				auxArray.push(aux)
				setStore({...store,favorites: auxArray})
			}

		}
	};
};

export default getState;
