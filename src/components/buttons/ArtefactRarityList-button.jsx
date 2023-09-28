import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import useTilg from "tilg";

const ArtefactRarityButtonList = ({artefactSet}) =>{
    var artefactRarityButtonList = [];
        for (let index = artefactSet.minRarity; index <= artefactSet.maxRarity; index++) {
            var iconList = [];
            for(let index2 = 0; index2 < index;index2++){
                iconList.push(<FontAwesomeIcon key={index2} icon={faStar} className="text-warning" />);
            }
            artefactRarityButtonList.push(<ToggleButton key={index} value={index}>{iconList}</ToggleButton>);
        }
        useTilg()`iconList: ${iconList}`
        useTilg()`artefactRarityButtonList: ${artefactRarityButtonList}`
    return <ToggleButtonGroup name="artefactRarityButton">{artefactRarityButtonList}</ToggleButtonGroup>;
}

ArtefactRarityButtonList.propTypes = {
  artefactSet: PropTypes.shape({
    maxRarity: PropTypes.number,
    minRarity: PropTypes.number
  })
}

export default ArtefactRarityButtonList;
