import React, { useState } from "react";
import SubstatInput from "./SubstatInput";
import { Button } from "react-bootstrap";

const SubstatInputList = ({artefactRarity,nbSubstatBase}) => {
    const [substatInputList, setSubstatListInput] = useState([]);
    const [nbSubstat,setNbSubstat] = useState(0);

    function handleAddSubstatClick() {
		console.log("handleAddSubstatClick");
		console.log("nbSubstat before increment",nbSubstat);
		var nextNbSubstat = nbSubstat+1;
		setNbSubstat(nextNbSubstat);
		console.log("nbSubstat after increment",nbSubstat);
		var newSubstatInputList = Array.from(substatInputList);
		console.log("newSubstatInputList",newSubstatInputList);
		newSubstatInputList.splice(newSubstatInputList.length-1,0,<SubstatInput key={nbSubstat} artefactRarity={artefactRarity}/>)
		console.log("subtatInputList",substatInputList);
		setSubstatListInput(newSubstatInputList);
	}

    console.log("getSubstatInputList")
    console.log("artefactRarity",artefactRarity);
    console.log("nbSubstat",nbSubstat);
    console.log("nbSubstat",nbSubstat);
    setNbSubstat(nbSubstatBase);
    var newSubstatInputList = [];
    for (let index = 0; index < nbSubstat; index++) {
        newSubstatInputList.push(<SubstatInput key={index} artefactRarity={artefactRarity}/>);
    }
    newSubstatInputList.push(<Button key="button" onClick={() => handleAddSubstatClick()}>ajouter une statistique secondaire</Button>)
    console.log("newSubstatInputList",newSubstatInputList);
    console.log("substatInputList",substatInputList);
    setSubstatListInput(newSubstatInputList);

    return substatInputList;
}

export default SubstatInputList;