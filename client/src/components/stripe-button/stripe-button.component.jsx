import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { clearCart } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CustomButton from '../custom-button/custom-button.component';

const StripeCheckoutButton = ({ price, clearCart, currentUser, history }) => {
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
        if (response.status === 200) {
          clearCart();
        }
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log(`Payment Error: ${JSON.parse(error)}`);
        alert(
          'There was an issue with your payment, please make sure you use the provided test card.'
        );
      });
  };

  return currentUser ? (
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
  ) : (
    <CustomButton onClick={() => history.push('/signin')}>
      SIGN IN TO PAY
    </CustomButton>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StripeCheckoutButton));
