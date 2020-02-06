
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';
import Details from './Details';
import Shipping from './Shipping';
import MeetSeller from './MeetSeller';

const FlexPage = styled.div`
display: flex;
width: 100%;
`;

const Main = styled.div`
display: flex;
flex-direction: column;
justify-conent: flex-end;
align-items: flex-end;
width: 300px;
`;

class DetailsApp extends React.Component {
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
    const { id } = this.props;
    axios.get(`/details/${id}`)
      .then((data) => {
        cb(data.data);
      });
  }

  render() {
    const { mount } = this.state;
    if (mount) {
      const { data } = this.state;
      return (
        <Main>
          <FlexPage>
            <Item
              className="item"
              sellerName={data.sellerName}
              itemDesc={data.itemDescription}
              itemPrice={data.itemPrice}
              sellerRating={data.rating}
              reviewCount={data.reviewCount}
              watchList={data.watchList}
              quantityLeft={data.quantity}
            />
          </FlexPage>
          <FlexPage>
            <Details
              itemSpecs={data.itemSpecs}
            />
          </FlexPage>
          <FlexPage>
            <Shipping
              sellerName={data.sellerName}
              shippingLoc={data.shippingLoc}
              shippingTime={data.shippingTime}
              countryList={data.countryList}
            />
          </FlexPage>
          <FlexPage>
            <MeetSeller
              sellerName={data.sellerName}
              shippingLoc={data.shippingLoc}
              avatarURL={data.avatar}
            />
          </FlexPage>
        </Main>
      );
    }
    return null;
  }
}

DetailsApp.propTypes = {
  id: PropTypes.string,
};
DetailsApp.defaultProps = {
  id: '',
};


export default DetailsApp;
