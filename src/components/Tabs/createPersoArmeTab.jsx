import React from "react"
import { Button, Col, Row } from "react-bootstrap";

const CreatePersoArmeTab = () => {
 return(
    <>
    <Row>
        <Col><Button>Ajouter une nouvelle arme</Button></Col>
        <Col className="align-self-center text-center">ou</Col>
        <Col><Button>Selectionner une arme dans l'inventaire</Button></Col>
    </Row>
    </>
 )
}

export default CreatePersoArmeTab;