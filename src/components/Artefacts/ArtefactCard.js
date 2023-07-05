import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ArtefactCard(artifactContainer) {
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
      <Card.Header className="set-name text-white">{artifact.name}</Card.Header>
      <div className="artifact-main-info text-white">
        <div className="artifact-main-info-content ps-3 min-height-150">
          <h6 className="mt-2">{artifact.slotKey}</h6>
          <img
            className="artifact-icon"
            src={artifact.iconUrl}
            alt={artifact.name}
          />
          <div className="margin-top-2">
            <div className="artefact-main-stat">{artifact.mainStatKey}</div>
            <h2>{artifact.mainStatValue}</h2>
            {rarityIcon}
          </div>
        </div>
      </div>
      <Card.Body className="artefact-sub-info">
        <span className="badge bg-dark mb-3">+{artifact.level}</span>
        <ul>
          {artifact.substats.map((substat,index) => {
            if(substat.key != null){
              return <Card.Text as="li" key={substat.key+index}>{substat.key} +{substat.value}</Card.Text>
            }
          })}
        </ul>
      </Card.Body>
      <Card.Footer className='padding-0'>
        <Accordion>
          <Accordion.Item eventKey='0' flush>
            <Accordion.Header>
              <div>{artifact.setKey}</div>
              <div className="badge bg-dark">2/4</div>
              <div className="badge bg-dark">4/4</div>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <Card.Text as="li">Set de 2 pièces: {artifact.twoSetEffect}</Card.Text>
                <Card.Text as="li">Set de 4 pièces: {artifact.fourSetEffect}</Card.Text>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Footer>
    </Card>
  );
}
