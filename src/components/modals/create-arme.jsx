import PropTypes from "prop-types"
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Avatar } from "antd";

const CreateArmeModal = ({listArmes}) =>{
    return(
        <>
        <Row xs={6}>
            { listArmes.map((arme) => {
                //console.log("personnage",personnage);
                return (
                <Col key={arme.entryPageId}>
                    <button className="bg-transparent border-0 padding-vertical-6px">
                    <Avatar src={arme.iconUrl} className={"bg-rarity-"+arme.rarity} style={{border: "none", width:"auto", height:"auto"}}></Avatar>
                    </button>
                </Col>
                );
            })}
        </Row>
        </>
    )
}

CreateArmeModal.propTypes = {
  listArmes: PropTypes.shape({
    map: PropTypes.func
  })
}

export default CreateArmeModal;