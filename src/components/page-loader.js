import React from "react";
import "../styles/page-loader.css"

export const PageLoader = () => {
    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

    return(
        <div className="loader">
            <img src={loadingImg} alt="loading..."/>
        </div>
    );
};