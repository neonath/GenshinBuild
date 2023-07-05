import React from 'react';
import { Card } from 'react-bootstrap';
import StatInput from './StatInput';

export default function ArtefactInput({ nom, listStats, selectedArtifact, onStatChange}) {
  //console.log("selectedStats",selectedStats);
  const subStats = [
    { label: '', value: ''},
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

  const handleStatChange = (statName,selectedStat) => {
    //console.log("statName",statName);
    //console.log("selectedStat",selectedStat);
    switch (statName) {
      case "Main Stat":
        selectedArtifact.mainStat = selectedStat;
        break;
      case "Substat 1":
        selectedArtifact.substats[0] = selectedStat;
        break;
      case "Substat 2":
        selectedArtifact.substats[1] = selectedStat;
        break;
      case "Substat 3":
        selectedArtifact.substats[2] = selectedStat;
        break;
      case "Substat 4":
        selectedArtifact.substats[3] = selectedStat;
        break;
      default:
        break;
    }
    onStatChange(selectedArtifact);
    console.log("selectedArtifact",selectedArtifact);
    //console.log("artefactInput SselectedStat",selectedStat);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <StatInput
          nom="Main Stat"
          id={'mainStat' + nom}
          listStats={listStats}
          selectedStat={selectedArtifact.mainStat}
          onStatChange={handleStatChange}
        />
        <StatInput
          nom="Substat 1"
          id={'Substat1' + nom}
          listStats={subStats}
          selectedStat={selectedArtifact.substats[0]}
          onStatChange={handleStatChange}
        />
        <StatInput
          nom="Substat 2"
          id={'Substat2' + nom}
          listStats={subStats}
          selectedStat={selectedArtifact.substats[1]}
          onStatChange={handleStatChange}
        />
        <StatInput
          nom="Substat 3"
          id={'Substat3' + nom}
          listStats={subStats}
          selectedStat={selectedArtifact.substats[2]}
          onStatChange={handleStatChange}
        />
        <StatInput
          nom="Substat 4"
          id={'Substat4' + nom}
          listStats={subStats}
          selectedStat={selectedArtifact.substats[3]}
          onStatChange={handleStatChange}
        />
      </Card.Body>
    </Card>
  );
}
