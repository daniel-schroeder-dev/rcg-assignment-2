import React from 'react';
import PropTypes from 'prop-types';
import './ValidationBanner.css';

function ValidationBanner(props) {
  return (
    <div className="validation-banner">
      Text Too Something
    </div>
  );
}

ValidationBanner.propTypes = {
  textLength: PropTypes.number.isRequired,
};

export default ValidationBanner;