import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LoginButton } from "../components/buttons/login-button";
import { LogoutButton } from "../components/buttons/logout-button";
import { useAuth0 } from "@auth0/auth0-react";

export const Callback = () =>{
  const {isAuthenticated} = useAuth0();

    return (
        <div className="wrapper">
          <Navbar bg="dark" variant="dark">
            <Container fluid>
              <Navbar.Brand href="/dashboard">GenshinBuild</Navbar.Brand>
              <Nav>
                <Nav.Link href="/personnages">Personnages</Nav.Link>
                <Nav.Link href="/armes">Armes</Nav.Link>
                <Nav.Link href="/artefacts">Artefacts</Nav.Link>
                <Nav.Link href="/preferences">Test Api</Nav.Link>
              </Nav>
              {!isAuthenticated && <LoginButton/>}
              {isAuthenticated && <LogoutButton/>}
            </Container>
          </Navbar>
          <div></div>
        </div>
      );
};