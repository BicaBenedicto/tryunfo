import React from 'react';
import PropTypes from 'prop-types';
import SuperTrunfo from './SuperTrunfo';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <form className='m-10 p-10 bg-green-300 flex flex-col align-middle rounded-3xl shadow-2xl justify-around'>
        <label htmlFor="name-input" className='p-3 flex flex-col'>
          Nome:
          <input
            id="name-input"
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            name="nameCard"
            className='m-2 rounded-lg'
          />
        </label>
        <label htmlFor="description-input" className='p-3 flex flex-col'>
          Descrição:
          <textarea
            id="description-input"
            data-testid="description-input"
            type="text"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
            className='m-2 rounded-lg'
          />
        </label>
        <div className='p-3 flex flex-row'>
          <label htmlFor="attr1-input" className='p-3 flex flex-col'>
            Atributo 1
            <input
              id="attr1-input"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="attr1"
              min="0"
              max="90"
              className='m-2 rounded-lg text-center'
            />
          </label>
          <label htmlFor="attr2-input" className='p-3 flex flex-col'>
            Atributo 2
            <input
              id="attr2-input"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="attr2"
              min="0"
              max="90"
              className='m-2 rounded-lg text-center'
            />
          </label>
          <label htmlFor="attr3-input" className='p-3 flex flex-col'>
            Atributo 3
            <input
              id="attr3-input"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="attr3"
              min="0"
              max="90"
              className='m-2 rounded-lg text-center'
            />
          </label>
        </div>
        <label htmlFor="image-input" className='p-3 flex flex-col'>
          Imagem:
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            name="image"
            className='m-2 rounded-lg'
          />
        </label>
        <label htmlFor="rare-input" className='p-3 flex flex-col'>
          Raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="rare"
            className='m-2 rounded-lg text-center'
          >
            <option name="normal" value="normal">Normal</option>
            <option name="raro" value="raro">Raro</option>
            <option name="muito-raro" value="muito raro">Muito Raro</option>
          </select>
        </label>
        {
          (!hasTrunfo)
            ? <SuperTrunfo cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
            : <span className='m-2 rounded-lg text-center'>Você já tem um Super Trunfo em seu baralho</span>
        }
        <button
          id="save-button"
          data-testid="save-button"
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          className='m-10 font-bold text-white bg-yellow-700 shadow-2xl rounded-3xl py-4'
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
