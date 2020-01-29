import React from 'react';
import axios from 'axios';
import Item from './Item';
import Details from './Details';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    // const queryString = window.location.search;
    // const id = queryString.slice(1);
    const id = 1;
    axios.get(`/${id}`)
      .then((data) => {
        this.setState({
          data: data.data,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  render() {
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
          <p>---------------------------------</p>
        </div>
        <div>
          <Details
            className="details"
          />
        </div>
      </div>
    );
  }
}

export default App;
