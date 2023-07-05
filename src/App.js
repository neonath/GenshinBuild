import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import Dashboard from "./pages/Dashboard";
import Preferences from "./pages/Preferences";
import Armes from "./pages/Armes";
import Personnages from "./pages/Personnages";
import Artefacts from "./pages/Artefacts";
import { Callback } from "./pages/callback";
import { PageLoader } from "./components/page-loader";
import { HomePage } from "./pages/home";

function App() {
  const { isLoading } = useAuth0();
  
  if(isLoading) {
    return (
      <div>
        <PageLoader/>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/armes" element={<Armes />} />
      <Route path="/personnages" element={<Personnages />} />
      <Route path="/artefacts" element={<Artefacts />} />
      <Route path="/callback" element={<Callback/>} />
    </Routes>
  );
}

export default App;
