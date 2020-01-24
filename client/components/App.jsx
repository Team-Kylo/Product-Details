import React from 'react';
import axios from 'axios';


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
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map((doc) => <div>{doc.sellerName}</div>)}
      </div>
    )
  }
}

export default App;






