import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HSmsmFTfspbHEo5XdP0XJa8CYRQECWVexRbYVKBlHqi0TXe0jcIGJt5r5wgEeBWWamVRdGQuB8n60NxJ2KB2Dxl00wqAnEzA9';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log(`Payment Error: ${JSON.parse(error)}`);
        alert(
          'There was an issue with your payment, please make sure you use the provided test card.'
        );
      }); 
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
