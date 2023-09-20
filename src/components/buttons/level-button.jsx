import PropTypes from "prop-types"
import { useState } from "react";
import React from "react";
import "../../styles/level-button.css";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const LevelButton = ({className,setLevel,min,max}) =>{

    const [counter,setCounter] = useState(0);

    function handleOnMinusClick() {
		if(counter>min){
			setCounter(counter-1);
            setLevel(counter);
		}
	}

	function handleOnPlusClick() {
		if(counter<max){
			setCounter(counter+1);
            setLevel(counter);
		}
	}

	function onChange(e) {
		setCounter(parseInt(e.target.value));
        setLevel(counter);
	}

    return(
        <InputGroup className={className}>
            <Button className="button border-left" onClick={() => handleOnMinusClick()}>-</Button>
            <Form.Control className="text" type="number" value={counter} onChange={onChange}/>
            <Button className="button border-right" onClick={() => handleOnPlusClick()}>+</Button>
        </InputGroup>
    )
}

LevelButton.propTypes = {
  className: PropTypes.any,
  setLevel: PropTypes.func.isRequired,
  min: PropTypes.any.isRequired,
  max: PropTypes.any.isRequired
}

export default LevelButton;