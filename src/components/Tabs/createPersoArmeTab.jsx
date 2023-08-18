import React, { useState } from "react"
import { Button, Col, Row } from "react-bootstrap";
import CreateArmeModal from "../modals/create-arme";
import { apiCall } from "../../apis/api";
import { WeaponApiCall } from "../../apis/ArmeAPI";

const CreatePersoArmeTab = () => {
    const [listArmes, setListArmes] = useState([]);

    function getAllWeapon() {
        WeaponApiCall.getAllWeapon(false).then((responseData) => {
            setListArmes(responseData);
        });
    }

    function onAddNewArmeClick() {
        getAllWeapon();
    }

 return(
    <>
    <Row>
        <Col><Button onClick={() => onAddNewArmeClick()}>Ajouter une nouvelle arme</Button></Col>
        <Col className="align-self-center text-center">ou</Col>
        <Col><Button>Selectionner une arme dans l'inventaire</Button></Col>
    </Row>
    <CreateArmeModal listArmes={listArmes}/>
    </>
 )
}

export default CreatePersoArmeTab;