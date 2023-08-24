import PropTypes from "prop-types"
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Tabs } from "antd";
import { useState } from "react";
import { Form, Modal} from "react-bootstrap";
import "../../styles/create-perso.css";
import CreatePersoPersoTab from "../Tabs/createPersoPersoTab";
import CreatePersoArmeTab from "../Tabs/createPersoArmeTab";
import CreatePersoArtefactTab from "../Tabs/createPersoArtefactTab";

const CreatePersoModal = ({persoChoisi}) => {
    function formatString(string) {
        let result = string;
        result = string.toLowerCase();
        result = string.replace(/[é,É]/,"e");
        return result;
    }
    
    const getHeaderClass = () => {
        if(persoChoisi.vision == null || persoChoisi.vision == undefined){
            return "header-bg";
        }else{
            return "header-bg " + formatString(persoChoisi.vision) + "-bg";
        }
    }

    return(
    <>
        <Modal.Header className={getHeaderClass()} closeButton>
        {/*console.log("persoChoisi",PersoChoisi)*/}
            <Avatar size={56} src={persoChoisi.iconUrl} icon={<UserOutlined/>} className={"bg-rarity-"+persoChoisi.rarity}></Avatar>
            <span className="genshin-font text-size-26px text-white letter-spacing-minus-dot-26px padding-left-14px">{persoChoisi.name}</span>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Tabs
                    defaultActiveKey="personnage"
                    type="card"
                    tabPosition="bottom"
                    items= {[
                        {key: "personnage",
                        label: "Personnage",
                        children: <CreatePersoPersoTab vision={formatString(persoChoisi.vision)} listConstel={persoChoisi.listConstel}/>},
                        {key: "arme",
                        label: "Arme",
                        children: <CreatePersoArmeTab/>},
                        {key: "artefact",
                        label: "Artefact",
                        children: <CreatePersoArtefactTab/>}
                    ]}>
                </Tabs>
            </Form>
        </Modal.Body>
    </>
    )
}

CreatePersoModal.propTypes = {
  persoChoisi: PropTypes.shape({
    iconUrl: PropTypes.any,
    listConstel: PropTypes.any,
    name: PropTypes.any,
    rarity: PropTypes.any,
    vision: PropTypes.any
  })
}

export default CreatePersoModal;