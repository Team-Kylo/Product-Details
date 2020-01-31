/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      buttonText: false,
    };
  }

  clickLearnMore() {
    const toggled = !this.state.buttonText;
    this.setState({
      clicked: true,
      buttonText: toggled,
    });
  }

  render() {
    const { itemSpecs } = this.props;
    const { clicked, buttonText } = this.state;
    let item = null;
    if (clicked) {
      item = (
        <form>
          <p>{itemSpecs.materialC}</p>
          <p>{itemSpecs.materialD}</p>
        </form>
      );
    } else {
      item = null;
    }
    let button = '';
    if (buttonText) {
      button = 'Less';
    } else {
      button = 'Learn More About This Item';
    }

    return (
      <div>
        <h4>Item Details</h4>
        <p>Handmade</p>
        <p>
          {itemSpecs.cm}
          cm
        </p>
        <p>{itemSpecs.materialA}</p>
        <p>{itemSpecs.materialB}</p>
        <div>
          {item}
        </div>
        <button type="submit" onClick={() => this.clickLearnMore()}>{button}</button>
      </div>
    );
  }
}

export default Details;
