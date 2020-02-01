/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable lines-between-class-members */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: none!important;
border: none;
padding: 0!important;
/*optional*/
font-family: arial, sans-serif;
/*input has OS specific font-family*/
color: black;
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
const Modal = styled.div`
width: 500px;
background: white;
border: 1px;
transition: 1.1s ease-out;
box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
filter: blur(0);
transform: scale(1);
opacity: 1;
visibility: visible;
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
  clickShopPolicies() {
    const toggle = !this.state.clickedShopPol;
    this.setState({
      clickedShopPol: toggle,
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
          <div>Country</div>
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
          <div>Zip or postal code</div>
          <input />
        </div>
      );
    }
    let shopPol = null;
    if (clickedShopPol) {
      shopPol = (
        <div>
          <h4>{`Shop policies for ${sellerName}`}</h4>
          <p>Last updated on</p>
          <h3>Payments</h3>
          <b>Secure options</b>
          <p>Etsy keeps your payment information secure. Etsy shops never receive your credit card information.</p>
        </div>
      );
    }
    return (
      <div>
        <h3>Shipping & Policies</h3>
        <div><b>{shippingTime}</b></div>
        <div>{`From ${shippingLoc}`}</div>
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
        <Button onClick={() => this.clickShopPolicies()}>View shop policies</Button>
        <div>
          <Modal>
            {shopPol}
          </Modal>
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
