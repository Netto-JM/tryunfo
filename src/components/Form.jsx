import React, { Component } from 'react';
import Input from './Input';

/* um campo do tipo number que contenha o atributo data-testid="attr1-input". Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

um campo do tipo number que contenha o atributo data-testid="attr2-input". Este campo será usado para inserir o segundo atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

um campo do tipo number que contenha o atributo data-testid="attr3-input". Este campo será usado para inserir o terceiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

um campo do tipo text que contenha o atributo data-testid="image-input". Este campo será usado para inserir o caminho para imagem da carta. */

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
      </form>
    );
  }
}

export default Form;
