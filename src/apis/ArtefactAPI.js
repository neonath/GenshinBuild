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

  getArtefactMainStatByRarity: async function (rarity,cancel = false) {
    const response = await api.request({
      url: `/artifact/mainstat/rarity/`+rarity,
      method: "GET",
      signal: cancel ? cancelApiObject[this.getArtefactMainStatByRarity.name].handleRequestCancellation().signal : undefined,
    })

    return response.data
  },
}

const cancelApiObject = defineCancelApiObject(api);
