import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListCard extends React.Component {
  constructor() {
    super();

    this.removeButton = this.removeButton.bind(this);
  }

  removeButton(event) {
    event.target.parentNode.remove();
    const { checkHasTrunfo } = this.props;
    checkHasTrunfo();
  }

  render() {
    const { cards } = this.props;
    return (
      <section className="list-card">
        {cards.map((card) => (
          <div key={ card.nameCard } className="card">
            <Card
              cardName={ card.nameCard }
              cardDescription={ card.description }
              cardImage={ card.image }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
            />
            <button
              data-testid="delete-button"
              className="delete-button"
              type="button"
              onClick={ this.removeButton }
            >
              Excluir carta
            </button>
          </div>
        ))}
      </section>
    );
  }
}

ListCard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkHasTrunfo: PropTypes.func.isRequired,
};

export default ListCard;
