import { instance } from "./base.api"

const endpoint = "character"

export const characters = {
    //TODO: hacemos la peticion getAll que se envia como parametro la pagina, si no llega sera 2
    getAll: function ({ page=2 }: { page?: number }) {
        return instance.get(endpoint, {
            params: {
                page
            }
        })
    },
    //TODO: getById y obtenemos un id y lo enviamos a la ruta
    getById: function ({ id }: { id: string | undefined }) {
        return instance.get(`${endpoint}/${id}`, {})
    }
}