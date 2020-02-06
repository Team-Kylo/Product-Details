
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pin from '../svgs/pin';

const FlexRow = styled.div`
display: flex;
justify-content: flext-start;
padding-top: 6px;
`;
const Divider = styled.div`
border-bottom: 1px solid #E1E3DF;
width: 100%;
`;
const Avatar = styled.img`
content: url(${(props) => props.avatar});
width: 75px;
height: 75px;
border-radius: 50%;
margin-right: 5px;
padding-bottom: 6px;
`;

const MeetSellerFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
margin-right: 5px;
padding: 6px 0px 6px 0px;
`;
const SellerFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
font-weight: 500;
color: rgb(51, 51, 51);
`;
const ResponseFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
color: rgb(51, 51, 51);
padding: 8px 0px 8px 0px;

`;
const Locfont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 13px;
color: #757575;
padding-top: 3px;
`;

const SellerButton = styled.button`
border: none;
padding: 0;
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
text-decoration: underline;
cursor: pointer;
`;
const MessageButton = styled.button`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
font-weigth: 500;
background-color: #f9f9f7;
border-color: rgba(0, 0, 0, 0.2);
color: #222;
:hover {
  background-color: rgb(0,0,0, 0.1);
  }
`;
const PinDiv = styled.div`
width: 24px;
height: 24px;
`;

const MeetSeller = ({ sellerName, shippingLoc, avatarURL }) => (
  (
    <Divider>
      <FlexRow>
        <MeetSellerFont>
          Meet
        </MeetSellerFont>
        <SellerButton>
          {sellerName}
        </SellerButton>
      </FlexRow>
      <FlexRow>
        <Avatar avatar={avatarURL} />
        <SellerFont>
          {sellerName}
          <FlexRow>
            <PinDiv>
              {pin}
            </PinDiv>
            <Locfont>
              {`${shippingLoc.city}, ${shippingLoc.country}`}
            </Locfont>
          </FlexRow>
        </SellerFont>
      </FlexRow>
      <MessageButton>{`Message ${sellerName}`}</MessageButton>
      <ResponseFont>
        This seller usually responds within
        <b>a few hours.</b>
      </ResponseFont>
    </Divider>
  )
);

MeetSeller.propTypes = {
  sellerName: PropTypes.string,
  shippingLoc: PropTypes.objectOf(PropTypes.string),
  avatarURL: PropTypes.string,
};
MeetSeller.defaultProps = {
  sellerName: '',
  shippingLoc: {},
  avatarURL: '',
};

export default MeetSeller;
