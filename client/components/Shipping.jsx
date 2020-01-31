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
color: #069;
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

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  clickShippingCost() {
    this.setState({
      clicked: true,
    });
  }
  render() {
    const { shippingTime, shippingLoc } = this.props;
    const { clicked } = this.state;
    let country = null;
    let zip = null;
    if (clicked) {
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
      </div>
    );
  }
}

export default Shipping;
