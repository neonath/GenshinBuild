import React from "react";
import { apiCall } from "../apis/api";
import PageLayout from "../components/page-layout";

export default function Preferences() {
  function onGetAllPersonnagesClick() {
    apiCall.getAllPersonnages(false).then((responseData) =>{
      console.log("responseData",responseData);
    })
  }

  return (
    <PageLayout>
      <h2>Test API</h2>
      <button onClick={() => apiCall.publicAPITest()}>public API Test</button>
      <button onClick={() => onGetAllPersonnagesClick()}>get all personnage</button>
      <button onClick={() => apiCall.createUser({User :{email: 'j+smith@example.com'}})}>create user</button>
    </PageLayout>
  );
}
