import React,{ useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import CreateArtefactModal from "../modals/create-artefact";
import { ArtefactApiCall } from "../../apis/ArtefactAPI";
import { Avatar } from "antd";
import Coupe from "../../assets/coupe_d_eonetheme";
import Fleur from "../../assets/fleur_de_la_vie";
import Plume from "../../assets/plume_de_la_mort";
import Sablier from "../../assets/sables_du_temps";
import Diademme from "../../assets/diademe_de_logos";

const CreatePersoArtefactTab = () => {
    const [listArtefactSet,setListArtefactSet] = useState([]);
    const [AddArtefactClicked,setAddArtefactClicked] = useState(false);
    const [artefactSlot,setArtefactSlot] = useState("");
    const [slotAvatarClicked,setSlotAvatarClicked] = useState(false);

    function getAllArtefactSet() {
        ArtefactApiCall.getAllArtefactSet(false).then((responseData) => {
            setListArtefactSet(responseData);
        });
    }

    function onAddNewArtefactClick() {
        getAllArtefactSet();
        setAddArtefactClicked(!AddArtefactClicked);
    }

    function handleSlotAvatarClick(slot){
        setSlotAvatarClicked(!slotAvatarClicked)
        setArtefactSlot(slot);
    }

    return (
        <>
        {!AddArtefactClicked &&
            <>
            <Row className="justify-content-evenly">
                <Avatar size={65} icon={<Fleur/>} className="cursor-pointer" onClick={() => handleSlotAvatarClick("flower")}/>
                <Avatar size={65} icon={<Plume/>} className="cursor-pointer" onClick={() => handleSlotAvatarClick("plume")}/>
                <Avatar size={65} icon={<Sablier/>} className="cursor-pointer" onClick={() => handleSlotAvatarClick("sands")}/>
                <Avatar size={65} icon={<Coupe/>} className="cursor-pointer" onClick={() => handleSlotAvatarClick("goblet")}/>
                <Avatar size={65} icon={<Diademme/>} className="cursor-pointer" onClick={() => handleSlotAvatarClick("circlet")}/>
            </Row>
            {slotAvatarClicked &&
                <Row className="margin-top-21px">
                    <Col><Button onClick={() => onAddNewArtefactClick()}>Ajouter un nouvel artefact</Button></Col>
                    <Col className="align-self-center text-center">ou</Col>
                    <Col><Button>Selectionner un artefact dans l'inventaire</Button></Col>
                </Row>
            }
            </>   
        }
        {AddArtefactClicked && <CreateArtefactModal listArtefactSet={listArtefactSet} slot={artefactSlot}/>}
        </>
    )
}

export default CreatePersoArtefactTab;