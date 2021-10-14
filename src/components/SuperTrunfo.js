import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
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
    );
  }
}

SuperTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
