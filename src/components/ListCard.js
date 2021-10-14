import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListCard extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <section className="list-card">
        {cards.map((card) => (
          <Card
            key={ card.nameCard }
            cardName={ card.nameCard }
            cardDescription={ card.description }
            cardImage={ card.image }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardRare={ card.rare }
            cardTrunfo={ card.trunfo }
          />
        ))}
      </section>
    );
  }
}

ListCard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCard;
