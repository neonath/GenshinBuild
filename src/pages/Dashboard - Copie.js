import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import configData from "../config.json";
import {apiCall} from "../apis/api";

export default function DashboardArchive() {
  const {
    isLoading,
    error,
    isAuthenticated,
    user: auth0User,
    getAccessTokenSilently,
    loginWithRedirect,
    logout
  } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  const getAccessToken = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: configData.audience,
        scope: configData.scope
      });
      setAccessToken(accessToken);
      getUserByEmail(auth0User.email);
    } catch (e) {
      console.log(e.message);
    }
  };

  function getUserByEmail(email) {
    apiCall.getUserByEmail(email,false).then((responseData) =>{
      console.log("responseData",responseData);
      setUser(responseData);
    })
  }

  useEffect(() => {
    getAccessToken();
  }, [getAccessTokenSilently]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return (
    isAuthenticated && (
      <div>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
        <img src={auth0User.picture} alt={auth0User.name} />
        <h2>{auth0User.name}</h2>
        <p>{auth0User.email}</p>
        {console.log("auth0User",auth0User)}
        {console.log("user",user)}

        <button onClick={() => apiCall.securedAPITest(accessToken)}>Test private API</button>
        <button onClick={() => apiCall.publicAPITest()}>Test public API</button>
      </div>
    )
  );
}
