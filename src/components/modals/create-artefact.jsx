import PropTypes, { func,array } from "prop-types"
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import LevelButton from "../buttons/level-button";
import { ArtefactApiCall } from "../../apis/ArtefactAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useTilg from "tilg";
import ArtefactRarityButtonList from "../buttons/ArtefactRarityList-button";
import SubstatInput from "../Artefacts/SubstatInput";
import SubstatInputList from "../Artefacts/SubstatInputList";

const CreateArtefactModal = ({listArtefactSet,slot}) =>{
	const [artefactLevel,setArtefactLevel] = useState(0);
	const [mainStat,setMainStat] = useState();
	const [choosedArtefactSet,setChoosedArtefactSet] = useState();
	const [artefactRarity,setArtefactRarity] = useState(0);
	const [substatInputList,setSubstatListInput] = useState([]);
	const [nbSubstat,setNbSubstat] = useState(-1);

	const mainStatSablier = [
		{ label: 'ATK%', value: 'atk_' },
		{ label: 'DEF%', value: 'def_' },
		{ label: 'PV%', value: 'hp_' },
		{ label: "Recharge d'énergie", value: 'enerRech_' },
	];
	const mainStatCoupe = [
	{ label: 'ATK%', value: 'atk_' },
	{ label: 'DEF%', value: 'def_' },
	{ label: 'PV%', value: 'hp_' },
	{ label: 'DGT Physique %', value: 'physical_dmg_' },
	{ label: 'DGT Anemo %', value: 'anemo_dmg_' },
	{ label: 'DGT Pyro %', value: 'pyro_dmg_' },
	{ label: 'DGT Electro %', value: 'electro_dmg_' },
	{ label: 'DGT Cryo %', value: 'cryo_dmg_' },
	{ label: 'DGT Hydro %', value: 'hydro_dmg_' },
	{ label: 'DGT Geo %', value: 'geo_dmg_' },
	{ label: "Recharge d'énergie", value: 'enerRech_' },
	];
	const mainStatCouronne = [
	{ label: 'ATK%', value: 'atk_' },
	{ label: 'DEF%', value: 'def_' },
	{ label: 'PV%', value: 'hp_' },
	{ label: 'Taux critique', value: 'critRate_' },
	{ label: 'DGT Critique %', value: 'critDMG_' },
	{ label: 'Soins %', value: 'heal_' },
	{ label: "Recharge d'énergie", value: 'enerRech_' },
	];
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
	const stats = [
	{ label: 'ATK', value: 'atk' },
	{ label: 'DEF', value: 'def' },
	{ label: 'PV', value: 'hp' },
	{ label: 'ATK', value: 'atk_' },
	{ label: 'DEF', value: 'def_' },
	{ label: 'PV', value: 'hp_' },
	{ label: 'Taux critique', value: 'critRate_' },
	{ label: 'DGT Critique', value: 'critDMG_' },
	{ label: 'DGT Physique', value: 'physical_dmg_' },
	{ label: 'DGT Anemo', value: 'anemo_dmg_' },
	{ label: 'DGT Pyro', value: 'pyro_dmg_' },
	{ label: 'DGT Electro', value: 'electro_dmg_' },
	{ label: 'DGT Cryo', value: 'cryo_dmg_' },
	{ label: 'DGT Hydro', value: 'hydro_dmg_' },
	{ label: 'DGT Geo', value: 'geo_dmg_' },
	{ label: 'Maitrise elementaire', value: 'eleMas' },
	{ label: "Recharge d'énergie", value: 'enerRech_' },
	{ label: 'Soins', value: 'heal_' },
	];

	var selectOption = <div></div>;
	switch (slot) {
		case "flower":
			selectOption = 
				<option value="hp">PV</option>;
			break;
		case "plume":
			selectOption = 
				<option value="atk">Attaque</option>;
			break;
		case "sands":
			selectOption = 
				mainStatSablier.map((set,index) =>{
					return <option key={index} value={set.value}>{set.label}</option>;
				});
			break;
		case "goblet":
			selectOption = 
				mainStatCoupe.map((set,index) =>{
					return <option key={index} value={set.value}>{set.label}</option>;
				});
			break;
		case "circlet":
			selectOption = 
				mainStatCouronne.map((set,index) =>{
					return <option key={index} value={set.value}>{set.label}</option>;
				});
			break;
		default:
			break;
	}

	function getArtefactMainStatByRarity() {
		ArtefactApiCall.getArtefactMainStatByRarity(4,false).then((responseData) => {
			setMainStat(responseData);
		});
	}

	function getArtefactSetById(id){
		return listArtefactSet.find((artefactSet) => artefactSet.entryPageId == id);
	}

	function onChangeArtefactSet(e) {
		const nextChoosedArtefactSet = getArtefactSetById(e.target.value);
		setChoosedArtefactSet(nextChoosedArtefactSet);
		console.log("choosedArtefactSet",nextChoosedArtefactSet);
	}
	
	function setArtefactLevelMax() {
		/*level max artefact par rareté:
			rareté 1 et 2 niveau max 4
			rareté 3 niveau max 12
			rareté 4 niveau max 16
			rareté 5 niveau max 20
		*/
		switch (artefactRarity) {
			case 1:
			case 2:
				return 4;
			case 3:
				return 12;
			case 4:
				return 16;
			case 5:
				return 20;
		
			default:
				return 0;
		}
	}

	function getNbSubstatBase() {
		switch (artefactRarity) {
			case 1:
			case 2:
				return 0;
			case 3:
				return 1;
			case 4:
				return 2;
			case 5:
				return 3;
		
			default:
				return 0;
		}
	}

	

	return(
		<Container>
			<Row>
				<Form.Select as={Col} onChange={onChangeArtefactSet}>
					<option>selectionner le set d'artefact</option>
					{listArtefactSet.map((set,index) =>{
						return <option key={index} value={set.entryPageId}>{set.name}</option>
					})}
				</Form.Select>
			</Row>
			{choosedArtefactSet && <Row><ArtefactRarityButtonList artefactSet= {choosedArtefactSet} setArtefactRarity={setArtefactRarity}/></Row>}
			<Row className="title justify-content-center">
				Niveau
			</Row>
			<Row>
				<LevelButton setLevel={setArtefactLevel} min={0} max={setArtefactLevelMax()}/>
			</Row>
			<Row className="title justify-content-center">
				Statistique principale
			</Row>
			<Row>
				<Form.Select as={Col}>
					<option>selectionner la statistique</option>
					{selectOption}
				</Form.Select>
				{/*<Col><LevelButton/></Col>*/}
			</Row>
			<Row className="title justify-content-center">
				Statistiques secondaires
			</Row>
			<SubstatInputList artefactRarity={artefactRarity} nbSubstatBase={getNbSubstatBase()}/>
		</Container>
	)
}

CreateArtefactModal.propTypes = {
  listArtefactSet: PropTypes.array,
  slot: PropTypes.any
}

export default CreateArtefactModal;