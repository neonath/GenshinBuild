import PropTypes from "prop-types"
import React from "react";
import { Col, Row } from "react-bootstrap";
import { AvatarGenshin } from "../avatar";
import { Avatar } from "antd";

const CreateArmeModal = ({listArmes}) =>{
    return(
        <>
        <Row xs={6}>
            { listArmes.map((arme) => {
                //console.log("personnage",personnage);
                return (
                <Col key={arme.entryPageId}>
                    <button>
                    <Avatar src={arme.iconUrl} className={"bg-rarity-5"}></Avatar>
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