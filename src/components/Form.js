import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input id="name-input" data-testid="name-input" type="text" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea id="description-input" data-testid="description-input" type="text" />
        </label>
        <label htmlFor="attr1-input">
          Atributo1:
          <input id="attr1-input" data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="attr2-input">
          Atributo2:
          <input id="attr2-input" data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="attr3-input">
          Atributo3:
          <input id="attr3-input" data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input id="image-input" data-testid="image-input" type="text" />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select id="rare-input" data-testid="rare-input">
            <option name="normal" value="normal">Normal</option>
            <option name="raro" value="raro">Raro</option>
            <option name="muito-raro" value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input id="trunfo-input" data-testid="trunfo-input" type="checkbox" />
        </label>
        <button id="save-button" data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
