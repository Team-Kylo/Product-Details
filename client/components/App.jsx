import React from 'react';
import axios from 'axios';
import Item from './Item.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('/items')
      .then((data) => {
        this.setState({
          data: data.data
        })
      })
      .catch((err) => {
        console.log(err);
      })

  }

  render() {
    var first5 = this.state.data.slice(0, 5);
    // var firstDoc = this.state.data[0];
    console.log(this.state.data);
    return (
      <div>
        {first5.map((doc) => <Item key={doc.id} sellerName={doc.sellerName} itemDesc={doc.itemDescription} itemPrice={doc.itemPrice} />)}
      </div>
    )
  }
}

export default App;






