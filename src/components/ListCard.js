import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListCard extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: 'todas',
      trunfo: false,
    };
    this.removeButton = this.removeButton.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  removeButton(event) {
    event.target.parentNode.remove();
    const { checkHasTrunfo } = this.props;
    checkHasTrunfo();
  }

  render() {
    const { cards } = this.props;
    const { filter, trunfo } = this.state;
    console.log(cards);
    return (
      <section className="list-card">
        <div className="list-filter">
          <input
            data-testid="name-filter"
            className="filter"
            placeholder="Nome carta"
            onChange={ this.handleFilterChange }
          />
          <select
            data-testid="rare-filter"
            className="filter"
            onChange={ this.handleFilterChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        { (filter !== 'todas')
          ? (cards.filter((card) => (card.nameCard.includes(filter)
            || card.rare === filter))
            .map((card) => (
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
            )))
          : (cards.filter((card) => {
            if (trunfo) return card.trunfo === trunfo;
            return card;
          }).map((card) => (
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
          )))}
      </section>
    );
  }
}

ListCard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkHasTrunfo: PropTypes.func.isRequired,
};

export default ListCard;
