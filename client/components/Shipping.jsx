/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable lines-between-class-members */
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Button = styled.button`
border: none;
padding: 0;
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
color: rgb(51, 51, 51);
text-decoration: underline;
cursor: pointer;
`;
const Country = styled.div`
padding: 10px
`;
const Zip = styled.div`
padding: 10px
`;
const Flexrow = styled.div`
  display: flex;
  justify-content: left;
`;
const Divider = styled.div`
border-bottom: 1px solid #E1E3DF;
width: 100%;
`;
const ShippingFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
padding-top: 6px;
`;
const StandFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
font-weight: 500;
color: rgb(51, 51, 51);
`;
const LocFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
color: rgb(51, 51, 51);
`;
const VertPadd = styled.div`
padding: 5px 0px 5px 0px;
`;
const CountryZipFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 12px;
font-weight: 500;
color: rgb(51, 51, 51);
`;

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedShipCost: false,
      clickedShopPol: false,
    };
  }
  clickShippingCost() {
    this.setState({
      clickedShipCost: true,
    });
  }
  clickModalX() {
    const toggleShopPol = !this.state.clickedShopPol;
    this.setState({
      clickedShopPol: toggleShopPol,
    });
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { shippingTime, shippingLoc, sellerName, countryList } = this.props;
    const { clickedShipCost, clickedShopPol } = this.state;
    const sortedCountryList = countryList.sort().filter((el, idx, arr) => {
      return arr.indexOf(el) === idx;
    });
    let country = null;
    let zip = null;
    if (clickedShipCost) {
      country = (
        <div>
          <CountryZipFont>Country</CountryZipFont>
          <select>
            {sortedCountryList.map((nation, idx) => <option key={idx}>{nation}</option>)}
          </select>
        </div>

      );
      zip = (
        <div>
          <CountryZipFont>Zip or postal code</CountryZipFont>
          <input />
        </div>
      );
    }
    let shopPol = null;
    if (clickedShopPol) {
      shopPol = (
        <Modal sellerName={sellerName} clickModalX={this.clickModalX.bind(this)} />
      );
    }
    return (
      <Divider>
        <VertPadd>
          <ShippingFont>Shipping & Policies</ShippingFont>
        </VertPadd>
        <VertPadd>
          <StandFont>{shippingTime}</StandFont>
        </VertPadd>
        <VertPadd>
          <LocFont>{`From ${shippingLoc.country}`}</LocFont>
        </VertPadd>
        <div>
          <Button onClick={() => this.clickShippingCost()}>Get shipping cost</Button>
        </div>
        <Flexrow>
          <Country>
            {country}
          </Country>
          <Zip>
            {zip}
          </Zip>
        </Flexrow>
        <Button onClick={() => this.clickModalX()}>View shop policies</Button>
        <div style={{ padding: '6px' }} />
        <div>
          {shopPol}
        </div>
      </Divider>
    );
  }
}

export default Shipping;
