import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";
export const ArtefactApiCall = {

  getAllArtefactSet: async function (cancel = false) {
    const response = await api.request({
      url: `/artifact/`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.getAllArtefactSet.name].handleRequestCancellation().signal : undefined,
    })

    return response.data
  },

  getPersonnagesByUserEmail: async function (email,cancel = false) {
    const response = await api.request({
      url: `/character/user/`+email,
      method: "GET",
      signal: cancel ? cancelApiObject[this.getPersonnagesByUserEmail.name].handleRequestCancellation().signal : undefined,
    })

    return response.data
  }
}

const cancelApiObject = defineCancelApiObject(api);
