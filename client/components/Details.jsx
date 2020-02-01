/* eslint-disable spaced-comment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import imgHand from './assets/etsy_hand.png';

const Flexrow = styled.div`
  display: flex;
  justify-content: left;
`;
const Hand = styled.img`
content: url(${imgHand});
width: 20px;
height: 20px;
`;
const VertPadd = styled.div`
padding-top: 6px;
padding-bottom: 6px;
`;
const ItemDetails = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
`;
const SpecText = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
font-weight: 300;
color: rgb(34, 34, 34);
`;

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
        <SpecText>
          <p>{itemSpecs.materialA}</p>
          <p>{itemSpecs.materialB}</p>
          <p>{itemSpecs.materialC}</p>
          <p>{itemSpecs.materialD}</p>
        </SpecText>
      );
    } else {
      item = (
        <SpecText>
          <p>{itemSpecs.materialA}</p>
          <p>{itemSpecs.materialB}</p>
        </SpecText>
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
        <VertPadd>
          <ItemDetails>Item Details</ItemDetails>
        </VertPadd>
        <VertPadd>
          <Flexrow>
            <Hand />
            <SpecText>
              Handmade
            </SpecText>
          </Flexrow>
        </VertPadd>
        <SpecText>
          <p>
            {itemSpecs.cm}
            cm
          </p>
        </SpecText>
        <div>
          {item}
        </div>
        <SpecText>
          <button type="submit" onClick={() => this.clickLearnMore()}>{button}</button>
        </SpecText>
      </div>
    );
  }
}

export default Details;
