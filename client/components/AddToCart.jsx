
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bell from '../svgs/bell';

const Button = styled.button`
  background: black;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 15px;
  font-stretch: 100%;
  font-weight: 700;
  line-height: 18px;
  padding: 8px 12px 8px 12px;
  border-radius: 3px 3px 3px 3px;
  width: 100%;
  color: white;
  box-sixing: border-box;
`;

const DropDown = styled.select`
  option {
    text-align: center;
  }
`;
const VertPadd = styled.div`
  padding: 6px 0px 6px 0px;
`;
const MainPadd = styled.div`
  padding-bottom: 12px;
`;
const EndPadd = styled.div`
  padding: 6px 0px 2px 0px;
`;
const FlexRow = styled.div`
display: flex;
justify-content: flex-start;
`;
const Text = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 13px;
`;


const AddToCart = ({ quantityLeft, watchList }) => {
  const optionArrayBuilder = () => {
    const result = [];
    for (let i = 1; i <= quantityLeft; i += 1) {
      result.push(<option key={i}>{i}</option>);
    }
    return result;
  };

  return (
    <MainPadd>
      <VertPadd>
        <Text>
          <div>Quantity</div>
        </Text>
      </VertPadd>
      <VertPadd>
        <div>
          <DropDown>
            {optionArrayBuilder()}
          </DropDown>
        </div>
      </VertPadd>
      <VertPadd>
        <Button>Add to cart</Button>
      </VertPadd>
      <FlexRow>
        <VertPadd>
          {bell}
        </VertPadd>
        <EndPadd>
          <div>
            <Text>
              <b>{'Don\'t miss out.'}</b>
              {
                `There's only ${quantityLeft} available and ${watchList}
                other people have this in their cart right now.`
              }
            </Text>
          </div>
        </EndPadd>
      </FlexRow>
    </MainPadd>

  );
};

AddToCart.propTypes = {
  quantityLeft: PropTypes.number,
  watchList: PropTypes.number,
};
AddToCart.defaultProps = {
  quantityLeft: 0,
  watchList: 0,
};

export default AddToCart;
