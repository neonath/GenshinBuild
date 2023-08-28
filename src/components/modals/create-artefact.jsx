import PropTypes from "prop-types"
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import LevelButton from "../buttons/level-button";

const CreateArtefactModal = ({listArtefactSet,slot}) =>{
    const [artefactLevel,setArtefactLevel] = useState(0);
    const [mainStatLevel,setMainStatLevel] = useState(0);

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

    return(
        <Container>
            <Row>
                <Form.Select>
                    <option>selectionner le set d'artefact</option>
                    {listArtefactSet.map((set,index) =>{
                        return <option key={index}>{set.name}</option>
                    })}
                </Form.Select>
            </Row>
            <Row className="title justify-content-center">
                Niveau
            </Row>
            <Row>
                <LevelButton/>
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
    map: PropTypes.func
  }),
  slot: PropTypes.any
}

export default CreateArtefactModal;