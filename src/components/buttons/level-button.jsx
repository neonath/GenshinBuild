import PropTypes from "prop-types"
import { useState } from "react";
import React from "react";
import "../../styles/level-button.css";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const LevelButton = ({className,level,onMinusClick,onPlusClick,onChange}) =>{

    return(
        <InputGroup className={className}>
            <Button className="button border-left" onClick={() => onMinusClick()}>-</Button>
            <Form.Control className="text" type="number" value={level} onChange={onChange}/>
            <Button className="button border-right" onClick={() => onPlusClick()}>+</Button>
        </InputGroup>
    )
}

LevelButton.propTypes = {
  className: PropTypes.any,
  level: PropTypes.any,
  onChange: PropTypes.func,
  onMinusClick: PropTypes.func,
  onPlusClick: PropTypes.func
}

export default LevelButton;