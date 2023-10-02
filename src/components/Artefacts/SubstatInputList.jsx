import React from "react";
import PropTypes from "prop-types"
import { Col, Form, InputGroup, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const SubstatInput = ({artefactRarity}) => {
    const subStats = [
        { label: 'ATK', value: 'atk' },
        { label: 'DEF', value: 'def' },
        { label: 'PV', value: 'hp' },
        { label: 'ATK%', value: 'atk_' },
        { label: 'DEF%', value: 'def_' },
        { label: 'PV%', value: 'hp_' },
        { label: 'Taux critique', value: 'critRate_' },
        { label: 'DGT Critique %', value: 'critDMG_' },
        { label: 'Maitrise elementaire', value: 'eleMas' },
        { label: "Recharge d'énergie", value: 'enerRech_' },
        ];

    function getNbRollOpt() {
        switch (artefactRarity) {
            case 1:
                return 2
			case 2:
				return 3;
			case 3:
			case 4:
			case 5:
				return 4;
		
			default:
				return 0;
        }
    }

    var rollList = [];
    for(let rollIndex = 0; rollIndex < getNbRollOpt(); rollIndex++){
        rollList.push(<ToggleButton key={rollIndex} id={"artefactSubstatOpt"+rollIndex} value=""/>);
    }

    //useTilg()`iconList: ${iconList}`
    //useTilg()`artefactRarityButtonList: ${artefactRarityButtonList}`
    return (
        <Row>
            <Form.Select as={Col}>
                <option value="">selectionner la statistique</option>
                {subStats.map((stat,index) =>{
                    return <option key={index} value={stat.value}>{stat.label}</option>
                })}
            </Form.Select>
            <InputGroup as={Col}>
                <Form.Control type="number"></Form.Control>
                <ToggleButtonGroup type="radio" name="artefactSubstat">
                    {rollList}
                </ToggleButtonGroup>
            </InputGroup>
        </Row>
    );
}

SubstatInput.propTypes = {
    artefactRarity: PropTypes.any
}

export default SubstatInput;