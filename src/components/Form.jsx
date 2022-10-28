import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          labelFor="name"
          labelText="Nome"
          type="text"
          value={ cardName }
          onInputChange={ onInputChange }
          testid="name-input"
        />
        <label htmlFor="description">
          <span>Descrição</span>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="33"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <Input
          labelFor="attr1"
          labelText="Attr01"
          type="number"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
          testid="attr1-input"
        />
        <Input
          labelFor="attr2"
          labelText="Attr02"
          type="number"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
          testid="attr2-input"
        />
        <Input
          labelFor="attr3"
          labelText="Attr03"
          type="number"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
          testid="attr3-input"
        />
        <Input
          labelFor="card-image"
          labelText="Imagem"
          type="text"
          value={ cardImage }
          onInputChange={ onInputChange }
          testid="image-input"
        />
        <label htmlFor="rarity">
          <span>Raridade</span>
          <select
            name="rarity"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
          <span>Super Trybe Trunfo</span>
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
