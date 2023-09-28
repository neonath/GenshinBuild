import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import useTilg from "tilg";

const ArtefactRarityButtonList = ({artefactSet,setArtefactRarity}) =>{
    
  function onArtefactRarityChange(artefactRarity) {
    //console.log("onArtefactRarityChange value:",value);
    setArtefactRarity(artefactRarity);
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
  artefactSet: PropTypes.shape({
    maxRarity: PropTypes.number,
    minRarity: PropTypes.number
  }),
  setArtefactRarity: PropTypes.func
}

export default ArtefactRarityButtonList;
