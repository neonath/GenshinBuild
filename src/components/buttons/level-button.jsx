import { useState } from "react";
import "../../styles/level-button.css";
import { Col, Row } from "react-bootstrap";

export const LevelButton = () =>{
    const [level,setLevel] = useState(0);

    return(
        <Row>
            <Col className="button border-left" onClick={() => setLevel(level-1)}>-</Col>
            <Col className="text">{level}</Col>
            <Col className="button border-right" onClick={() => setLevel(level+1)}>+</Col>
        </Row>
    )
}