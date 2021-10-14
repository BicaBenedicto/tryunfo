import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameCard: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.formsValidation = this.formsValidation.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, this.formsValidation);
  }

  validation(attributes, inputs) {
    const attrs = attributes.map((attribute) => Number(attribute));
    let validation;
    const maxTotalAttr = 210;
    let totalAttr = attrs[0] + attrs[1] + attrs[2];
    const maxAttr = 90;
    const minAttr = 0;

    if (inputs[0] && inputs[1] && inputs[2]) {
      validation = false;
    } else {
      return true;
    }

    if (totalAttr <= maxTotalAttr) {
      validation = false;
    } else {
      return true;
    }

    attrs.forEach((attr) => {
      totalAttr += attr;
      if (attr >= minAttr && attr <= maxAttr) {
        return false;
      }
      validation = true;
    });

    return validation;
  }

  formsValidation() {
    const { nameCard, description, image, attr1, attr2, attr3 } = this.state;
    const attributes = [attr1, attr2, attr3];
    const inputs = [nameCard, description, image];
    this.setState({
      isSaveButtonDisabled: this.validation(attributes, inputs),
    });
  }

  render() {
    const { nameCard, description, image, attr1, attr2, attr3, rare,
      trunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameCard }
          cardDescription={ description }
          cardImage={ image }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ nameCard }
          cardDescription={ description }
          cardImage={ image }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
