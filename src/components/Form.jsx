import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form>
        <Input
          labelFor="name"
          labelText="Nome"
          type="text"
          testid="name-input"
        />
        <label htmlFor="description">
          <span>Descrição</span>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="33"
            data-testid="description-input"
          />
        </label>
        <Input
          labelFor="attr1"
          labelText="Attr01"
          type="number"
          testid="attr1-input"
        />
        <Input
          labelFor="attr2"
          labelText="Attr02"
          type="number"
          testid="attr2-input"
        />
        <Input
          labelFor="attr3"
          labelText="Attr03"
          type="number"
          testid="attr3-input"
        />
        <Input
          labelFor="card-image"
          labelText="Imagem"
          type="text"
          testid="image-input"
        />
        <label htmlFor="rarity">
          <span>Raridade</span>
          <select name="rarity" id="rarity" data-testid="rare-input">
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
            data-testid="trunfo-input"
          />
          <span>Super Trybe Trunfo</span>
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
