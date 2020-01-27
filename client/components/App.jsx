import React from 'react';
import axios from 'axios';
import Item from './Item';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const queryString = window.location.search;
    const id = queryString.slice(1);
    axios.get(`/${id}`)
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log('state', this.state.data);
    const doc = this.state.data;
    return (
      <div>
        <Item sellerName={doc.sellerName} itemDesc={doc.itemDescription} itemPrice={doc.itemPrice} />
      </div>
    );
  }
}

export default App;
