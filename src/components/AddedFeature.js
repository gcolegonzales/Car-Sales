import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/myActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature.id)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {
  removeFeature
}

export default connect(null, mapDispatchToProps)(AddedFeature);
