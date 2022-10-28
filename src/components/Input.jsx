import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { labelFor, labelText, type, testid, value, onInputChange } = this.props;
    return (
      <label htmlFor={ labelFor }>
        <span>{labelText}</span>
        <input
          type={ type }
          data-testid={ testid }
          id={ labelFor }
          name={ labelFor }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
