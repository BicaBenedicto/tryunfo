import React from 'react';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="card">
        <span data-testid="name-card" className="name-card">{cardName}</span>
        <img
          data-testid="image-card"
          className="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <span
          data-testid="description-card"
          className="description-card"
        >
          {cardDescription}
        </span>
        <div>
          <span
            data-testid="attr1-card"
            className="attr-card"
          >
            {cardAttr1}
          </span>
          <span
            data-testid="attr2-card"
            className="attr-card"
          >
            {cardAttr2}
          </span>
          <span
            data-testid="attr3-card"
            className="attr-card"
          >
            {cardAttr3}
          </span>
        </div>
        <span data-testid="rare-card" className="rare-card">{cardRare}</span>
        {
          (cardTrunfo === true)
          && <span data-testid="trunfo-card" className="trunfo-card">Super Trunfo</span>
        }
      </section>
    );
  }
}

export default Card;
