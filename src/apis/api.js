import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";
export const apiCall = {

  securedAPITest: function (accessToken) {
    fetch("http://localhost:8080/auth0/private", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json"
      })
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (resJson) {
        console.log(resJson);
      })
      .catch((e) => console.log(e));
  },

  publicAPITest: function () {
    fetch("http://localhost:8080/auth0/public", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (resJson) {
        console.log(resJson);
      })
      .catch((e) => console.log(e));
  },

  calculateBuild: async function(artifacts, cancel = false) {
    const response = await api.request({
      url: `/artifact/calculateBuild`,
      method:"POST",
      data: artifacts,
      signal: cancel ? cancelApiObject[this.calculateBuild.name].handleRequestCancellation().signal : undefined,
    })

    return response.data
  },

  getAllPersonnages: async function (cancel = false) {
    const response = await api.request({
      url: `/character/`,
      method: "GET",
      signal: cancel ? cancelApiObject[this.getAllPersonnages.name].handleRequestCancellation().signal : undefined,
    })

    return response.data
  },

  createUser: async function (user, cancel = false){
    const response = await api.request({
      url: `/user/`,
      method: "POST",
      data: user,
      signal: cancel ? cancelApiObject[this.createUser.name].handleRequestCancellation().signal : undefined,
    })

    return response.data
  },

  getUserByEmail: async function (email, cancel = false){
    const response = await api.request({
      url: `/user/`+email,
      method: "get",
      signal: cancel ? cancelApiObject[this.getUser.name].handleRequestCancellation().signal : undefined,
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
