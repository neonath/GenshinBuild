import PropTypes from "prop-types"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import {LoginButton} from "./buttons/login-button"
import {LogoutButton} from "./buttons/logout-button"
import { useAuth0 } from "@auth0/auth0-react"

const PageLayout = ({children}) => {
    const {isAuthenticated} = useAuth0();

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                <Navbar.Brand href="/dashboard">GenshinBuild</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/personnages">Personnages</Nav.Link>
                    <Nav.Link href="/armes">Armes</Nav.Link>
                    <Nav.Link href="/artefacts">Artefacts</Nav.Link>
                    <Nav.Link href="/preferences">Test Api</Nav.Link>
                </Nav>
                {!isAuthenticated && <LoginButton/>}
                {isAuthenticated && <LogoutButton/>}
                </Container>
            </Navbar>
            <div data-bs-theme="dark">{children}</div>
        </div>
    )
}

PageLayout.propTypes = {
  children: PropTypes.any
}

export default PageLayout;