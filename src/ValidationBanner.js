import React from 'react';
import PropTypes from 'prop-types';
import './ValidationBanner.css';

const MIN_TEXT_LENGTH = 5;

function ValidationBanner(props) {
  return (
    <div className="validation-banner">
      Text {props.textLength >= MIN_TEXT_LENGTH ? 'long enough' : 'too short'}
    </div>
  );
}

ValidationBanner.propTypes = {
  textLength: PropTypes.number.isRequired,
};

export default ValidationBanner;