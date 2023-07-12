import { useState } from "react";
import "../../styles/level-button.css";
import { Button, Col, Row } from "react-bootstrap";

export const LevelButton = ({className}) =>{
    const [level,setLevel] = useState(0);

    return(
        <Row className={className}>
            <Col xs="auto"><Button className="button border-left" onClick={() => {if(level>0){setLevel(level-1)}}}>-</Button></Col>
            <Col xs="auto" className="text">{level}</Col>
            <Col xs="auto"><Button className="button border-right" onClick={() => {if(level<90){setLevel(level+1)}}}>+</Button></Col>
        </Row>
    )
}