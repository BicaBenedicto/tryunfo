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

  formsValidation() {
    const { nameCard, description, image, attr1, attr2, attr3 } = this.state;
    const Attr1 = Number(attr1);
    const Attr2 = Number(attr2);
    const Attr3 = Number(attr3);
    const maxTotalAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const totalAttr = (Attr1 + Attr2 + Attr3);
    let validation = false;
    if (nameCard) {
      validation = false;
      if (description) {
        validation = false;
        if (!image) {
          validation = true;
        } else {
          validation = false;
          if (Attr1 <= maxAttr && Attr1 >= minAttr) {
            validation = false;
            if (Attr2 <= maxAttr && Attr2 >= minAttr) {
              validation = false;
              if (Attr3 <= maxAttr && Attr3 >= minAttr) {
                validation = false;
                if (totalAttr <= maxTotalAttr) {
                  validation = false;
                } else {
                  validation = true;
                }
              } else {
                validation = true;
              }
            } else {
              validation = true;
            }
          } else {
            validation = true;
          }
        }
      } else {
        validation = true;
      }
    } else {
      validation = true;
    }
    this.setState({
      isSaveButtonDisabled: validation,
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
