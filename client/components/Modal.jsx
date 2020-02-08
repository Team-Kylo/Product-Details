
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import paypal from '../svgs/paypal.svg';
import visa from '../svgs/visa.svg';
import amex from '../svgs/amex.svg';
import discover from '../svgs/discover.svg';
import gift from '../svgs/gift.svg';
import masterCardSvg from '../svgs/mc.svg';


const ModalDisplay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
display: block;
`;
const ModalBody = styled.div`
  position:fixed;
  background: white;
  width: 50%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;
const Header = styled.div`
background-color: #eeeeee;
color: rgb(51, 51, 51);
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
`;
const ExitButton = styled.button`
border: none;
outline: none;
background-color: #eeeeee;
font-family: system-ui;
font-size: 11px;
float: right;
:hover {
  cursor: pointer;
}
`;
const LastUpdated = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 12px;
color: #757575;
padding-top: 10px;
margin-left: 11px;
`;
const PaymentsText = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
color: #222222;
font-weight: 500;
margin: 12px 0px 6px 11px;
`;
const GiftCardText = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 12px;
color: #595959;
margin-left: 11px;
`;
const EndText = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
margin-left: 11px;
padding: 5px 0px 8px 0px;
color: #222222;
`;
const Cards = styled.div`
height: 30px;
width: 45px;
margin-left: 11px;
`;
const FlexRow = styled.div`
display: flex;
flex-direction: row;
padding-bottom: 8px;
`;
const LockSVG = styled.div`
width: 18px;
height: 18px;
margin-left: 11px;
margin-bottom: 10px;
`;
const SecurePaymentText = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 12px;
font-weight: 500;
padding-left: 5px;
`;

const Modal = ({ sellerName, clickModalX }) => (
  (
    <ModalDisplay>
      <ModalBody>
        <Header>
          {`Shop policies for ${sellerName}`}
          <ExitButton onClick={() => clickModalX()}>X</ExitButton>
        </Header>
        <LastUpdated>Last updated on</LastUpdated>
        <PaymentsText>Payments</PaymentsText>
        <FlexRow>
        <LockSVG>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17,10V7A5,5,0,0,0,7,7v3H5v8a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V10H17Zm-4,7a1,1,0,0,1-2,0V13a1,1,0,0,1,2,0v4Zm2-7H9V7a2.935,2.935,0,0,1,3-3,2.935,2.935,0,0,1,3,3v3Z"></path></svg>
        </LockSVG>
        <SecurePaymentText>
          Secure options
        </SecurePaymentText>
        </FlexRow>
        <FlexRow>
          <Cards>
            <img src={paypal} alt="whatever" />
          </Cards>
          <Cards>
            <img src={masterCardSvg} alt="watever" />
          </Cards>
          <Cards>
            <img src={visa} alt="whatever" />
          </Cards>
          <Cards>
            <img src={amex} alt="whatever" />
          </Cards>
          <Cards>
            <img src={discover} alt="whatever" />
          </Cards>
          <Cards>
            <img src={gift} alt="whatever" />
          </Cards>
        </FlexRow>
        <GiftCardText>Accepts Etsy Gift Cards and Etsy Credits</GiftCardText>
        <EndText>
          Etsy keeps your payment information secure.
           Etsy shops never receive your credit card information.
        </EndText>
      </ModalBody>
    </ModalDisplay>
  )
);

Modal.propTypes = {
  sellerName: PropTypes.string,
  clickModalX: PropTypes.func,
};
Modal.defaultProps = {
  sellerName: '',
  clickModalX: null,
};

export default Modal;
