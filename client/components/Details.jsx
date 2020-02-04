/* eslint-disable react/no-array-index-key */
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
const Divider = styled.div`
width: 100%;
border-bottom: 1px solid #E1E3DF;
`;
const Hand = styled.img`
content: url(${imgHand});
width: 20px;
height: 20px;
`;
const VertPadd = styled.div`
padding: 6px 0px 6px 0px;
`;
const ItemDetails = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
padding-top: 6px;
`;
const SpecText = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
font-weight: 300;
color: rgb(34, 34, 34);
`;
const Button = styled.button`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 12px;
font-weight: 500;
border-radius: 10px 10px 10px 10px;
border: none;
outline: none;
:hover {
  background-color: rgb(0,0,0, 0.1);
  }
`;
const TextFade = styled.div`
box-shadow: 0 -5px 50px 50px #fff;
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
    const specVals = Object.values(itemSpecs);
    let item = null;
    if (clicked) {
      item = (
        <div>
          {specVals.map((spec, idx) => <p key={idx}>{spec}</p>)}
        </div>
      );
    } else {
      item = (
        <div>
          {/* {specVals.map((spec, idx) => <p key={idx}>{spec}</p>).slice(0, 4)} */}
          <p>{specVals[0]}</p>
          <p>{specVals[1]}</p>
          <p style={{ color: 'rgb(0,0,0, 0.6)' }}>{specVals[2]}</p>
          <p style={{ color: 'rgb(0,0,0, 0.3)' }}>{specVals[3]}</p>
          <p style={{ color: 'rgb(0,0,0, 0.1)' }}>{specVals[4]}</p>
        </div>
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
      <Divider>
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
          {item}
        </SpecText>
        <SpecText>
          <Button type="submit" onClick={() => this.clickLearnMore()}>{button}</Button>
          <VertPadd />
        </SpecText>
      </Divider>
    );
  }
}

export default Details;
