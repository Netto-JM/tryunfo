import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  render() {
    const { deck, onDeleteButtonClick } = this.props;
    return (
      <div>
        {deck.map((card, index) => (
          <div key={ card.name + index }>
            <Card
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardRare={ card.rarity }
              cardTrunfo={ card.trunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => onDeleteButtonClick(card) }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Deck;
