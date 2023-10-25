import PropTypes from "prop-types"
import React, { useState } from "react";
import SubstatInput from "./SubstatInput";
import { Button } from "react-bootstrap";
import useTilg from "tilg";

function getSubstatInputList(artefactRarity,nbSubstat){
    console.log("nbSubstat dans getSubstatInputList",nbSubstat);
    var newSubstatInputList = [];
    for (let index = 0; index < nbSubstat; index++) {
        //console.log("SubstatInputList index",index);
        newSubstatInputList.push(<SubstatInput key={index} artefactRarity={artefactRarity}/>);
    }
    console.log("substatInputList a la fin de getSubstatInputList", newSubstatInputList);
    return newSubstatInputList;
}

const SubstatInputList = ({artefactRarity,nbSubstatBase}) => {
    const nextSubstatInputList = getSubstatInputList(artefactRarity,nbSubstatBase);
    const [substatInputList,setSubstatListInput] = useState(nextSubstatInputList);
    const [nbSubstat,setNbSubstat] = useState(nbSubstatBase);
    setSubstatListInput(nextSubstatInputList);

    useTilg();

    console.log("artefactRarity",artefactRarity,"nbSubstat",nbSubstat,"nbSubstatBase",nbSubstatBase);
    console.log("substatInputList",substatInputList,"nextSubstatInputList",nextSubstatInputList);

    function handleAddSubstatClick() {
		console.log("handleAddSubstatClick");
		console.log("nbSubstat before increment",nbSubstat);
		var nextNbSubstat = nbSubstat+1;
		setNbSubstat(nextNbSubstat);
		console.log("nbSubstat after increment",nbSubstat);
		const nextSubstatInputList = substatInputList.concat(<SubstatInput key={nextNbSubstat} artefactRarity={artefactRarity}/>);
		console.log("subtatInputList",substatInputList);
		setSubstatListInput(nextSubstatInputList);
	}

    return (
        <>
            {substatInputList}
            <Button onClick={() => handleAddSubstatClick()}>ajouter une statistique secondaire</Button>
        </>
        )
}

SubstatInputList.propTypes = {
  artefactRarity: PropTypes.any,
  nbSubstatBase: PropTypes.any
}

export default SubstatInputList;