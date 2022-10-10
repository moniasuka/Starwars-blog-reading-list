 // definiendo variables de estado
export const vehicleStore = {
  
        vehicles:[], //la lista de todos los vehiculos
        vehicle:{} //la vista en singular de un solo vehiculo

}

// nos devuelve las acciones
export function vehicleActions (getStore, getActions, setStore){
    const BASE_URL= process.env.BASE_URL;
    return {
        getVehicles: async() => {
           // console.log(BASE_URL)//para comprobar si el URL es el correcto
            let resultado  = await fetch (`${BASE_URL}vehicles`, )  // despues de fetch, la promesa se guarda en la variable resultado
            if (resultado.ok) { //condicional para saber como proceder en caso de que la promesa retorne un ok o un error
                //alert("Se trajo correctamente la lita de vehiculos")
                //desJSONificando la respuesta
                let resultadoJSON = await resultado.json()
                console.log("resultadoJSON: ",resultadoJSON)
                let store = getStore();
                setStore({...store, vehicles: resultadoJSON.results}) //guardamos el resultado del fetch en el array vehicles de la linea 4 
                return resultadoJSON
            }else 
            alert ("Hubo un error en la peticion de vehiculos")
            return false
        },

        getSingleVehicle: async (numero) => {
            let resultado = await fetch(`${BASE_URL}vehicles/${numero}`)
            if (resultado.ok) {
                //alert("Se trajo correctamente el vehiculo solicitado")
                let resultadoJSON = await resultado.json()
                console.log("resultadoJSON: ", resultadoJSON.result)
                let store = getStore();
                setStore({ ...store, vehicle: resultadoJSON.result})
                
                return resultadoJSON
            } else {
                alert("hubo un error en la petición del vehiculo")
                return false
            }
        }
    }
}