import React from 'react';
import PropTypes from 'prop-types';
import './CharBox.css';

function CharBox(props) {

  function handleRemoveChar(e) {
    props.handleRemoveChar(props.uuid);
  }

  return (
    <div className="char-box" onClick={handleRemoveChar}>
      <p>{props.char}</p>
    </div>
  );
}

CharBox.propTypes = {
  char: PropTypes.string.isRequired,
  handleRemoveChar: PropTypes.func.isRequired,
};

export default CharBox;