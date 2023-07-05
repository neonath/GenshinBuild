import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ArtefactCardCollapse(artifactContainer) {
  const artifact = artifactContainer.artifact;
  let rarityIcon;
  switch (artifact.rarity) {
    case 3:
      rarityIcon = 
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
      </span>
      break;
    
    case 4:
      rarityIcon = 
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
      </span>
      break;
    
    case 5:
      rarityIcon = 
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
        <FontAwesomeIcon icon={faStar} className="text-warning" />
      </span>
      break;
    default:
      break;
  }

  return (
    <Card className={"artifact stars-"+artifact.rarity}>
      <div className="set-name artifact-collapse flex-row justify-content-between">
        <div className='text-white'>{artifact.name}</div>
        <div className='flex'>
          <div className="artefact-main-stat">+{artifact.mainStatValue}</div>
          <div className="badge bg-dark margin-left-1rem align-self-center">+{artifact.level}</div>
        </div>
      </div>
    </Card>
  );
}