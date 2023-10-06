import React, { useState } from "react";
import PropTypes from "prop-types"
import { Button, Col, Form, InputGroup, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

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
    const subStatsValues = [
        {stat:"hp",values:[29.88,71.70,143.40,239.0,298.75]},
        {stat:"atk",values:[1.95,4.67,9.34,15.56,19.45]},
        {stat:"def",values:[2.31,5.56,11.11,18.52,23.15]},
        {stat:"hp_",values:[1.46,2.33,3.50,4.66,5.83]},
        {stat:"atk_",values:[1.46,2.33,3.50,4.66,5.83]},
        {stat:"def_",values:[1.82,2.91,4.37,5.83,7.29]},
        {stat:"eleMas",values:[5.83,9.33,13.99,18.56,23.31]},
        {stat:"enerRech_",values:[1.62,2.59,3.89,5.18,6.48]},
        {stat:"critRate_",values:[0.97,1.55,2.33,3.11,3.89]},
        {stat:"critDMG_",values:[1.94,3.11,4.66,6.22,7.77]}
    ]

    const [substatType,setSubstatType] = useState();
    const [rollOptions,setRollOptions] = useState(getRollOptionsValues(""));
    const [choosedSubstatRoll,setChoosedSubstatRoll] = useState(0);

    function getNbRollOpt() {
        switch (artefactRarity) {
            case 1:
                return 2;
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

    function handleSubStatTypeSelect(e) {
        console.log("substatTypeSelect",e.target.value);
        setSubstatType(e.target.value);
        setRollOptions(getRollOptionsValues(e.target.value));
        setChoosedSubstatRoll(0);
    }
    
    function getRollOptionsValues(substatType) {
        /*
        pour la rareté 1:
            plus fort roll = x
            roll moins fort = x*0.7
        pour la rareté 2:
            plus fort roll = x
            deuxieme roll plus fort = x*0.85
            troisième roll = x*0.7
        pour la rareté 3,4,5:
            plus fort roll = x
            deuxieme roll = x*0.9
            troisième roll = x*0.8
            moins fort roll = x*0.7    
        */
        
        var subStatTypeValues;
        var substatBaseRollValue;
        console.log("substatType",substatType);
        if(substatType === ""){
            substatBaseRollValue = 0;
        }else{
            subStatTypeValues = subStatsValues.find((subStatTypeValues) => { return subStatTypeValues.stat == substatType});
            substatBaseRollValue = subStatTypeValues.values.find((rollValue,index) => {return index === artefactRarity-1});
        }
        console.log("subStatTypeValues",subStatTypeValues);
        console.log("substatBaseRollValue",substatBaseRollValue);
        
        switch (artefactRarity) {
            case 1:
                return [substatBaseRollValue*0.7,substatBaseRollValue];
			case 2:
				return [substatBaseRollValue*0.7,substatBaseRollValue*0.85,substatBaseRollValue];
			case 3:
			case 4:
			case 5:
				return [substatBaseRollValue*0.7,substatBaseRollValue*0.8,substatBaseRollValue*0.9,substatBaseRollValue];
		
			default:
				return [];
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
            <Form.Select as={Col} onChange={handleSubStatTypeSelect}>
                <option value="">selectionner la statistique</option>
                {subStats.map((stat,index) =>{
                    return <option key={index} value={stat.value}>{stat.label}</option>
                })}
            </Form.Select>
            <InputGroup as={Col}>
                <Form.Control type="number" readOnly value={choosedSubstatRoll === undefined? choosedSubstatRoll:choosedSubstatRoll.toFixed(2)} onChange={e => setChoosedSubstatRoll(e.target.value)}></Form.Control>
                {rollOptions == undefined? rollList : rollOptions.map((rollOption,index) => {
                    return <Button key={index} id={"artefactSubstatOpt"+index} value={rollOption} onClick={() => setChoosedSubstatRoll(choosedSubstatRoll+rollOption)}>{rollOption.toFixed(2)}</Button>;
                })}
            </InputGroup>
        </Row>
    );
}

SubstatInput.propTypes = {
    artefactRarity: PropTypes.any
}

export default SubstatInput;