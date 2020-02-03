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
const ShippingFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
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
padding-top: 5px;
padding-bottom: 5px;
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
    const { shippingTime, shippingLoc, sellerName } = this.props;
    const { clickedShipCost, clickedShopPol } = this.state;
    let country = null;
    let zip = null;
    if (clickedShipCost) {
      country = (
        <div>
          <CountryZipFont>Country</CountryZipFont>
          <select>
            <option>United States</option>
            <option>Germany</option>
            <option>Canada</option>
            <option>Australia</option>
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
      <div>
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
        <div>
          <Flexrow>
            <Country>
              {country}
            </Country>
            <Zip>
              {zip}
            </Zip>
          </Flexrow>
        </div>
        <Button onClick={() => this.clickModalX()}>View shop policies</Button>
        <div>
          {shopPol}
        </div>
      </div>
    );
  }
}

export default Shipping;

// Shop policies for WeaponHouse
// Last updated on
// Payments
//  Secure options

// Accepts Etsy Gift Cards and Etsy Credits
// Etsy keeps your payment information secure. Etsy shops never receive your credit card information.
