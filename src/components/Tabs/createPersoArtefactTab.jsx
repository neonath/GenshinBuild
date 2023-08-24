import React,{ useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CreateArtefactModal from "../modals/create-artefact";
import { ArtefactApiCall } from "../../apis/ArtefactAPI";

const CreatePersoArtefactTab = () => {
    const [listArtefactSet,setListArtefactSet] = useState([]);
    const [AddArtefactClicked,setAddArtefactClicked] = useState(false);
    const [artefactSlot,setArtefactSlot] = useState("");

    function getAllArtefactSet() {
        ArtefactApiCall.getAllArtefactSet(false).then((responseData) => {
            setListArtefactSet(responseData);
        });
    }

    function onAddNewArtefactClick(slot) {
        getAllArtefactSet();
        setAddArtefactClicked(!AddArtefactClicked);
        setArtefactSlot(slot);
    }

    return (
        <>
        {!AddArtefactClicked &&
            <>
            <Row className="title justify-content-center">Fleur</Row> 
            <Row>
                <Col><Button onClick={() => onAddNewArtefactClick("flower")}>Ajouter un nouvel artefact</Button></Col>
                <Col className="align-self-center text-center">ou</Col>
                <Col><Button>Selectionner un artefact dans l'inventaire</Button></Col>
            </Row>
            <Row className="title justify-content-center">Plume</Row>
            <Row>
                <Col><Button onClick={() => onAddNewArtefactClick("plume")}>Ajouter un nouvel artefact</Button></Col>
                <Col className="align-self-center text-center">ou</Col>
                <Col><Button>Selectionner un artefact dans l'inventaire</Button></Col>
            </Row>
            <Row className="title justify-content-center">Sablier</Row>
            <Row>
                <Col><Button onClick={() => onAddNewArtefactClick("sands")}>Ajouter un nouvel artefact</Button></Col>
                <Col className="align-self-center text-center">ou</Col>
                <Col><Button>Selectionner un artefact dans l'inventaire</Button></Col>
            </Row>
            <Row className="title justify-content-center">Coupe</Row>
            <Row>
                <Col><Button onClick={() => onAddNewArtefactClick("goblet")}>Ajouter un nouvel artefact</Button></Col>
                <Col className="align-self-center text-center">ou</Col>
                <Col><Button>Selectionner un artefact dans l'inventaire</Button></Col>
            </Row>
            <Row className="title justify-content-center">Diademme</Row>
            <Row>
                <Col><Button onClick={() => onAddNewArtefactClick("circlet")}>Ajouter un nouvel artefact</Button></Col>
                <Col className="align-self-center text-center">ou</Col>
                <Col><Button>Selectionner un artefact dans l'inventaire</Button></Col>
            </Row> 
            </>   
        }
        {AddArtefactClicked && <CreateArtefactModal listArtefactSet={listArtefactSet} slot={artefactSlot}/>}
        </>
    )
}

export default CreatePersoArtefactTab;