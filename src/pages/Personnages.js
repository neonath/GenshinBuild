import { useAuth0 } from "@auth0/auth0-react";
import React,{useState} from "react";
import { apiCall } from "../apis/api";
import { PageLayout } from "../components/page-layout";
import { CharacterApiCall } from "../apis/CharacterAPI";
import { Button, Col, ModalHeader, Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { AvatarGenshin } from "../components/avatar";
import {UserOutlined} from "@ant-design/icons";
import "../styles/personnage.css"
import { Avatar } from "antd";
import { CreatePersoModal } from "../components/modals/create-perso";

export default function Personnages() {
  const {user} = useAuth0();
  const [show, setShow] = useState(false);
  const [modalCreatePersoShow, setModalCreatePersoShow] = useState(false);
  const [listPersonnages, setListPersonnages] = useState([]);
  const [PersoChoisi,setPersoChoisi] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModalCreatePersoClose = () => setModalCreatePersoShow(false);
  const handleModalCreatePersoShow = () => setModalCreatePersoShow(true);

  function onGetAllPersonnagesClick() {
    apiCall.getAllPersonnages(false).then((responseData) =>{
      console.log("responseData",responseData);
      setListPersonnages(responseData);
    })
  }

  function getUserByEmail(email) {
    apiCall.getUserByEmail(email,false).then((responseData) =>{
      console.log("responseData",responseData);
    })
  }

  function getCharactersByUserEmail(email) {
    CharacterApiCall.getPersonnagesByUserEmail(email,false).then((responseData) =>{
      console.log("responseData",responseData);
    })
  }

  const onAvatarClick = (personnage) =>{
    setPersoChoisi(personnage);
    //console.log("persoChoisi: "+PersoChoisi);
    handleModalCreatePersoShow();
    handleClose();
  }

  return (
    <PageLayout>
      <div className="d-grip">
        <Button onClick={() => {handleShow(); onGetAllPersonnagesClick();}}><FontAwesomeIcon icon={icon({name: 'plus'})} /> Ajouter un nouveau personnage</Button>
        {/* <Button onClick={onGetAllPersonnagesClick}>get all personnage</Button> */}
      </div>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-create-perso" contentClassName="modal-bg">
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <Row xs={6}>
            { listPersonnages.map((personnage) => {
              //console.log("personnage",personnage);
              return (
                <Col key={personnage.entryPageId}>
                  <button onClick={() => onAvatarClick(personnage)}>
                    <AvatarGenshin iconUrl={personnage.iconUrl}
                      rarity={personnage.rarity}
                      vision={personnage.vision}/>
                  </button>
                </Col>
                );
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      <Modal show={modalCreatePersoShow} onHide={handleModalCreatePersoClose} dialogClassName="modal-create-perso" contentClassName="modal-bg">
            <CreatePersoModal persoChoisi={PersoChoisi}/>
      </Modal>
    </PageLayout>
    );
}
