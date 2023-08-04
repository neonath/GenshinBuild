import React, { useState } from 'react';
import { Button, CardGroup, Col, Container, Form, Row } from 'react-bootstrap';
import ArtefactInput from '../components/Artefacts/ArtefactInput';
import ArtefactCard from '../components/Artefacts/ArtefactCard';
import {apiCall} from '../apis/api';
import ArtefactCardCollapse from '../components/Artefacts/artefactCardCollapse';
import "../styles/artefact.css";
import PageLayout from '../components/page-layout';

export default function Artefacts() {
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
  const artifacts = [
    {
      slotKey: 'flower',
      mainStat: 'hp',
      substats: ['', '', '', ''],
    },
    {
      slotKey: 'plume',
      mainStat: 'atk',
      substats: ['', '', '', ''],
    },
    {
      slotKey: 'sands',
      mainStat: 'atk_',
      substats: ['', '', '', ''],
    },
    {
      slotKey: 'goblet',
      mainStat: 'atk_',
      substats: ['', '', '', ''],
    },
    {
      slotKey: 'circlet',
      mainStat: 'atk_',
      substats: ['', '', '', ''],
    },
  ];
  const [listArtifact,setListArtifact] = useState([]);
  //    $scope.artifacts = [{slotKey:"flower", mainStat:"hp", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"plume", mainStat:"atk", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"sands", mainStat:"atk_", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"goblet", mainStat:"def_", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"circlet", mainStat:"critDMG_", substats:["critRate_","atk_","",""]}];

  const handleStatChange = (artifact) => {
    switch (artifact.slotKey) {
      case 'flower':
        artifacts[0] = artifact;
        break;
      case 'plume':
        artifacts[1] = artifact;
        break;
      case 'sands':
        artifacts[2] = artifact;
        break;
      case 'goblet':
        artifacts[3] = artifact;
        break;
      case 'circlet':
        artifacts[4] = artifact;
        break;
      default:
        break;
    }
    console.log("artifacts",artifacts);
  }

  function onCalculateBuildClick() {
    apiCall.calculateBuild(artifacts)
    .then((responseJSON) => {console.log("responseJSON",responseJSON);setListArtifact(responseJSON)});
  }

  const mapListArtifact = function (artifact) {

    console.log("artifact",artifact);
    return (
      <ArtefactCard key={artifact.Id} artifact={artifact}/>
    )
  }

  return (
    <PageLayout>
      <Container fluid>
        <Form>
          <CardGroup>
            <ArtefactInput
              nom="Fleur"
              listStats={[{ label: 'PV', value: 'hp' }]}
              selectedArtifact={artifacts[0]}
              onStatChange={handleStatChange}
            />
            <ArtefactInput
              nom="Plume"
              listStats={[{ label: 'ATK', value: 'atk' }]}
              selectedArtifact={artifacts[1]}
              onStatChange={handleStatChange}
            />
            <ArtefactInput
              nom="Sablier"
              listStats={mainStatSablier}
              selectedArtifact={artifacts[2]}
              onStatChange={handleStatChange}
            />
            <ArtefactInput
              nom="Coupe"
              listStats={mainStatCoupe}
              selectedArtifact={artifacts[3]}
              onStatChange={handleStatChange}
            />
            <ArtefactInput
              nom="Couronne"
              listStats={mainStatCouronne}
              selectedArtifact={artifacts[4]}
              onStatChange={handleStatChange}
            />
          </CardGroup>
          <Button onClick={() => onCalculateBuildClick()}>Calculer</Button>
        </Form>
        <Row xs={5}>
          {Object.entries(listArtifact).map((artifactContainer,index) => {
            let order;
            switch (artifactContainer[0]) {
              case "flower":
                order = {order: 'first'};
                break;
              case "plume":
                order = {order: '2'};
                break;
              case "sands":
                order = {order: '3'};
                break;
              case "goblet":
                order = {order: '4'};
                break;
              case "circlet":
                order = {order: 'last'};
                break;
              default:
                break;
            }

            return (
              <Col key={artifactContainer[0]+index} xs={order} className="padding-left-1rem">
                {artifactContainer[1].map((artifact,index) => {
                  //console.log("artifactContainer",artifactContainer[1]);
                  console.log("artifact",artifact);
                  if(index == 0){
                    return <ArtefactCard key={artifact.Id} artifact={artifact}/>
                  }else{
                    return <ArtefactCardCollapse key={artifact.Id} artifact={artifact}/>
                  }
                })}
              </Col>
            )
          })}
        </Row>
      </Container>
    </PageLayout>
  );
}
