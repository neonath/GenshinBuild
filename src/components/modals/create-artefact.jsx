import PropTypes, { func } from "prop-types"
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import LevelButton from "../buttons/level-button";
import { ArtefactApiCall } from "../../apis/ArtefactAPI";

const CreateArtefactModal = ({listArtefactSet,slot}) =>{
	const [artefactLevel,setArtefactLevel] = useState(0);
	const [mainStat,setMainStat] = useState();
	const [choosedArtefactSet,setChoosedArtefactSet] = useState();
	const [artefactRarity,setArtefactRarity] = useState(0);

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
		getArtefactMainStatByRarity();
		setChoosedArtefactSet(getArtefactSetById(e.target.value));
		console.log("choosedArtefactSet",choosedArtefactSet);
	}

	function handleOnMinusLevelClick() {
		/*level max artefact par rareté:
			rareté 1 et 2 niveau max 4
			rareté 3 niveau max 12
			rareté 4 niveau max 16
			rareté 5 niveau max 20
		*/
	}

	function handleOnPlusLevelClick() {

	}

	function onChangeLevel(e) {
		setArtefactLevel(parseInt(e.target.value));
	}

	function handleOnMinusRarityClick() {
		if(artefactRarity>choosedArtefactSet.minRarity){
			setArtefactRarity(artefactRarity-1);
		}
	}

	function handleOnPlusRarityClick() {
		if(artefactRarity<choosedArtefactSet.maxRarity){
			setArtefactRarity(artefactRarity+1);
		}
	}

	function onChangeRarity(e) {
		setArtefactRarity(parseInt(e.target.value));
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
				<Col><LevelButton level={artefactRarity}/></Col>
			</Row>
			<Row className="title justify-content-center">
				Niveau
			</Row>
			<Row>
				<LevelButton level={artefactLevel}/>
			</Row>
			<Row className="title justify-content-center">
				Statistique principale
			</Row>
			<Row>
				<Form.Select as={Col}>
					<option>selectionner la statistique</option>
					{selectOption}
				</Form.Select>
				<Col><LevelButton/></Col>
			</Row>
			<Row className="title justify-content-center">
				Statistiques secondaires
			</Row>
			<Row>
				<Form.Select as={Col}>
					<option value="">selectionner la statistique</option>
					{subStats.map((stat,index) =>{
						return <option key={index} value={stat.value}>{stat.label}</option>
					})}
				</Form.Select>
				<InputGroup as={Col}>
					<Form.Control type="number"></Form.Control>
					<Button></Button>
					<Button></Button>
					<Button></Button>
					<Button></Button>
				</InputGroup>
			</Row>
		</Container>
	)
}

CreateArtefactModal.propTypes = {
  listArtefactSet: PropTypes.shape({
	map: PropTypes.func,
	find: PropTypes.func
  }),
  slot: PropTypes.any
}

export default CreateArtefactModal;