import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "react-bootstrap";

export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/dashboard",
            },
        });
    };

    return(
        <Button className="d-flex" variant="primary" onClick={handleLogin}>
            Log In
        </Button>
    );
};