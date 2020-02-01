/* eslint-disable spaced-comment */
/* eslint-disable react/no-access-state-in-setstate */
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
    const toggleClicked = !this.state.clicked;
    const toggleButton = !this.state.buttonText;
    this.setState({
      clicked: toggleClicked,
      buttonText: toggleButton,
    });
  }

  render() {
    const { itemSpecs } = this.props;
    const { clicked, buttonText } = this.state;
    let item = null;
    if (clicked) {
      item = (
        <form>
          <p>{itemSpecs.materialA}</p>
          <p>{itemSpecs.materialB}</p>
          <p>{itemSpecs.materialC}</p>
          <p>{itemSpecs.materialD}</p>
        </form>
      );
    } else {
      item = (
        <form>
          <p>{itemSpecs.materialA}</p>
          <p>{itemSpecs.materialB}</p>
        </form>
      );
    }
    let button = '';
    if (buttonText) {
      button = 'Less';
    } else {
      button = 'Learn More About This Item';
    }
    ///////////////////////////////////////////////////////////////////////////////////
    return (
      <div>
        <h3>Item Details</h3>
        <p>Handmade</p>
        <p>
          {itemSpecs.cm}
          cm
        </p>
        {/* <p>{itemSpecs.materialA}</p>
        <p>{itemSpecs.materialB}</p> */}
        <div>
          {item}
        </div>
        <button type="submit" onClick={() => this.clickLearnMore()}>{button}</button>
      </div>
    );
  }
}

export default Details;
