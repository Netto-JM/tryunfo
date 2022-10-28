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
      </form>
    );
  }
}

export default Form;
