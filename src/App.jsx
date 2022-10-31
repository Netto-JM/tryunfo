import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  validateAttributes = (attr1, attr2, attr3) => {
    const MAXTOTAL = 210;
    const MAXATTR = 90;
    if (attr1 + attr2 + attr3 > MAXTOTAL) return false;
    const biggestAttr = Math.max(attr1, attr2, attr3);
    const smallestAttr = Math.min(attr1, attr2, attr3);
    return biggestAttr <= MAXATTR && smallestAttr >= 0;
  };

  validateForm = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
    } = this.state;
    const isNotEmpty = !!(name && description && image);
    const isValidAttrs = this.validateAttributes(+attr1, +attr2, +attr3);
    const isValidForm = isNotEmpty && isValidAttrs;
    this.setState({
      isSaveButtonDisabled: !(isValidForm),
    });
  };

  onInputChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = (type === 'checkbox') ? checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateForm);
  };

  resetState = () => {
    this.setState({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  setHasTrunfo = () => {
    this.setState({
      hasTrunfo: true,
    });
  };

  saveCard = () => {
    const {
      name,
      description,
      image,
      rarity,
      trunfo,
      hasTrunfo,
      attr1,
      attr2,
      attr3,
    } = this.state;
    if (trunfo && !hasTrunfo) this.setHasTrunfo();
    const newCard = {
      name,
      description,
      image,
      rarity,
      trunfo,
      attr1,
      attr2,
      attr3,
    };
    this.setState((prevState) => ({
      deck: [...prevState.deck, newCard],
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.saveCard();
    this.resetState();
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          onInputChange={ this.onInputChange }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
        <Deck deck={ deck } />
      </div>
    );
  }
}

export default App;
