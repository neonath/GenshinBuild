import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";
export const WeaponApiCall = {

  getAllWeapon: async function (cancel = false) {
    const response = await api.request({
      url: `/weapon/`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.getAllWeapon.name].handleRequestCancellation().signal : undefined,
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

const cancelApiObject = defineCancelApiObject(api)

// export function api() {
//   const securedAPITest = (accessToken) => {
//     fetch("http://localhost:8080/auth0/private", {
//       method: "GET",
//       headers: new Headers({
//         Authorization: "Bearer " + accessToken,
//         "Content-Type": "application/json"
//       })
//     })
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (resJson) {
//         console.log(resJson);
//       })
//       .catch((e) => console.log(e));
//   };

//   const calculateBuild = (artifacts) => {
//     fetch("http://localhost:8080/artifact/calculateBuild", {
//       method: "POST",
//       body: JSON.stringify(artifacts),
//       headers: new Headers({
//         "Content-Type": "application/json"
//       })
//     })
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (resJson) {
//         console.log(resJson);
//       })
//       .catch((e) => console.log(e));
//   };
// }
