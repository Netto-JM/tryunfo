import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Filters extends Component {
  render() {
    const {
      nameFilter,
      rarityFilter,
      trunfoFilter,
      onInputChange,
      onUsingFilter,
    } = this.props;

    const changeHandler = (event) => {
      onInputChange(event);
      onUsingFilter();
    };
    return (
      <div>
        <Input
          labelFor="nameFilter"
          labelText="Filtrar por Nome"
          type="text"
          value={ nameFilter }
          onInputChange={ changeHandler }
          isDisabled={ trunfoFilter }
          testid="name-filter"
        />
        <label htmlFor="rarityFilter">
          <span>Filtrar por Raridade</span>
          <select
            name="rarityFilter"
            id="rarityFilter"
            value={ rarityFilter }
            onChange={ changeHandler }
            disabled={ trunfoFilter }
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
          <input
            type="checkbox"
            name="trunfoFilter"
            id="trunfo-filter"
            checked={ trunfoFilter }
            onChange={ changeHandler }
            data-testid="trunfo-filter"
          />
          <span>Super Trunfo</span>
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onUsingFilter: PropTypes.func.isRequired,
};

export default Filters;
