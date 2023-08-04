import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import configData from "./config.json";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./auth0-provider-with-navigate";
import { ConfigProvider, theme } from "antd";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const redirectUri = window.location.origin + "/dashboard";
const providerConfig = {
  domain: configData.domain,
  clientId: configData.clientId,
  audience: configData.audience,
  redirectUri: redirectUri,
  useRefreshTokens: true,
  cacheLocation: "localstorage"
};

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
          <App/>
        </ConfigProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>
);
