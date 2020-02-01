/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Item from './Item';
import Details from './Details';
import Shipping from './Shipping';


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
      const doc = data;
      return (
        <div>
          <div>
            <Item
              className="item"
              sellerName={doc.sellerName}
              itemDesc={doc.itemDescription}
              itemPrice={doc.itemPrice}
            />
          </div>
          <div>
            <p>__________________________________________________________________________</p>
          </div>
          <div>
            <Details
              itemSpecs={data.itemSpecs}
              className="details"
            />
          </div>
          <div>
            <p>__________________________________________________________________________</p>
          </div>
          <div>
            <Shipping shippingLoc={data.shippingLoc} shippingTime={data.shippingTime} />
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
