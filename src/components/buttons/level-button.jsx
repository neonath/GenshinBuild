import { useState } from "react";
import React from "react";
import "../../styles/level-button.css";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export const LevelButton = ({className,level,onMinusClick,onPlusClick,onChange}) =>{

    return(
        <InputGroup className={className}>
            <Button className="button border-left" onClick={() => onMinusClick()}>-</Button>
            <Form.Control className="text" type="number" value={level} onChange={onChange}/>
            <Button className="button border-right" onClick={() => onPlusClick()}>+</Button>
        </InputGroup>
    )
}