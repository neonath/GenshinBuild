import { notification } from "antd";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://thawing-escarpment-68336-5b73faaf861a.herokuapp.com/",
})

//définition d'un gestionnaire d'erreurs personnalisé pour toutes les API
const errorHandler = (error) => {
    const statusCode = error.response?.status

    if(error.code ==="ERR_CANCELED"){
        notification.error({
            placement:"bottomRight",
            description:"API canceled!",
        })
        return Promise.resolve()
    }

    //logger uniquement les erreurs qui ne sont pas 401
    if(statusCode && statusCode !== 401){
        console.error(error)
    }

    return Promise.reject(error)
}

//enregistrement du gestionnaire d'erreur personnalisé dans l'instance axios "api"
api.interceptors.response.use(undefined,(error) => {
    return errorHandler(error)
})