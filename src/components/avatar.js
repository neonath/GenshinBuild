import React from "react";
import { Avatar } from "antd";
import { QuestionOutlined, UserOutlined } from "@ant-design/icons";
import "../styles/avatarGenshin.css";
import { Button } from "react-bootstrap";

export const AvatarGenshin = ({iconUrl,rarity,vision}) => {
    let backgroundRarity = "";
    let visionIcon = "";
    let avatarElement;
    //console.log("iconUrl",props.iconUrl);
    //console.log("rarity",props.rarity);
    switch (rarity) {
        case 4:
            backgroundRarity = "bg-rarity-4"
            break;
    
        case 5:
            backgroundRarity = "bg-rarity-5"
            break;
        default:
            break;
    }

    switch(vision) {
        case "Géo":
            visionIcon = "https://wiki.hoyolab.com/_nuxt/img/geo.2498e06.png";
            break;
        
        case "Cryo":
            visionIcon = "https://wiki.hoyolab.com/_nuxt/img/cryo.b810caa.png";
            break;

        case "Anémo":
            visionIcon = "https://wiki.hoyolab.com/_nuxt/img/anemo.e0f1804.png";
            break;

        case "Hydro":
            visionIcon = "https://wiki.hoyolab.com/_nuxt/img/hydro.3e969aa.png";
            break;

        case "Électro":
            visionIcon = "https://wiki.hoyolab.com/_nuxt/img/electro.be07020.png";
            break;

        case "Dendro":
            visionIcon = "https://wiki.hoyolab.com/_nuxt/img/dendro.88f5bfa.png";
            break;

        case "Pyro":
            visionIcon = "https://wiki.hoyolab.com/_nuxt/img/pyro.2267e27.png";
            break;
        default:
            break;
    }

    avatarElement =
    <div className={"avatarGenshin bg-rarity-"+rarity}>
        <img src={iconUrl} className="img-avatar"></img>
        {vision == null ? <QuestionOutlined className="img-vision text-white"/> : <img src={visionIcon} className="img-vision"/>}
    </div>

    return (
        avatarElement
        // <Avatar icon={<UserOutlined/>}
        //     size={64}
        //     src={props.iconUrl}
        //     style={{background: backgroundRarity}}>
        //         <img src={visionIcon}></img>
        // </Avatar>
    )
}