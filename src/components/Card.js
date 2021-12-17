import React from 'react';
import PropTypes from 'prop-types';
import timeToDuel from '../imgs/duel.jpg';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="card m-10 p-10 rounded-3xl flex flex-col align-middle justify-start">
        <span data-testid="name-card" className="name-card text-2xl text-center my-3">{cardName}</span>
        <img
          data-testid="image-card"
          className="image-card w-full p-2 border-black my-3"
          src={ cardImage ? cardImage : timeToDuel }
          alt={ cardName }
        />
        <span
          data-testid="description-card"
          className="description-card my-3 h-1/4"
        >
          {cardDescription}
        </span>
        <div className='flex flex-row align-middle justify-between'>
          <span
            data-testid="attr1-card"
            className="attr-card p-2 text-red-600 border-indigo-900 rounded-xl"
          >
            {cardAttr1}
          </span>
          <span
            data-testid="attr2-card"
            className="attr-card p-2 text-green-500 border-indigo-900 rounded-xl"
          >
            {cardAttr2}
          </span>
          <span
            data-testid="attr3-card"
            className="attr-card p-2 text-blue-600 border-indigo-900 rounded-xl"
          >
            {cardAttr3}
          </span>
        </div>
        <span data-testid="rare-card" className="rare-card text-center m-3 font-bold">{cardRare}</span>
        {
          (cardTrunfo === true)
          && <span data-testid="trunfo-card" className="trunfo-card star text-center">{' '}</span>
        }
        <br />
        <br />
        <br />
        <br />
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
