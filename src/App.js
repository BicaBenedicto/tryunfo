import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked, type } = target;
    return this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  }

  render() {
    const { name, description, image, attr1, attr2, attr3, rare,
      trunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
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
          cardName={ name }
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
