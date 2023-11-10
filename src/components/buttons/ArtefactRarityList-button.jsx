import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import useTilg from "tilg";
import SubstatInput from "../Artefacts/SubstatInput";

const ArtefactRarityButtonList = ({artefactLevel,artefactSet,setArtefactRarity,setSubstatInputList,setNbSubstat}) =>{
	
	function onArtefactRarityChange(artefactRarity) {
		//console.log("onArtefactRarityChange value:",value);
		setArtefactRarity(artefactRarity);
		getSubstatInputList(artefactRarity);
	}

	function getSubstatInputList(artefactRarity){
		console.log("artefactRarity",artefactRarity);
		var nbSubstat = getNbSubstatBase(artefactRarity);
		if(artefactLevel%4 == 0){
			if(nbSubstat+artefactLevel/4 < 4){
				nbSubstat = nbSubstat+artefactLevel/4;
			}else{
				nbSubstat = 4;
			}
		}
		setNbSubstat(nbSubstat);

		console.log("nbSubstat dans getSubstatInputList",nbSubstat);
		var newSubstatInputList = [];
		for (let index = 0; index < nbSubstat; index++) {
			//console.log("SubstatInputList index",index);
			newSubstatInputList.push(<SubstatInput key={index} artefactRarity={artefactRarity}/>);
		}
		console.log("newSubstatInputList a la fin de getSubstatInputList", newSubstatInputList);
		setSubstatInputList(newSubstatInputList);
	}

	function getNbSubstatBase(artefactRarity) {
		switch (artefactRarity) {
			case 1:
			case 2:
				// console.log("nbSubstat 0");
				return 0;
			case 3:
				//console.log("nbSubstat 1");
				return 1;
			case 4:
				//console.log("nbSubstat 2");
				return 2;
			case 5:
				//console.log("nbSubstat 3");
				return 3;
			default:
				//console.log("nbSubstat -1");
				return -1;
		}
	}

	var artefactRarityButtonList = [];
	for (let index = artefactSet.minRarity; index <= artefactSet.maxRarity; index++) {
		var iconList = [];
		for(let index2 = 0; index2 < index;index2++){
			iconList.push(<FontAwesomeIcon key={index2} icon={faStar} className="text-warning" />);
		}
		artefactRarityButtonList.push(<ToggleButton className={"bg-rarity-"+index+" border-0"} key={index} id={"artefactRarity"+index} value={index}>{iconList}</ToggleButton>);
	}
	//useTilg()`iconList: ${iconList}`
	//useTilg()`artefactRarityButtonList: ${artefactRarityButtonList}`
	return <ToggleButtonGroup type="radio" name="artefactRarityButton" onChange={onArtefactRarityChange}>{artefactRarityButtonList}</ToggleButtonGroup>;
}

ArtefactRarityButtonList.propTypes = {
	artefactLevel: PropTypes.number,
	artefactSet: PropTypes.shape({
		maxRarity: PropTypes.number,
		minRarity: PropTypes.number
	}),
	setArtefactRarity: PropTypes.func,
	nbSubstatBase: PropTypes.number,
	setSubstatInputList: PropTypes.func,
	setNbSubstat: PropTypes.func
}

export default ArtefactRarityButtonList;
