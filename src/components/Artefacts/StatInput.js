import PropTypes from "prop-types"
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function StatInput({ nom, id, listStats, selectedStat, onStatChange }) {
  //const [selectedStats, setSelectedStats] = useState('');
  //const stat = listStat.map((stat) => stat);
  //console.log("stat",stat);
  //console.log("listStats",listStats);

  const handleStatChange = (e) => {
    onStatChange(nom,e.target.value);
    /*console.clear(),*/ console.log(e.target.value) ,console.log("selectedStat",selectedStat);
  };

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{nom}</Form.Label>
      <Form.Select onChange={e => handleStatChange(e)}>
        {listStats.map((stat) => {
          return (
            <option key={stat.value} value={stat.value}>
              {stat.label}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
}

StatInput.propTypes = {
  id: PropTypes.any,
  listStats: PropTypes.shape({
    map: PropTypes.func
  }),
  nom: PropTypes.any,
  onStatChange: PropTypes.func,
  selectedStat: PropTypes.any
}

export default StatInput;