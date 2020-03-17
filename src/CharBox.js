import React from 'react';
import PropTypes from 'prop-types';
import './CharBox.css';

function CharBox(props) {
  return (
    <div className="char-box">
      <p>{props.char}</p>
    </div>
  );
}

CharBox.propTypes = {
  char: PropTypes.string.isRequired,
};

export default CharBox;