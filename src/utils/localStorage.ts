//TODO: se usa para obtener el contenido de una variable en localstorage
export const getItem = (key:string):any=>{
                                        //TODO: el ! del final es para decir que siempre de debe devolver algo
    return JSON.parse(localStorage.getItem(key)!)
}

//TODO: se usa para enviar un dato a logalstorage, si no existe lo crea y si existe lo agrega
export const setItem = (key:string,data:any)=>{
    localStorage.setItem(key, JSON.stringify(data))
}