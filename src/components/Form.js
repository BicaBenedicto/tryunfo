import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            id="name-input"
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            name="name"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            id="description-input"
            data-testid="description-input"
            type="text"
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo1:
          <input
            id="attr1-input"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="attr1"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo2:
          <input
            id="attr2-input"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="attr2"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo3:
          <input
            id="attr3-input"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="attr3"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            name="image"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="rare"
          >
            <option name="normal" value="normal">Normal</option>
            <option name="raro" value="raro">Raro</option>
            <option name="muito-raro" value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            id="trunfo-input"
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="trunfo"
          />
        </label>
        <button
          id="save-button"
          data-testid="save-button"
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
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
};

export default Form;
