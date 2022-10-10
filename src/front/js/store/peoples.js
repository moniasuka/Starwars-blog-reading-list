 // definiendo variables de estado
 export const peopleStore = {
  
    peoples:[], //la lista de todos los personajes
    people:{} //la vista en singular de un solo personaje

}

// nos devuelve las acciones
export function peopleActions (getStore, getActions, setStore){
const BASE_URL= process.env.BASE_URL;
return {
    getPeoples: async() => {
       // console.log(BASE_URL)//para comprobar si el URL es el correcto
        let resultado  = await fetch (`${BASE_URL}people`, )  // despues de fetch, la promesa se guarda en la variable resultado
        if (resultado.ok) { //condicional para saber como proceder en caso de que la promesa retorne un ok o un error
            //alert("Se trajo correctamente la lita de vehiculos")
            //desJSONificando la respuesta
            let resultadoJSON = await resultado.json()
            console.log("resultadoJSON: ",resultadoJSON)
            let store = getStore();
            setStore({...store, peoples: resultadoJSON.results}) //guardamos el resultado del fetch en el array peoples de la linea 4 
            return resultadoJSON
        }else 
        alert ("Hubo un error en la peticion de personajes")
        return false
    },

    getSinglePeople: async (numero) => {
        let resultado = await fetch(`${BASE_URL}people/${numero}`)
        if (resultado.ok) {
            //alert("Se trajo correctamente el personaje solicitado")
            let resultadoJSON = await resultado.json()
            console.log("resultadoJSON: ", resultadoJSON.result)
            let store = getStore();
            setStore({ ...store, people: resultadoJSON.result }) //guardamos el resultado del fetch en el objeto people de la linea 5 
            return resultadoJSON
        } else {
            alert("hubo un error en la petición del personaje")
            return false
        }
    }
}
}