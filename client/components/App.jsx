/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Item from './Item';
import Details from './Details';
import Shipping from './Shipping';
import MeetSeller from './MeetSeller';

const Divider = styled.div`
padding-top: 2px;
padding-bottom: 2px;
color: rgb(225, 227, 223);
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      mount: false,
    };
  }

  componentDidMount() {
    this.getDbData((dbData) => {
      console.log('db data', dbData);
      this.setState({
        data: dbData,
        mount: true,
      });
    });
  }

  getDbData(cb) {
    axios.get(`/${this.props.id}`)
      .then((data) => {
        cb(data.data);
      });
  }

  render() {
    if (this.state.mount) {
      const { data } = this.state;
      return (
        <div>
          <div>
            <Item
              className="item"
              sellerName={data.sellerName}
              itemDesc={data.itemDescription}
              itemPrice={data.itemPrice}
            />
          </div>
          <div>
            <Divider>________________________________________</Divider>
          </div>
          <div>
            <Details
              itemSpecs={data.itemSpecs}
              className="details"
            />
          </div>
          <div>
            <Divider>________________________________________</Divider>
          </div>
          <div>
            <Shipping sellerName={data.sellerName} shippingLoc={data.shippingLoc} shippingTime={data.shippingTime} />
          </div>
          <div>
            <Divider>________________________________________</Divider>
          </div>
          <div>
            <MeetSeller sellerName={data.sellerName} shippingLoc={data.shippingLoc} />
          </div>
          <div>
            <Divider>________________________________________</Divider>
          </div>
        </div>
      );
    } else {
      return (
        <div>Hello</div>
      );
    }
  }
}

export default App;
