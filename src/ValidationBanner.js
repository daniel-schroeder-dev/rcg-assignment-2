import React from 'react';
import PropTypes from 'prop-types';
import './ValidationBanner.css';

const MIN_TEXT_LENGTH = 5;

function ValidationBanner(props) {

  function setTextStyle() {
    return {
      color: props.textLength >= MIN_TEXT_LENGTH ? 'green' : 'red',
    };
  }

  return (
    <div className="validation-banner" style={setTextStyle()}>
      Text {props.textLength >= MIN_TEXT_LENGTH ? 'long enough' : 'too short'}
    </div>
  );
  
}

ValidationBanner.propTypes = {
  textLength: PropTypes.number.isRequired,
};

export default ValidationBanner;