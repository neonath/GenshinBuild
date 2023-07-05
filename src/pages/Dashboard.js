import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import configData from "../config.json";
import {apiCall} from "../apis/api";
import { PageLayout } from "../components/page-layout";

export default function Dashboard() {
  const {user} = useAuth0();

  if(!user){
    return null;
  }

  return (
    <PageLayout>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {console.log("user",user)}

        <button onClick={() => apiCall.securedAPITest(accessToken)}>Test private API</button>
        <button onClick={() => apiCall.publicAPITest()}>Test public API</button>
      </div>
    </PageLayout>
  );
}
